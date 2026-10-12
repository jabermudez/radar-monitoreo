/* Relacionar mediante dos clics; también funciona con Tab + Enter y selectores.
 * Las líneas muestran la elección del aprendiz, nunca su corrección anticipada.
 */
(() => {
  const crear=(tag,text,clase)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(clase)e.className=clase;return e;};
  function conexiones(q,inicial,onChange,editable){
    let respuestas=Array.isArray(inicial)?[...inicial]:q.pares.map(()=>null),activo=null;
    const root=crear('div',undefined,'connection-widget');
    const instruction=crear('p','1. Selecciona un concepto.  2. Conéctalo con su descripción.','connect-instruction');instruction.setAttribute('role','status');root.append(instruction);
    const board=crear('div',undefined,'connection-board');const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.classList.add('connection-lines');svg.setAttribute('aria-hidden','true');
    const left=crear('div',undefined,'connection-column'),right=crear('div',undefined,'connection-column');const izquierdos={},derechos={},selects={};
    q.filas.forEach((i,k)=>{const b=crear('button',undefined,'connect-node concept-node');b.type='button';b.style.setProperty('--pair-color',['#7853fa','#00a6a0','#d2479f','#e27a20'][k%4]);
      b.append(crear('span',String(k+1),'connection-number'),crear('span',q.pares[i][0]),crear('span','○','connect-state'));b.addEventListener('click',()=>{if(!editable())return;activo=i;actualizar();instruction.textContent=`Ahora elige la descripción para «${q.pares[i][0]}».`;});izquierdos[i]=b;left.append(b);});
    q.orden.forEach(j=>{const b=crear('button',q.pares[j][1],'connect-node definition-node');b.type='button';b.addEventListener('click',()=>{if(!editable())return;if(activo===null){instruction.textContent='Primero selecciona un concepto en la columna de origen.';left.querySelector('button').focus();return;}asignar(activo,j);activo=null;actualizar();instruction.textContent='Conexión guardada. Puedes cambiarla antes de finalizar.';});derechos[j]=b;right.append(b);});board.append(svg,left,right);root.append(board);
    const actions=crear('div',undefined,'connection-actions');const clear=crear('button','↺ Reiniciar conexiones','text-button');clear.type='button';clear.addEventListener('click',()=>{if(!editable())return;respuestas=q.pares.map(()=>null);activo=null;onChange([...respuestas]);actualizar();instruction.textContent='Conexiones borradas. Puedes volver a relacionar los conceptos.';});const counter=crear('span',undefined,'connection-counter');actions.append(clear,counter);root.append(actions);
    const alternative=crear('details',undefined,'select-alternative');alternative.append(crear('summary','Usar listas desplegables'));
    q.filas.forEach(i=>{const row=crear('div',undefined,'match-row');const label=crear('label',q.pares[i][0]);label.htmlFor=`rel-${i}`;const select=crear('select');select.id=`rel-${i}`;select.append(new Option('Selecciona una definición…',''));q.orden.forEach(j=>select.append(new Option(q.pares[j][1],String(j))));select.addEventListener('change',()=>{if(editable())asignar(i,select.value===''?null:Number(select.value));});selects[i]=select;row.append(label,select);alternative.append(row);});root.append(alternative);
    function asignar(i,j){if(j!==null)respuestas.forEach((v,k)=>{if(k!==i&&v===j)respuestas[k]=null;});respuestas[i]=j;onChange([...respuestas]);actualizar();}
    function dibujar(){
      if(!board.isConnected)return;
      const box=board.getBoundingClientRect();svg.setAttribute('viewBox',`0 0 ${box.width} ${box.height}`);svg.replaceChildren();
      respuestas.forEach((j,i)=>{if(!Number.isInteger(j))return;const a=izquierdos[i].getBoundingClientRect(),b=derechos[j].getBoundingClientRect();const x1=a.right-box.left,y1=a.top+a.height/2-box.top,x2=b.left-box.left,y2=b.top+b.height/2-box.top;const curve=document.createElementNS('http://www.w3.org/2000/svg','path');curve.setAttribute('d',`M ${x1} ${y1} C ${x1+35} ${y1}, ${x2-35} ${y2}, ${x2} ${y2}`);curve.setAttribute('stroke',izquierdos[i].style.getPropertyValue('--pair-color'));svg.append(curve);});
    }
    function actualizar(){
      q.pares.forEach((_,i)=>{const assigned=Number.isInteger(respuestas[i]);izquierdos[i].classList.toggle('linked',assigned);izquierdos[i].classList.toggle('active',i===activo);izquierdos[i].setAttribute('aria-pressed',String(i===activo));izquierdos[i].querySelector('.connect-state').textContent=assigned?'✓':'○';izquierdos[i].setAttribute('aria-label',`${q.pares[i][0]}${assigned?', conectado con '+q.pares[respuestas[i]][1]:', sin conectar'}`);selects[i].value=assigned?String(respuestas[i]):'';});
      q.pares.forEach((_,j)=>{const source=respuestas.indexOf(j);derechos[j].classList.toggle('linked',source>=0);derechos[j].style.setProperty('--pair-color',source>=0?izquierdos[source].style.getPropertyValue('--pair-color'):'#d8dbec');derechos[j].setAttribute('aria-label',`${q.pares[j][1]}${source>=0?', conectado con '+q.pares[source][0]:', sin conectar'}`);});counter.textContent=`${respuestas.filter(Number.isInteger).length} / ${q.pares.length} conexiones`;requestAnimationFrame(dibujar);
    }
    const observer=new ResizeObserver(()=>{if(board.isConnected)dibujar();else observer.disconnect();});observer.observe(board);actualizar();return root;
  }
  globalThis.RADAR_INTERACCIONES={conexiones};
})();
