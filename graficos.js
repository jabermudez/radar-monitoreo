/* Gráficas SVG propias. Casos sintéticos, unidades visibles, teclado y tabla alternativa.
 * No se contacta ninguna infraestructura real. No se revela la corrección de respuestas.
 */
(() => {
  const NS='http://www.w3.org/2000/svg';
  const e=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
  const s=(tag,attrs,text)=>{const n=document.createElementNS(NS,tag);Object.entries(attrs||{}).forEach(([k,v])=>n.setAttribute(k,v));if(text!==undefined)n.textContent=text;return n;};
  let secuencia=0;
  function grafica(v,{compacta=false}={}){
    const root=e('figure',undefined,'data-visual'+(compacta?' compact':''));const cap=e('figcaption');
    cap.append(e('span','◉ DATOS DEL CASO · SIMULADOS','eyebrow'),e('strong',v.titulo));root.append(cap);
    const output=e('div','Toca o enfoca un punto para explorar su medición.','chart-readout');output.setAttribute('role','status');
    const show=(label,value)=>{output.textContent=`${label} · ${value} ${v.unidad||''}`;};
    if(v.tipo==='registro'){
      const terminal=e('div',undefined,'log-console');terminal.append(e('div','● ● ●  registro de observación','terminal-top'));
      v.filas.forEach(row=>{const line=e('div',undefined,'log-row');row.forEach(t=>line.append(e('span',t)));terminal.append(line);});root.append(terminal);output.textContent='Registro sintético: revisa secuencia, origen y resultado.';
    }else if(v.tipo==='topologia'){
      const topo=e('div',undefined,'network-path');
      v.nodos.forEach(([nombre,estado],i)=>{if(i)topo.append(e('span','→','path-link'));const b=e('button',undefined,'network-node');b.type='button';b.append(e('span',['▣','▦','▤'][i%3],'device-icon'),e('strong',nombre),e('small',estado));b.addEventListener('click',()=>{topo.querySelectorAll('button').forEach(n=>n.classList.toggle('inspected',n===b));output.textContent=`${nombre} · Observación: ${estado}.`;});topo.append(b);});root.append(topo);output.textContent='Selecciona un dispositivo y examina su observación.';
    }else if(v.tipo==='medidores'){
      const meters=e('div',undefined,'meter-grid');v.valores.forEach((n,i)=>{const b=e('button',undefined,'meter-card');b.type='button';b.style.setProperty('--fill',n/v.max*100+'%');b.append(e('span',v.etiquetas[i]),e('strong',`${n} ${v.unidad}`));const track=e('div',undefined,'meter-track');track.append(e('i'));b.append(track);b.addEventListener('click',()=>show(v.etiquetas[i],n));meters.append(b);});root.append(meters);
    }else{
      const svg=s('svg',{viewBox:'0 0 560 235',class:'plot',role:'group','aria-label':v.titulo});const top=18,bottom=178,left=48,right=526;const max=v.max||Math.max(...v.valores,1);
      const y=n=>bottom-(bottom-top)*n/max;
      [0,.25,.5,.75,1].forEach(f=>{svg.append(s('line',{x1:left,y1:y(max*f),x2:right,y2:y(max*f),class:'grid-line'}),s('text',{x:left-9,y:y(max*f)+4,'text-anchor':'end',class:'axis-label'},(max*f).toLocaleString('es-CO',{maximumFractionDigits:2})));});
      svg.append(s('text',{x:left,y:220,class:'axis-label'},v.unidad));
      const inspect=(node,i)=>{
        node.setAttribute('tabindex','0');node.setAttribute('role','button');node.setAttribute('aria-label',`${v.etiquetas[i]}: ${v.valores[i]} ${v.unidad}`);
        node.addEventListener('click',()=>show(v.etiquetas[i],v.valores[i]));node.addEventListener('focus',()=>show(v.etiquetas[i],v.valores[i]));
        node.addEventListener('keydown',event=>{if(['Enter',' '].includes(event.key)){event.preventDefault();show(v.etiquetas[i],v.valores[i]);}});
      };
      if(v.tipo==='linea'){
        const x=i=>left+(right-left)*i/Math.max(1,v.valores.length-1);const coords=v.valores.map((n,i)=>`${x(i)},${y(n)}`).join(' ');const gid='gradient-'+(++secuencia);
        const defs=s('defs'),g=s('linearGradient',{id:gid,x1:'0',y1:'0',x2:'0',y2:'1'});g.append(s('stop',{offset:'0%','stop-color':'#825cff','stop-opacity':'.28'}),s('stop',{offset:'100%','stop-color':'#825cff','stop-opacity':'0'}));defs.append(g);svg.append(defs);
        svg.append(s('polygon',{points:`${left},${bottom} ${coords} ${right},${bottom}`,fill:`url(#${gid})`}),s('polyline',{points:coords,class:'trend-line',pathLength:1}));
        v.valores.forEach((n,i)=>{const dot=s('circle',{cx:x(i),cy:y(n),r:6,class:'chart-point'});inspect(dot,i);svg.append(dot,s('text',{x:x(i),y:201,'text-anchor':'middle',class:'axis-label'},v.etiquetas[i]));});
      }else{
        const step=(right-left)/v.valores.length;v.valores.forEach((n,i)=>{const group=s('g',{class:'bar-group'});inspect(group,i);const x=left+i*step+step*.2;group.append(s('rect',{x,y:y(n),width:step*.6,height:Math.max(0,bottom-y(n)),rx:7,class:'chart-bar'}),s('text',{x:x+step*.3,y:y(n)-7,'text-anchor':'middle',class:'bar-value'},n),s('text',{x:x+step*.3,y:201,'text-anchor':'middle',class:'axis-label'},v.etiquetas[i]));svg.append(group);});
      }root.append(svg);
    }
    root.append(output);
    if(v.valores){const details=e('details',undefined,'data-table');details.append(e('summary','Ver datos en tabla'));const table=e('table');const head=e('tr');head.append(e('th','Muestra / recurso'),e('th',v.unidad));table.append(head);v.valores.forEach((n,i)=>{const row=e('tr');row.append(e('td',v.etiquetas[i]),e('td',n));table.append(row);});details.append(table);root.append(details);}
    return root;
  }
  function perfil(temas){
    const root=e('figure',undefined,'profile-chart');const svg=s('svg',{viewBox:'0 0 420 310',role:'img','aria-label':'Perfil de presaberes por tema. Los porcentajes también aparecen en las tarjetas.'});
    svg.append(s('title',{},'Perfil de presaberes por tema'));
    const c=[210,146],r=95;const p=(i,f)=>[c[0]+Math.cos(-Math.PI/2+i*Math.PI*2/temas.length)*r*f,c[1]+Math.sin(-Math.PI/2+i*Math.PI*2/temas.length)*r*f];
    [.25,.5,.75,1].forEach(f=>svg.append(s('polygon',{points:temas.map((_,i)=>p(i,f).join(',')).join(' '),class:'profile-grid'})));
    temas.forEach((t,i)=>{const [x,y]=p(i,1);svg.append(s('line',{x1:c[0],y1:c[1],x2:x,y2:y,class:'profile-grid'}));const [lx,ly]=p(i,1.32);svg.append(s('text',{x:lx,y:ly,'text-anchor':'middle',class:'profile-label'},['Fundamentos','Indicadores','Redes','Servidores','Diagnóstico'][i]));});
    svg.append(s('polygon',{points:temas.map((t,i)=>p(i,t.porcentaje/100).join(',')).join(' '),class:'profile-data'}));temas.forEach((t,i)=>{const [x,y]=p(i,t.porcentaje/100);svg.append(s('circle',{cx:x,cy:y,r:4,class:'chart-point'}));});root.append(svg,e('figcaption','Tu perfil real · un punto de partida para aprender'));return root;
  }
  globalThis.RADAR_GRAFICOS={grafica,perfil};
})();
