/* Lógica pura compartida con pruebas automatizadas; sin dependencias de interfaz. */
(() => {
  const config = {duracionMinutos:40,porTema:{mc:3,tf:2,match:1},nivelIntermedio:50,nivelAvanzado:80};
  function aleatorio(max){
    // Rechazo elimina el sesgo del módulo. No se usa el nombre como semilla.
    const limite = Math.floor(4294967296 / max) * max;
    const buffer = new Uint32Array(1);
    do { globalThis.crypto.getRandomValues(buffer); } while(buffer[0]>=limite);
    return buffer[0]%max;
  }
  function barajar(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=aleatorio(i+1);[a[i],a[j]]=[a[j],a[i]];}return a;}
  function validarBanco(banco){
    const ids=new Set();
    for(const q of banco.preguntas){
      if(ids.has(q.id)||!banco.temas[q.tema]||!q.texto||!q.explicacion)throw Error('Pregunta incompleta o ID repetido: '+q.id);
      ids.add(q.id);
      if(q.tipo==='match'){
        if(!q.pares||q.pares.length<2||q.pares.some(p=>p.length!==2||!p[0]||!p[1])||new Set(q.pares.map(p=>p[1])).size!==q.pares.length)throw Error('Relación inválida: '+q.id);
      }else if(!['mc','tf'].includes(q.tipo)||!q.opciones||new Set(q.opciones).size!==q.opciones.length||!Number.isInteger(q.correcta)||q.correcta<0||q.correcta>=q.opciones.length)throw Error('Opciones inválidas: '+q.id);
    }
    for(const tema of Object.keys(banco.temas))for(const [tipo,cantidad]of Object.entries(config.porTema))if(banco.preguntas.filter(q=>q.tema===tema&&q.tipo===tipo).length<cantidad)throw Error('Faltan preguntas de '+tipo+' en '+tema);
    return true;
  }
  function seleccionar(banco){
    validarBanco(banco);
    let seleccion=[];
    for(const tema of Object.keys(banco.temas))for(const [tipo,cantidad]of Object.entries(config.porTema)){
      const pool=banco.preguntas.filter(q=>q.tema===tema&&q.tipo===tipo);
      // Una pregunta visual por tema, cuando existe, mantiene el diagnóstico gráfico.
      const visual=tipo==='mc'&&cantidad>0?barajar(pool.filter(q=>q.visual))[0]:null;
      if(visual)seleccion.push(visual,...barajar(pool.filter(q=>q.id!==visual.id)).slice(0,cantidad-1));
      else seleccion.push(...barajar(pool).slice(0,cantidad));
    }
    return barajar(seleccion).map(q=>({...q,orden:q.tipo==='match'?barajar(q.pares.map((_,i)=>i)):barajar(q.opciones.map((_,i)=>i)),filas:q.tipo==='match'?barajar(q.pares.map((_,i)=>i)):undefined}));
  }
  function completa(q,a){return q.tipo==='match'?q.pares.every((_,i)=>Number.isInteger(a?.[i])&&a[i]>=0&&a[i]<q.pares.length):Number.isInteger(a)&&a>=0&&a<q.opciones.length;}
  function puntos(q,a){return q.tipo==='match'?q.pares.reduce((s,_,i)=>s+(a?.[i]===i?1:0),0)/q.pares.length:(a===q.correcta?1:0);}
  function nivel(p){return p>=config.nivelAvanzado?'Avanzado':p>=config.nivelIntermedio?'Intermedio':'Básico';}
  function calificar(s,temas){
    const total=s.preguntas.reduce((v,q)=>v+puntos(q,s.respuestas[q.id]),0);
    const porcentaje=total/s.preguntas.length*100;
    const resultados=Object.entries(temas).map(([id,t])=>{
      const qs=s.preguntas.filter(q=>q.tema===id);const puntosTema=qs.reduce((v,q)=>v+puntos(q,s.respuestas[q.id]),0);
      return {id,nombre:t.nombre,puntos:puntosTema,maximo:qs.length,porcentaje:puntosTema/qs.length*100,ruta:t.ruta};
    });
    return {puntos:total,maximo:s.preguntas.length,porcentaje,nivel:nivel(porcentaje),completas:s.preguntas.filter(q=>completa(q,s.respuestas[q.id])).length,temas:resultados};
  }
  globalThis.RADAR_MOTOR={config,barajar,seleccionar,completa,puntos,nivel,calificar,validarBanco};
})();
