/* Interfaz estática. El banco y las respuestas son públicos: la aleatorización
 * dificulta la copia casual, pero no ofrece seguridad de examen con backend. */
(() => {
  'use strict';
  const B=globalThis.RADAR_BANCO, M=globalThis.RADAR_MOTOR;
  const $=id=>document.getElementById(id);
  const KEY='radar-monitoreo-sesion-v2';
  const fmt=n=>n.toLocaleString('es-CO',{maximumFractionDigits:2});
  const fecha=n=>new Date(n).toLocaleString('es-CO',{timeZone:'America/Bogota'});
  let sesion=null, intervalo=null, vista='inicio';
  // Todo dato del aprendiz y de archivos importados se inserta como texto.
  function elemento(tag,texto,clase){const e=document.createElement(tag);if(texto!==undefined)e.textContent=texto;if(clase)e.className=clase;return e;}
  function boton(texto,clase,accion){const b=elemento('button',texto,clase);b.type='button';b.addEventListener('click',accion);return b;}
  function mostrar(id){['inicio','prueba','resultados'].forEach(x=>$(x).hidden=x!==id);vista=id;}
  function guardar(){try{localStorage.setItem(KEY,JSON.stringify(sesion));}catch{$('storage-warning').hidden=false;}}
  function leer(){try{return JSON.parse(localStorage.getItem(KEY)||'null');}catch{return null;}}
  function valido(s){
    // Comprobación de estructura de la sesión. No constituye protección contra manipulación.
    if(!s||s.version!==B.version||typeof s.id!=='string'||typeof s.nombre!=='string'||!Number.isFinite(s.inicio)||!Number.isFinite(s.limite)||s.limite<=s.inicio||!Array.isArray(s.preguntas)||s.preguntas.length!==Object.keys(B.temas).length*Object.values(M.config.porTema).reduce((a,b)=>a+b,0)||!s.respuestas||typeof s.respuestas!=='object'||!Number.isInteger(s.actual)||s.actual<0||s.actual>=s.preguntas.length)return false;
    const ids=new Set();
    for(const q of s.preguntas){
      const original=B.preguntas.find(p=>p.id===q.id);
      if(!original||ids.has(q.id)||q.tema!==original.tema||q.tipo!==original.tipo||q.texto!==original.texto||JSON.stringify(q.opciones)!==JSON.stringify(original.opciones)||JSON.stringify(q.pares)!==JSON.stringify(original.pares)||q.correcta!==original.correcta)return false;
      ids.add(q.id);
      const n=q.tipo==='match'?q.pares.length:q.opciones.length;
      if(!Array.isArray(q.orden)||q.orden.length!==n||new Set(q.orden).size!==n||q.orden.some(i=>!Number.isInteger(i)||i<0||i>=n))return false;
      if(q.tipo==='match'&&(!Array.isArray(q.filas)||q.filas.length!==n||new Set(q.filas).size!==n||q.filas.some(i=>!Number.isInteger(i)||i<0||i>=n)))return false;
    }
    return !s.fin||Number.isFinite(s.fin);
  }
  function comenzar(nombre){
    sesion={version:B.version,id:crypto.randomUUID?crypto.randomUUID():Array.from(crypto.getRandomValues(new Uint32Array(4)),n=>n.toString(16).padStart(8,'0')).join(''),nombre:nombre.trim()||'Aprendiz sin nombre',inicio:Date.now(),limite:Date.now()+M.config.duracionMinutos*60000,preguntas:M.seleccionar(B),respuestas:{},actual:0,fin:null,motivo:null};
    guardar();abrirPrueba();
  }
  function abrirPrueba(){
    if(sesion.fin){verResultados();return;}
    mostrar('prueba');$('learner-label').textContent=`${sesion.nombre} · Sesión ${sesion.id.slice(0,8)}`;
    pintarPregunta();clearInterval(intervalo);reloj();if(!sesion.fin)intervalo=setInterval(reloj,500);
  }
  function reloj(){
    if(!sesion||sesion.fin)return;
    const restante=Math.max(0,Math.ceil((sesion.limite-Date.now())/1000));
    $('timer').textContent=`${String(Math.floor(restante/60)).padStart(2,'0')}:${String(restante%60).padStart(2,'0')}`;
    document.querySelector('.timer-box').classList.toggle('urgent',restante<=300);
    $('timer-alert').hidden=restante>300;
    if(restante===0)finalizar('tiempo');
  }
  function editable(){if(!sesion||sesion.fin)return false;if(Date.now()>=sesion.limite){finalizar('tiempo');return false;}return true;}
  function actualizarMapa(){
    const completas=sesion.preguntas.filter(q=>M.completa(q,sesion.respuestas[q.id])).length;
    $('answered-count').textContent=`${completas}/${sesion.preguntas.length}`;
    $('progress').max=sesion.preguntas.length;$('progress').value=completas;
    $('question-map').replaceChildren();
    sesion.preguntas.forEach((q,i)=>{
      const a=sesion.respuestas[q.id],completa=M.completa(q,a);
      const parcial=q.tipo==='match'&&Array.isArray(a)&&a.some(Number.isInteger)&&!completa;
      const b=boton(i+1,'',()=>navegar(i));
      b.classList.toggle('complete',completa);b.classList.toggle('partial',parcial);b.classList.toggle('current',i===sesion.actual);
      b.setAttribute('aria-label',`Pregunta ${i+1}, ${completa?'respondida':parcial?'parcialmente respondida':'pendiente'}`);
      if(i===sesion.actual)b.setAttribute('aria-current','step');$('question-map').append(b);
    });
    $('encouragement').textContent=completas>=20?'Vas construyendo tu mapa. Revisa con calma las preguntas pendientes.':completas>=10?'Ya avanzaste un buen tramo. Confía en lo que sabes y sigue explorando.':'Cada respuesta ayuda a reconocer tu punto de partida.';
  }
  function pintarPregunta(){
    const q=sesion.preguntas[sesion.actual];
    $('topic-label').textContent=B.temas[q.tema].nombre;
    $('type-label').textContent={mc:'Opción múltiple',tf:'Verdadero / Falso',match:'Relacionar conceptos'}[q.tipo];
    $('question-counter').textContent=`PREGUNTA ${String(sesion.actual+1).padStart(2,'0')} DE ${sesion.preguntas.length}`;
    $('question-text').textContent=q.texto;$('question-help').textContent=q.tipo==='match'?'Selecciona una definición para cada concepto. Cada acierto aporta una parte del punto. Usa cada definición una vez.':'Selecciona una respuesta. Puedes cambiarla mientras la sesión esté activa.';
    $('answers').replaceChildren();$('case-visual').replaceChildren();
    if(q.visual)$('case-visual').append(RADAR_GRAFICOS.grafica(q.visual));
    $('response-status').textContent=M.completa(q,sesion.respuestas[q.id])?'✓ Tu respuesta está guardada. Puedes revisarla.':'Tu elección se guardará automáticamente.';
    $('answers').classList.toggle('truth-options',q.tipo==='tf');
    const card=document.querySelector('.question-card');card.classList.remove('question-enter');void card.offsetWidth;card.classList.add('question-enter');
    if(q.tipo==='match'){
      $('answers').append(RADAR_INTERACCIONES.conexiones(q,sesion.respuestas[q.id],a=>{sesion.respuestas[q.id]=a;guardar();actualizarMapa();respuestaGuardada();},editable));
    }else{
      const field=elemento('fieldset',undefined,'options');field.append(elemento('legend','Respuestas disponibles'));
      q.orden.forEach((j,k)=>{
        const label=elemento('label',undefined,'option');const radio=elemento('input');radio.type='radio';radio.name='respuesta';radio.value=String(j);radio.checked=sesion.respuestas[q.id]===j;
        radio.addEventListener('change',()=>{if(!editable())return;sesion.respuestas[q.id]=j;guardar();actualizarMapa();respuestaGuardada();});
        const marker=elemento('span',q.tipo==='tf'?(j===0?'✓':'×'):String.fromCharCode(65+k),'option-letter');marker.setAttribute('aria-hidden','true');
        const check=elemento('span','✓','choice-check');check.setAttribute('aria-hidden','true');
        label.append(radio,marker,elemento('span',q.opciones[j]),check);field.append(label);
      });$('answers').append(field);
    }
    $('prev').disabled=sesion.actual===0;$('next').textContent=sesion.actual===sesion.preguntas.length-1?'Revisar y finalizar →':'Siguiente →';actualizarMapa();
  }
  function navegar(i){if(!editable())return;sesion.actual=i;guardar();pintarPregunta();$('question-text').focus();}
  function revisar(){if(!editable())return;const completas=sesion.preguntas.filter(q=>M.completa(q,sesion.respuestas[q.id])).length;$('finish-summary').textContent=`Tienes ${completas} preguntas completas y ${sesion.preguntas.length-completas} pendientes o parciales. Las relaciones parcialmente correctas reciben crédito parcial.`;$('finish-dialog').showModal();}
  function finalizar(motivo){
    if(!sesion||sesion.fin)return;
    clearInterval(intervalo);sesion.fin=motivo==='tiempo'?sesion.limite:Math.min(Date.now(),sesion.limite);sesion.motivo=motivo;
    if($('finish-dialog').open)$('finish-dialog').close();guardar();verResultados();
  }
  function resumen(){
    const r=M.calificar(sesion,B.temas);
    return {formato:'radar-monitoreo',version:sesion.version,sesion:sesion.id,aprendiz:sesion.nombre,inicio:new Date(sesion.inicio).toISOString(),fin:new Date(sesion.fin).toISOString(),motivo:sesion.motivo,duracionSegundos:Math.round((sesion.fin-sesion.inicio)/1000),...r,preguntas:sesion.preguntas.map(q=>({id:q.id,tema:q.tema,tipo:q.tipo,puntos:M.puntos(q,sesion.respuestas[q.id]),completa:M.completa(q,sesion.respuestas[q.id])}))};
  }
  function verResultados(){
    mostrar('resultados');const root=$('resultados');root.replaceChildren();const r=resumen();
    const hero=elemento('div',undefined,'result-hero');const ring=elemento('div',undefined,'score-ring');ring.style.setProperty('--score',r.porcentaje);
    const score=elemento('div');score.append(elemento('strong',fmt(r.porcentaje)),elemento('span','PUNTOS SOBRE 100'));ring.append(score);
    const content=elemento('div');content.append(elemento('p','EXPLORACIÓN COMPLETADA','eyebrow'),elemento('h1',`Tu punto de partida: ${r.nivel.toLowerCase()}.`));
    content.append(elemento('p',r.nivel==='Avanzado'?'Tienes una base sólida para profundizar. El siguiente reto es demostrar lo que sabes en el laboratorio.':r.nivel==='Intermedio'?'Ya reconoces varias señales del monitoreo. La práctica te ayudará a conectar conceptos y decisiones.':'Este es el comienzo de tu ruta. Cada concepto nuevo te ayudará a comprender mejor lo que ocurre en una red.'));
    const meta=elemento('div',undefined,'result-meta');meta.append(elemento('span',r.aprendiz),elemento('span',`${fmt(r.puntos)} / ${r.maximo} puntos`),elemento('span',`${r.completas} / ${r.maximo} preguntas completas`));content.append(meta);hero.append(ring,content);root.append(hero);
    root.append(elemento('p',`${r.motivo==='tiempo'?'Finalizada al agotarse el tiempo':'Finalizada por el aprendiz'} · ${fecha(sesion.fin)} (Bogotá) · Sesión ${r.sesion.slice(0,8)}`,'soft-note'));
    root.append(elemento('p',`Nivel orientativo: básico < ${M.config.nivelIntermedio} %, intermedio desde ${M.config.nivelIntermedio} % y avanzado desde ${M.config.nivelAvanzado} %. Cada pregunta vale un punto; las relaciones admiten crédito parcial. Las respuestas pendientes valen cero.`,'soft-note'));
    const actions=elemento('div',undefined,'result-actions');
    actions.append(boton('Descargar resumen JSON ↓','button primary',()=>descargar(JSON.stringify(r,null,2),'application/json',`radar-${r.sesion.slice(0,8)}.json`)),boton('Descargar CSV ↓','button secondary',()=>exportarCSV([r])),boton('Imprimir / Guardar PDF','button secondary',()=>window.print()),boton('Nueva exploración','text-button',()=>{try{localStorage.removeItem(KEY);}catch{}sesion=null;prepararInicio();mostrar('inicio');$('nombre').focus();}));root.append(actions);
    root.append(elemento('h2','Tu ruta por tema'));const grid=elemento('div',undefined,'feedback-grid');
    r.temas.forEach(t=>{const card=elemento('article',undefined,'feedback-card');const head=elemento('div',undefined,'feedback-head');head.append(elemento('h3',t.nombre),elemento('b',`${fmt(t.porcentaje)} %`));card.append(head);
      const p=elemento('progress');p.max=100;p.value=t.porcentaje;p.setAttribute('aria-label',t.nombre);card.append(p);
      card.append(elemento('p',`${fmt(t.puntos)} / ${t.maximo} puntos. ${t.porcentaje>=80?'Fortaleza inicial: aplica estos saberes y verifica tus decisiones.':t.porcentaje>=50?'Base en construcción: conecta tus aciertos con pruebas prácticas.':'Oportunidad de aprendizaje: empieza por los conceptos y ensáyalos paso a paso.'}`),elemento('p',t.ruta));grid.append(card);});root.append(grid);
    const details=elemento('details');details.append(elemento('summary','Aprende de tus respuestas · revisión con explicaciones'));
    sesion.preguntas.forEach((q,i)=>{const item=elemento('article',undefined,'review-item');item.append(elemento('span',`${fmt(M.puntos(q,sesion.respuestas[q.id]))} / 1 punto`,'review-score'),elemento('h3',`${i+1}. ${q.texto}`));
      if(q.tipo==='match')q.pares.forEach((p,j)=>{const v=sesion.respuestas[q.id]?.[j];item.append(elemento('p',`${p[0]} → Tu respuesta: ${q.pares[v]?.[1]||'Sin responder'}. Correspondencia: ${p[1]}.`));});
      else item.append(elemento('p',`Tu respuesta: ${q.opciones[sesion.respuestas[q.id]]||'Sin responder'}. Respuesta esperada: ${q.opciones[q.correcta]}.`));
      item.append(elemento('p',q.explicacion));details.append(item);});root.append(details);
    const profile=elemento('div',undefined,'result-profile');profile.append(elemento('div','Cada área cuenta. Este es el mapa de tus saberes actuales.','profile-intro'),RADAR_GRAFICOS.perfil(r.temas));root.insertBefore(profile,grid);
    celebrar();$('contenido').focus();
  }
  function descargar(texto,tipo,nombre){const url=URL.createObjectURL(new Blob([tipo==='text/csv'?'\ufeff':'',texto],{type:tipo+';charset=utf-8'}));const a=elemento('a');a.href=url;a.download=nombre;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000);}
  // Neutraliza fórmulas en nombres importados al abrir un CSV en Excel.
  function celda(v){let s=String(v??'');if(/^[\s]*[=+@-]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"';}
  function exportarCSV(items){
    const header=['Aprendiz','Sesion','Inicio UTC','Fin UTC','Finalizacion','Duracion segundos','Puntos','Maximo','Porcentaje','Nivel','Preguntas completas',...Object.values(B.temas).map(t=>t.nombre+' (%)')];
    const rows=items.map(r=>[r.aprendiz,r.sesion,r.inicio,r.fin,r.motivo,r.duracionSegundos,fmt(r.puntos),r.maximo,fmt(r.porcentaje),r.nivel,r.completas,...Object.keys(B.temas).map(id=>fmt(r.temas.find(t=>t.id===id).porcentaje))]);
    descargar([header,...rows].map(row=>row.map(celda).join(';')).join('\r\n'),'text/csv',items.length===1?`radar-${items[0].sesion.slice(0,8)}.csv`:'radar-grupo.csv');
  }
  function prepararInicio(){const guardada=leer();const existe=valido(guardada);$('resume-box').hidden=!existe;$('start-form').hidden=existe;if(existe)$('resume-box').querySelector('p').textContent=guardada.fin?`Hay un resultado guardado de ${guardada.nombre}.`:`Hay una exploración guardada de ${guardada.nombre}. El reloj sigue contando.`;$('resume').textContent=existe&&guardada.fin?'Ver resultado guardado →':'Retomar exploración →';}

  function respuestaGuardada(){
    const status=$('response-status');status.textContent='✓ Elección guardada. Sigue explorando o revísala cuando quieras.';status.classList.remove('save-flash');void status.offsetWidth;status.classList.add('save-flash');
  }
  function celebrar(){
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const shower=elemento('div',undefined,'completion-sparks');shower.setAttribute('aria-hidden','true');
    for(let i=0;i<20;i++){const dot=elemento('i');dot.style.setProperty('--x',i*5+'vw');dot.style.setProperty('--delay',i%5*.08+'s');dot.style.setProperty('--color',['#825cff','#00b9be','#d4fb55','#f66caf'][i%4]);shower.append(dot);}document.body.append(shower);setTimeout(()=>shower.remove(),2300);
  }
  function iniciarDemo(){
    const escenarios={normal:[{tipo:'linea',titulo:'CPU · servidor Linux',unidad:'%',max:100,etiquetas:['00','01','02','03','04','05'],valores:[22,28,24,33,27,31]},{tipo:'linea',titulo:'Tráfico · uplink del switch',unidad:'Mbps',max:100,etiquetas:['00','01','02','03','04','05'],valores:[15,25,18,31,24,36]},{tipo:'linea',titulo:'Respuesta · servicio HTTP',unidad:'ms',max:500,etiquetas:['00','01','02','03','04','05'],valores:[40,48,44,42,51,46]}],evento:[{tipo:'linea',titulo:'CPU · servidor Linux',unidad:'%',max:100,etiquetas:['00','01','02','03','04','05'],valores:[22,28,59,84,92,95]},{tipo:'linea',titulo:'Tráfico · uplink del switch',unidad:'Mbps',max:100,etiquetas:['00','01','02','03','04','05'],valores:[15,25,46,78,93,96]},{tipo:'linea',titulo:'Respuesta · servicio HTTP',unidad:'ms',max:500,etiquetas:['00','01','02','03','04','05'],valores:[40,48,94,220,390,460]}]};
    function set(mode){$('demo-grid').replaceChildren(...escenarios[mode].map(v=>RADAR_GRAFICOS.grafica(v,{compacta:true})));document.querySelectorAll('[data-demo]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.demo===mode)));$('demo-status').textContent=mode==='normal'?'Ventana normal simulada · muestras cada 60 segundos.':'Evento simulado · tres señales cambian en la misma ventana. Explora los puntos; aún hace falta investigar la causa.';}
    document.querySelectorAll('[data-demo]').forEach(b=>b.addEventListener('click',()=>set(b.dataset.demo)));set('normal');
    $('radar-explore').addEventListener('click',()=>{const panel=document.querySelector('.radar-panel');panel.classList.toggle('radar-boost');$('radar-explore').setAttribute('aria-pressed',String(panel.classList.contains('radar-boost')));});
  }
  try{
    M.validarBanco(B);prepararInicio();iniciarDemo();
    $('start-form').addEventListener('submit',e=>{e.preventDefault();comenzar($('nombre').value);});
    $('resume').addEventListener('click',()=>{const s=leer();if(!valido(s)){prepararInicio();return;}sesion=s;abrirPrueba();});
    $('discard').addEventListener('click',()=>{if(!window.confirm('¿Borrar el avance o resultado guardado de este navegador?'))return;try{localStorage.removeItem(KEY);}catch{}sesion=null;prepararInicio();});
    $('prev').addEventListener('click',()=>navegar(sesion.actual-1));$('next').addEventListener('click',()=>sesion.actual===sesion.preguntas.length-1?revisar():navegar(sesion.actual+1));
    $('review-open').addEventListener('click',revisar);
    $('finish-confirm').addEventListener('click',e=>{e.preventDefault();if(editable())finalizar('manual');});
    document.addEventListener('visibilitychange',()=>{if(!document.hidden)reloj();});
    // Sincroniza el intento si se abre en otra pestaña del mismo navegador.
    window.addEventListener('storage',e=>{if(e.key!==KEY)return;const s=leer();if(sesion&&valido(s)&&s.id===sesion.id){sesion=s;if(s.fin){clearInterval(intervalo);verResultados();}else if(vista==='prueba'){pintarPregunta();reloj();}}else if(vista==='inicio')prepararInicio();});
  }catch(error){$('fatal-error').textContent='No se pudo iniciar el diagnóstico. Revisa la configuración del banco de preguntas. '+error.message;$('fatal-error').hidden=false;$('start-form').hidden=true;}
})();
