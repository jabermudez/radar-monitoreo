/* Ejecutar con Node.js: node pruebas.cjs. No forma parte de la aplicación. */
const assert=require('node:assert/strict');
require('./preguntas.js');require('./motor.js');
const B=globalThis.RADAR_BANCO,M=globalThis.RADAR_MOTOR;
assert.equal(M.validarBanco(B),true);assert.equal(B.preguntas.length,100);
assert.deepEqual(Object.keys(B.temas),['conceptos','indicadores','infraestructura','servidores','diagnostico']);
assert(B.preguntas.every(q=>!/entregable|quinto producto|roles del equipo|entregas prácticas|lista de chequeo|sección 5/i.test(q.texto)));
for(const q of B.preguntas.filter(q=>q.visual)){
  const v=q.visual;
  if(v.valores){assert.equal(v.valores.length,v.etiquetas.length);assert(v.valores.every(n=>Number.isFinite(n)&&n>=0&&n<=v.max));}
}
const fs=require('node:fs');
assert(!fs.readFileSync('index.html','utf8').includes('id="instructor"'));
assert(!fs.readFileSync('app.js','utf8').includes('instructor-open'));
const conjuntos=new Set(),ordenes=new Set();
for(let i=0;i<1000;i++){
  const preguntas=M.seleccionar(B);
  assert.equal(preguntas.length,30);assert.equal(new Set(preguntas.map(q=>q.id)).size,30);
  for(const tema of Object.keys(B.temas)){
    assert(preguntas.some(q=>q.tema===tema&&q.visual),'Falta caso visual en '+tema);
    assert.equal(B.preguntas.filter(q=>q.tema===tema).length,20);
    for(const [tipo,n]of Object.entries(M.config.porTema))assert.equal(preguntas.filter(q=>q.tema===tema&&q.tipo===tipo).length,n);
  }
  preguntas.forEach(q=>{const n=q.tipo==='match'?q.pares.length:q.opciones.length;assert.equal(new Set(q.orden).size,n);assert(q.orden.every(i=>i>=0&&i<n));});
  conjuntos.add(preguntas.map(q=>q.id).sort().join(','));ordenes.add(preguntas.map(q=>q.id).join(','));
}
assert.equal(conjuntos.size,1000);assert.equal(ordenes.size,1000);
const preguntas=M.seleccionar(B),s={preguntas,respuestas:{}};
let r=M.calificar(s,B.temas);assert.equal(r.puntos,0);assert.equal(r.nivel,'Básico');assert.equal(r.completas,0);
for(const q of preguntas)s.respuestas[q.id]=q.tipo==='match'?q.pares.map((_,i)=>i):q.correcta;
r=M.calificar(s,B.temas);assert.equal(r.porcentaje,100);assert.equal(r.nivel,'Avanzado');assert.equal(r.completas,30);assert(r.temas.every(t=>t.porcentaje===100));
const match=preguntas.find(q=>q.tipo==='match');assert.equal(M.puntos(match,[0,null,null,null]),.25);assert.equal(M.completa(match,[0,null,null,null]),false);
assert.equal(M.completa(match,[0,1,2,99]),false);
assert.equal(M.nivel(49.99),'Básico');assert.equal(M.nivel(50),'Intermedio');assert.equal(M.nivel(79.99),'Intermedio');assert.equal(M.nivel(80),'Avanzado');
const incompleto={...B,preguntas:B.preguntas.filter(q=>q.tipo!=='match')};assert.throws(()=>M.validarBanco(incompleto));
console.log('OK: banco de 100; 1.000 sesiones distintas con cobertura equilibrada; puntuación completa, vacía y parcial; límites de nivel y banco inválido.');
