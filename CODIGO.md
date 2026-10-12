# Radar 2.0 · Código completo de la aplicación del aprendiz

Cada bloque corresponde al archivo editable entregado. La consola del instructor está en una carpeta local independiente que no se publica.

## index.html

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#7151ed">
  <meta name="description" content="Explora tus presaberes sobre monitoreo de redes. Diagnóstico interactivo para la ficha 3399813.">
  <title>Radar · Presaberes de monitoreo</title>
  <link rel="icon" href="./favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="./styles.css"><link rel="stylesheet" href="./experiencia.css">
  <script defer src="./preguntas.js"></script>
  <script defer src="./motor.js"></script>
  <script defer src="./graficos.js"></script>
  <script defer src="./interacciones.js"></script>
  <script defer src="./app.js"></script>
</head>
<body>
  <a class="skip" href="#contenido">Ir al contenido</a>
  <header class="topbar"><a class="brand" href="./index.html" aria-label="Radar, inicio"><span class="brand-icon">◎</span> radar<span class="brand-dot">.</span></a><span class="course">GESTIÓN DE REDES DE DATOS <b>Ficha 3399813</b></span><span class="header-badge"><span class="live-dot"></span> EXPLORACIÓN DE PRESABERES</span></header>
  <main id="contenido" tabindex="-1">
    <section id="inicio" class="landing">
      <div class="hero-copy"><p class="eyebrow"><span class="live-dot"></span> TU PRÓXIMA CONEXIÓN EMPIEZA AQUÍ</p><h1>Tu conocimiento<br>ya tiene <em>señal.</em></h1><p class="intro">Descubre qué sabes sobre monitoreo de redes y encuentra tu próxima oportunidad para aprender.</p><div class="facts"><span><b>40</b> minutos</span><span><b>30</b> preguntas</span><span><b>5</b> temas</span></div><p class="soft-note">Lo que ya sabes de redes y servidores es parte de esta misión. Explóralo y descubre hasta dónde puedes llegar.</p></div>
      <div class="radar-panel"><div class="radar-art" aria-hidden="true"><div class="radar-ring ring1"></div><div class="radar-ring ring2"></div><div class="radar-ring ring3"></div><div class="radar-sweep"></div><span class="node n1"></span><span class="node n2"></span><span class="node n3"></span><span class="radar-center">◎</span></div><div class="signal-label"><span class="live-dot"></span> CONECTANDO CON TUS PRESABERES</div><div class="float-chip chip1">↗ Indicadores</div><div class="float-chip chip2">⌁ Servicios</div><button id="radar-explore" class="radar-control" type="button" aria-pressed="false">⌁ Explorar señal</button></div>
      <div class="start-card" id="start-card"><div><p class="eyebrow">PREPARA TU EXPLORACIÓN</p><h2>¿Quién está al frente del radar?</h2><p>Interpreta gráficas, conecta conceptos y resuelve situaciones de switches, routers y servidores. Responde con lo que sabes hoy.</p></div><form id="start-form"><label for="nombre">Nombre del aprendiz <span>(opcional)</span></label><input id="nombre" name="nombre" maxlength="90" autocomplete="name" placeholder="Escribe tu nombre"><button class="button primary" type="submit">Comenzar mi diagnóstico <span>→</span></button><p class="form-note">Al comenzar se activa el tiempo. El avance se guarda en este navegador y el reloj sigue si cierras la página.</p></form><div id="resume-box" hidden><p>Hay una exploración guardada en este navegador.</p><button id="resume" class="button primary">Retomar exploración →</button><button id="discard" class="text-button">Borrar avance y empezar de nuevo</button></div></div>
      <section class="telemetry-lab" aria-label="Explorador de monitoreo"><div class="lab-heading"><div><p class="eyebrow">UN VISTAZO A LO QUE VAS A EXPLORAR</p><h2>Las métricas cuentan una historia.</h2></div><div class="scenario-switch" role="group" aria-label="Cambiar escenario simulado"><button type="button" data-demo="normal" aria-pressed="true">Ventana normal</button><button type="button" data-demo="evento" aria-pressed="false">Simular un evento ↗</button></div></div><p id="demo-status" class="demo-status" role="status"></p><div id="demo-grid" class="demo-grid"></div></section><div class="topic-strip"><span>◎ Fundamentos</span><span>↗ Indicadores</span><span>▦ Switches y routers</span><span>▤ Windows / Linux Server</span><span>⌁ Servicios y diagnóstico</span></div>
    </section>
    <section id="prueba" hidden>
      <div class="exam-heading"><div><p class="eyebrow">TU EXPLORACIÓN ESTÁ EN MARCHA</p><h1>Lee, conecta y decide.</h1><p id="learner-label"></p></div><div class="timer-box" role="timer" aria-label="Tiempo restante"><span>TIEMPO RESTANTE</span><b id="timer">40:00</b></div></div>
      <p id="timer-alert" class="warning" role="status" hidden>Quedan menos de 5 minutos. Revisa las preguntas pendientes.</p>
      <div class="exam-layout"><aside class="navigation-card"><div class="nav-title"><b>Mapa de la misión</b><span id="answered-count"></span></div><progress id="progress" max="30" value="0" aria-label="Preguntas completas"></progress><nav id="question-map" aria-label="Navegar entre preguntas"></nav><p class="map-key"><span class="key-dot"></span> Respondida · ámbar: parcial · borde: actual</p><p id="encouragement" class="encouragement">Cada respuesta ayuda a reconocer tu punto de partida.</p><button id="review-open" class="button secondary">Revisar y finalizar</button></aside><div><article class="question-card"><div class="question-meta"><span id="topic-label" class="pill"></span><span id="type-label"></span></div><p id="question-counter" class="eyebrow"></p><h2 id="question-text" tabindex="-1"></h2><p id="question-help"></p><div id="case-visual"></div><div id="answers"></div><p id="response-status" class="answer-status" role="status"></p><div class="question-footer"><button id="prev" class="button secondary">← Anterior</button><button id="next" class="button primary">Siguiente →</button></div></article><p class="exam-note">Responde con lo que sabes hoy. Podrás aprender de las explicaciones al terminar.</p></div></div>
    </section>
    <section id="resultados" hidden></section>
    <p id="storage-warning" class="warning" role="status" hidden>No se pudo guardar el avance en este navegador. Mantén esta pestaña abierta y descarga el resultado al finalizar.</p>
    <p id="fatal-error" class="warning" role="alert" hidden></p>
  </main>
  <footer><span>RADAR 2.0 · Tus saberes, en conexión.</span><span>Monitoreo de infraestructura · SENA, ficha 3399813</span></footer>
  <dialog id="finish-dialog"><form method="dialog"><p class="eyebrow">CIERRE DE LA EXPLORACIÓN</p><h2>¿Listo para ver tu punto de partida?</h2><p id="finish-summary"></p><p>Las respuestas pendientes puntúan cero. Una vez finalizada la sesión, no podrás cambiarlas.</p><div class="dialog-actions"><button class="button secondary" value="cancel">Seguir revisando</button><button id="finish-confirm" class="button primary" value="finish">Finalizar y ver resultado</button></div></form></dialog>
  <noscript><p class="warning">Activa JavaScript en tu navegador para realizar el diagnóstico.</p></noscript>
</body>
</html>
```

## styles.css

```css
/* Sin fuentes, imágenes ni bibliotecas externas: funciona también sin conexión. */
:root{--ink:#102f36;--muted:#52666a;--paper:#f4f6ef;--lime:#c7f66a;--teal:#146b65;--line:#d5dfd5;--white:#fff;--orange:#ffe2c2;--shadow:0 14px 40px #102f360a}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font-family:Inter,"Segoe UI",Arial,sans-serif;font-size:16px;line-height:1.6}button,input,select{font:inherit}button,a,input,select,label.button{-webkit-tap-highlight-color:transparent}button{cursor:pointer}a{color:inherit}button:disabled{opacity:.45;cursor:default}[hidden]{display:none!important}:focus-visible{outline:3px solid #16837a;outline-offset:4px}.skip{position:absolute;left:20px;top:-60px;z-index:99;padding:8px;background:white}.skip:focus{top:12px}.topbar{max-width:1260px;margin:auto;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:22px 30px;border-bottom:1px solid var(--line)}.brand{display:flex;align-items:center;gap:8px;font-weight:850;font-size:31px;letter-spacing:-1.5px;text-decoration:none}.brand-icon{display:grid;place-items:center;background:var(--ink);color:var(--lime);width:39px;height:39px;border-radius:12px;font-size:32px;letter-spacing:0}.brand-dot{color:var(--teal);margin-left:-7px}.course{font-size:10px;letter-spacing:1.6px;color:var(--muted);line-height:1.6}.course b{display:block;font-size:12px;letter-spacing:.6px;color:var(--ink)}main{max-width:1200px;margin:auto;padding:38px 30px 70px}.landing{display:grid;grid-template-columns:1.12fr 1fr;gap:24px 50px}.hero-copy{padding:28px 0}.eyebrow{font-size:10px;font-weight:800;letter-spacing:1.8px;margin:0 0 16px;line-height:1.6}.live-dot{display:inline-block;background:var(--teal);width:7px;height:7px;border-radius:50%;margin-right:7px}.hero-copy h1{font-size:clamp(44px,5.2vw,68px);line-height:1.07;font-weight:750;letter-spacing:-3px;margin:24px 0}.hero-copy h1 em{font-style:normal;color:var(--teal);position:relative}.hero-copy h1 em:after{content:"";position:absolute;bottom:-3px;left:0;width:100%;height:4px;background:var(--lime)}.intro{font-size:18px;line-height:1.65;max-width:480px;color:var(--muted)}.facts{display:flex;gap:30px;margin:24px 0}.facts span{font-size:12px;color:var(--muted)}.facts b{font-size:28px;display:block;color:var(--ink);line-height:1.2}.soft-note{font-size:12px;max-width:490px;color:var(--muted)}.radar-panel{position:relative;min-height:390px;background:var(--ink);border-radius:26px;overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;margin:12px 0 20px}.radar-art{position:relative;width:300px;height:300px;border-radius:50%;background:linear-gradient(90deg,transparent 49.7%,#b7e1c41c 50%,transparent 50.3%),linear-gradient(transparent 49.7%,#b7e1c41c 50%,transparent 50.3%)}.radar-ring{position:absolute;border:1px solid #bbe7c72a;border-radius:50%;inset:0}.ring2{inset:45px}.ring3{inset:90px}.radar-sweep{position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg,transparent 260deg,#c7f66a20 345deg,#c7f66a90 359deg,transparent 360deg);animation:sweep 16s linear infinite}.radar-center{position:absolute;left:132px;top:119px;font-size:42px;color:var(--lime)}.node{position:absolute;width:11px;height:11px;border-radius:50%;background:var(--lime);box-shadow:0 0 0 7px #c7f66a12,0 0 22px #c7f66a88}.n1{left:65px;top:70px}.n2{right:58px;top:125px}.n3{left:106px;bottom:51px;background:#70d7c3}.signal-label{color:#adc6bd;font-size:9px;letter-spacing:1.5px;margin-top:12px}.signal-label .live-dot{background:var(--lime)}.float-chip{position:absolute;background:#25474b;border:1px solid #8db3a230;padding:8px 13px;border-radius:9px;color:#e4efe7;font-size:12px;box-shadow:var(--shadow)}.chip1{right:22px;top:42px}.chip2{left:22px;bottom:85px}.start-card{grid-column:1/-1;background:white;border:1px solid var(--line);border-radius:19px;display:grid;grid-template-columns:1fr 1fr;gap:50px;padding:32px 36px;box-shadow:var(--shadow)}h2{font-size:23px;letter-spacing:-.6px;line-height:1.35;margin:0 0 16px}.start-card p:not(.eyebrow){color:var(--muted);font-size:13px;max-width:490px}.start-card .eyebrow{color:var(--teal);margin-bottom:10px}label{display:block;font-weight:650;font-size:13px;margin-bottom:8px}label span{font-weight:400;color:var(--muted)}input[type=text],input:not([type]),input[name=nombre],select{width:100%;border:1px solid #b8c9bd;border-radius:9px;padding:11px 13px;background:#fafbf8;color:var(--ink)}.button{border-radius:9px;padding:12px 18px;font-weight:700;font-size:13px;display:inline-flex;align-items:center;justify-content:center;gap:20px;text-decoration:none;transition:transform .15s,background .15s;border:1px solid transparent}.button:hover:not(:disabled){transform:translateY(-1px)}.primary{background:var(--ink);color:var(--lime)}.primary:hover{background:#234c50}.secondary{background:white;color:var(--ink);border-color:var(--line)}.text-button{border:0;background:transparent;color:var(--teal);font-size:12px;font-weight:650;padding:9px 4px}.start-card .primary{width:100%;margin-top:12px;justify-content:space-between}.start-card .form-note{font-size:10px!important;margin:9px 0 0}.topic-strip{grid-column:1/-1;display:flex;gap:15px;justify-content:space-between;font-size:10px;font-weight:650;color:var(--muted);padding-top:4px;flex-wrap:wrap}footer{border-top:1px solid var(--line);max-width:1200px;margin:auto;padding:22px 30px;display:flex;justify-content:space-between;gap:15px;font-size:10px;color:var(--muted)}.exam-heading{display:flex;justify-content:space-between;align-items:center;margin:12px 0 30px;gap:20px}.exam-heading h1,#instructor h1{font-size:36px;line-height:1.2;letter-spacing:-1.5px;margin:0}.exam-heading p:last-child{font-size:12px;color:var(--muted)}.timer-box{background:var(--ink);color:var(--lime);padding:13px 25px;border-radius:14px;text-align:center;min-width:145px;position:sticky;top:12px;z-index:3}.timer-box span{font-size:9px;letter-spacing:1.5px;display:block}.timer-box b{font-size:29px;font-variant-numeric:tabular-nums}.timer-box.urgent{background:#833915;color:#fff}.exam-layout{display:grid;grid-template-columns:250px 1fr;gap:25px;align-items:start}.navigation-card,.question-card{background:white;border:1px solid var(--line);border-radius:17px;padding:25px;box-shadow:var(--shadow)}.nav-title{display:flex;justify-content:space-between;font-size:12px}.nav-title span{color:var(--teal)}progress{width:100%;height:7px;border:0;border-radius:10px;overflow:hidden;accent-color:var(--teal);margin:16px 0}progress::-webkit-progress-bar{background:#eef2e8}progress::-webkit-progress-value{background:var(--teal)}#question-map{display:grid;grid-template-columns:repeat(5,1fr);gap:7px}#question-map button{border:1px solid var(--line);border-radius:7px;background:#f7f8f2;color:var(--ink);height:34px;font-size:11px;font-weight:600}#question-map button.complete{background:var(--lime);border-color:var(--lime)}#question-map button.partial{background:var(--orange)}#question-map button.current{outline:2px solid var(--ink);outline-offset:1px}.map-key{font-size:9px;color:var(--muted)}.key-dot{background:var(--lime);width:8px;height:8px;display:inline-block;border-radius:3px}.encouragement{font-size:12px;line-height:1.7;color:var(--muted);border-top:1px solid var(--line);padding-top:17px;margin-top:20px}.navigation-card .button{width:100%}.question-card{padding:32px;min-height:470px}.question-meta{display:flex;justify-content:space-between;gap:14px;align-items:center;margin-bottom:28px;font-size:10px;color:var(--muted)}.pill{background:#e4f1df;color:#2d6045;border-radius:30px;padding:5px 11px;font-weight:700}.question-card .eyebrow{color:var(--muted);margin-bottom:10px}.question-card h2{font-size:25px;line-height:1.4}.question-card #question-help{font-size:12px;color:var(--muted)}.options{border:0;padding:0;margin:20px 0}.options legend{position:absolute;width:1px;height:1px;clip-path:inset(50%);overflow:hidden}.option{display:flex;gap:13px;align-items:center;border:1px solid var(--line);padding:14px;border-radius:10px;margin:10px 0;font-size:14px;font-weight:400;cursor:pointer}.option:has(input:checked){border-color:var(--teal);background:#ecf5e6}.option input{accent-color:var(--teal);width:17px;height:17px;flex-shrink:0}.option-letter{display:grid;place-items:center;font-size:10px;border:1px solid var(--line);border-radius:5px;width:23px;height:23px;flex-shrink:0}.match-row{display:grid;grid-template-columns:1fr 1.5fr;align-items:center;gap:16px;padding:12px 0;border-bottom:1px solid var(--line)}.match-row label{margin:0;font-size:14px}.match-row select{font-size:12px}.question-footer{border-top:1px solid var(--line);padding-top:23px;margin-top:28px;display:flex;justify-content:space-between;gap:12px}.exam-note{font-size:11px;text-align:center;color:var(--muted)}.warning{background:var(--orange);border-radius:10px;padding:12px 18px;font-size:13px;color:#713710}.result-hero{background:var(--ink);color:white;border-radius:22px;padding:36px;display:grid;grid-template-columns:180px 1fr;gap:30px;align-items:center;margin:15px 0 25px}.score-ring{width:160px;height:160px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(var(--lime) calc(var(--score)*1%),#355157 0);position:relative}.score-ring:before{content:"";position:absolute;inset:9px;background:var(--ink);border-radius:50%}.score-ring div{z-index:1;text-align:center}.score-ring strong{display:block;font-size:48px;line-height:1.2;color:var(--lime)}.score-ring span{font-size:11px}.result-hero h1{font-size:32px;line-height:1.25;letter-spacing:-1px;margin:10px 0}.result-hero p{font-size:13px;color:#c6d9d2}.result-hero .eyebrow{color:var(--lime)}.result-meta{display:flex;gap:15px;flex-wrap:wrap;font-size:11px;color:#c6d9d2}.result-actions{display:flex;flex-wrap:wrap;gap:10px;margin:20px 0 32px}.feedback-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.feedback-card{padding:24px;background:white;border:1px solid var(--line);border-radius:15px}.feedback-card h3{font-size:16px;margin:0}.feedback-card p{font-size:12px;color:var(--muted);margin-bottom:0}.feedback-head{display:flex;justify-content:space-between;gap:10px}.feedback-head b{color:var(--teal);font-size:16px}details{background:white;border:1px solid var(--line);padding:20px;border-radius:14px;margin:24px 0}summary{cursor:pointer;font-weight:650;font-size:14px}.review-item{border-top:1px solid var(--line);padding:16px 0;font-size:12px}.review-item h3{font-size:14px}.review-item p{margin:6px 0;color:var(--muted)}.review-score{font-weight:750;color:var(--teal)}dialog{border:0;border-radius:18px;padding:30px;max-width:520px;width:calc(100% - 32px);color:var(--ink);box-shadow:0 30px 100px #0004}dialog::backdrop{background:#102f36aa}dialog p{font-size:13px}.dialog-actions{display:flex;gap:10px;margin-top:22px}.instructor-tools{display:flex;gap:14px;align-items:center;flex-wrap:wrap;margin:30px 0}.instructor-tools label{margin:0}.instructor-tools input{max-width:220px;font-size:11px}.table-wrap{overflow:auto;background:white;border-radius:14px;border:1px solid var(--line)}table{width:100%;border-collapse:collapse;font-size:12px;white-space:nowrap}caption{text-align:left;padding:18px;font-weight:750}th,td{padding:15px;text-align:left;border-bottom:1px solid var(--line)}th{background:#edf2e6}#import-status{font-size:13px;color:var(--teal)}
.exam-heading{position:sticky;top:0;z-index:5;background:var(--paper);padding:12px 0;border-bottom:1px solid var(--line)}.exam-heading .timer-box{position:static}.question-card h2{scroll-margin-top:150px}
@keyframes sweep{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:900px){.landing{gap:20px}.start-card{gap:25px;padding:25px}.hero-copy h1{font-size:48px}.radar-art{width:250px;height:250px}.radar-center{left:108px;top:94px}.radar-panel{min-height:340px}.exam-layout{grid-template-columns:210px 1fr;gap:16px}.navigation-card{padding:18px}.question-card{padding:24px}}@media(max-width:650px){.topbar{padding:16px 20px;flex-wrap:wrap;gap:8px}.brand{font-size:27px}.course{margin-left:auto;font-size:8px}.topbar>.text-button{width:100%;text-align:right;padding:0;font-size:10px}main{padding:22px 18px 40px}.landing{grid-template-columns:1fr;gap:15px}.hero-copy{padding:10px 0}.hero-copy h1{font-size:47px;letter-spacing:-2px;margin:15px 0}.intro{font-size:16px}.facts{margin:20px 0}.radar-panel{min-height:270px;margin:0}.radar-art{width:210px;height:210px}.radar-center{left:89px;top:76px}.ring2{inset:32px}.ring3{inset:66px}.signal-label{font-size:8px}.chip1{top:25px;right:15px}.chip2{bottom:65px;left:15px}.start-card{grid-template-columns:1fr;padding:23px;gap:16px;margin-top:8px}.topic-strip{font-size:9px;gap:10px}.exam-heading{align-items:flex-start;gap:8px}.exam-heading h1{font-size:25px}.exam-heading .eyebrow{font-size:8px}.timer-box{min-width:108px;padding:10px}.timer-box b{font-size:23px}.timer-box span{font-size:7px}.exam-layout{grid-template-columns:1fr}.navigation-card{padding:16px}#question-map{grid-template-columns:repeat(10,1fr);gap:5px}#question-map button{height:28px;font-size:10px}.encouragement,.map-key{display:none}.navigation-card>.button{margin-top:12px;padding:8px}.question-card{padding:22px;min-height:unset}.question-card h2{font-size:21px}.question-meta{font-size:9px;margin-bottom:20px}.match-row{grid-template-columns:1fr;gap:7px}.result-hero{grid-template-columns:1fr;padding:25px;text-align:center}.score-ring{margin:auto}.result-meta{justify-content:center}.feedback-grid{grid-template-columns:1fr}.result-hero h1{font-size:27px}.dialog-actions{flex-direction:column}footer{flex-direction:column;padding:20px}.button{font-size:12px;padding:11px 14px}}@media print{body{background:white}header,footer,.result-actions,#inicio,#prueba,#instructor,dialog,details,.skip,#storage-warning{display:none!important}#resultados{display:block!important}main{max-width:100%;padding:0}.result-hero{background:white;color:#102f36;border:1px solid #aaa;break-inside:avoid}.result-hero p,.result-hero .eyebrow,.result-meta{color:#102f36}.score-ring{background:none;border:4px solid #102f36}.score-ring:before{background:white}.score-ring strong{color:#102f36}.feedback-card{break-inside:avoid}.feedback-grid{grid-template-columns:1fr 1fr}}
```

## experiencia.css

```css
/* Radar 2.0: capa de experiencia visual sobre la estructura responsiva base. */
:root {
  --ink: #202344; --muted: #656a87; --paper: #f5f5fc;
  --violet: #7151ed; --teal: #087f86; --line: #e1e3f0;
  --shadow: 0 14px 40px #30296b09;
}
body { background: radial-gradient(ellipse at 3% 14%, #d9d0ff55, transparent 35%), radial-gradient(ellipse at 97% 40%, #b9f5f33d, transparent 28%), var(--paper); }
.brand-dot, .eyebrow { color: var(--violet); }
.header-badge { display: inline-flex; align-items: center; background: #ede9fe; color: #5a38ce; border-radius: 30px; padding: 8px 13px; font-size: 9px; letter-spacing: 1px; font-weight: 800; }
.hero-copy h1 em { color: var(--violet); }
.hero-copy h1 em::after { background: #a4edee; border-radius: 10px; }
.facts b { font-size: 32px; }
.radar-panel { background: #102f36; min-height: 410px; border-radius: 28px; box-shadow: 0 20px 50px #14282b20; }
.radar-art { transition: scale .5s; }
.node { animation: beacon 3s ease-in-out infinite; }
.n2 { animation-delay: 1s; }
.n3 { animation-delay: 2s; }
.float-chip { animation: float 6s ease-in-out infinite; }
.chip2 { bottom: 100px; animation-delay: 2s; }
.radar-control { border: 1px solid #b8e7cb40; background: #ffffff08; color: #c7f66a; border-radius: 20px; padding: 5px 12px; font-size: 10px; margin-top: 14px; }
.radar-control:hover { background: #b8e7cb20; }
.radar-boost .radar-art { scale: 1.08; }
.radar-boost .radar-sweep { animation-duration: 4s; }
.start-card { border-radius: 22px; position: relative; }
.start-card::before { content: ""; position: absolute; left: 0; top: 26px; bottom: 26px; width: 4px; background: var(--violet); border-radius: 0 5px 5px 0; }
.start-card .eyebrow { color: var(--violet); }
input[name=nombre], select { background: #fafaff; border-color: #cacedf; border-radius: 11px; }
.button { border-radius: 11px; transition: transform .2s, box-shadow .2s; }
.button:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 20px #7151ed20; }
.primary { background: linear-gradient(115deg, #7654f4, #5e3bd3); color: white; box-shadow: 0 4px 12px #7151ed20; }
.primary:hover { background: linear-gradient(115deg, #8968ff, #6945df); }
.text-button { color: #6344d0; }
.topic-strip { font-size: 11px; gap: 12px; }
.topic-strip span { background: #fff9; padding: 7px 10px; border: 1px solid var(--line); border-radius: 8px; }
/* El aprendiz puede comparar ventanas sin alterar los casos del examen. */
.telemetry-lab { grid-column: 1/-1; margin: 20px 0 8px; }
.lab-heading { display: flex; justify-content: space-between; align-items: center; gap: 20px; }
.lab-heading h2 { font-size: 26px; margin: 0; }
.lab-heading .eyebrow { margin-bottom: 5px; }
.scenario-switch { display: flex; background: #e9e5f9; padding: 5px; border-radius: 13px; gap: 3px; }
.scenario-switch button { border: 0; background: transparent; padding: 9px 12px; border-radius: 9px; color: #645c81; font-size: 11px; font-weight: 700; }
.scenario-switch button[aria-pressed=true] { background: white; color: #6440d2; box-shadow: 0 3px 10px #3227620d; }
.demo-status { font-size: 11px; color: var(--muted); margin: 14px 0; min-height: 18px; }
.demo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
/* Gráficas SVG: exploración con mouse, toque o teclado y tabla alternativa. */
.data-visual { background: linear-gradient(135deg, #f4f0ff, #effafa); border: 1px solid #e0daf4; border-radius: 16px; padding: 20px; margin: 20px 0; }
.data-visual figcaption { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 5px 14px; font-size: 12px; }
.data-visual .eyebrow { margin: 0; font-size: 8px; letter-spacing: 1.2px; }
.data-visual.compact { margin: 0; padding: 18px; background: white; box-shadow: var(--shadow); }
.compact figcaption { display: block; }
.compact figcaption strong { display: block; margin-top: 5px; font-size: 12px; }
.compact .plot { margin: 12px 0 0; }
.plot { width: 100%; display: block; margin-top: 16px; overflow: visible; }
.grid-line { stroke: #d7d7e84f; stroke-width: 1; }
.axis-label { font: 18px "Segoe UI", Arial, sans-serif; fill: #5b617e; }
.trend-line { fill: none; stroke: #7e55f4; stroke-width: 3; stroke-linejoin: round; stroke-linecap: round; stroke-dasharray: 1; animation: trace 1.2s ease-out; }
.chart-point { fill: #fff; stroke: #7e55f4; stroke-width: 3; cursor: pointer; transition: fill .2s, stroke-width .2s; }
.chart-point:hover, .chart-point:focus { fill: #c9f76a; stroke-width: 5; outline: none; }
.chart-bar { fill: #8260f2; transition: fill .2s; }
.bar-group { cursor: pointer; }
.bar-group:nth-last-child(2) .chart-bar { fill: #1aa8aa; }
.bar-group:hover .chart-bar, .bar-group:focus .chart-bar { fill: #d74d9e; }
.bar-value { fill: #423165; font-size: 21px; font-weight: 750; }
.chart-readout { font-size: 10px; color: #595477; background: #ffffff91; border: 1px solid #e3def1; border-radius: 8px; padding: 8px 10px; margin-top: 7px; min-height: 32px; }
.data-table { padding: 0; border: 0; background: transparent; border-radius: 0; margin: 10px 0 0; }
.data-table summary { font-size: 10px; color: var(--violet); }
.data-table table { margin-top: 10px; font-size: 11px; }
.data-table td, .data-table th { padding: 8px; }
.meter-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 10px; margin: 18px 0; }
.meter-card { text-align: left; background: white; border: 1px solid #ded8ed; border-radius: 13px; padding: 15px; color: var(--ink); }
.meter-card span { display: block; font-size: 10px; color: var(--muted); }
.meter-card strong { font-size: 26px; }
.meter-track { height: 6px; background: #ece8f6; border-radius: 8px; margin-top: 8px; overflow: hidden; }
.meter-track i { display: block; width: var(--fill); height: 100%; background: linear-gradient(90deg, #7e55f4, #17bab9); border-radius: 8px; animation: grow .8s ease-out; }
.log-console { border: 1px solid #283651; background: #192b40; color: #b2e8d1; font-family: Consolas, monospace; border-radius: 12px; margin-top: 16px; overflow: auto; }
.terminal-top { color: #adc5d6; font: 10px "Segoe UI", sans-serif; background: #203750; padding: 10px 13px; }
.log-row { display: grid; grid-template-columns: 85px 1fr 1.5fr; gap: 12px; font-size: 11px; padding: 10px 13px; border-top: 1px solid #ffffff07; }
.network-path { display: flex; align-items: center; justify-content: center; gap: 8px; margin: 20px 0; }
.network-node { display: flex; flex-direction: column; flex: 1; min-width: 0; align-items: center; padding: 15px 7px; border-radius: 12px; background: white; border: 1px solid #dad6ed; color: var(--ink); }
.network-node.inspected { border-color: var(--violet); box-shadow: 0 0 0 3px #7151ed12; }
.device-icon { font-size: 28px; color: var(--violet); }
.network-node strong { font-size: 11px; }
.network-node small { font-size: 9px; color: var(--muted); }
.path-link { color: #00a7a4; animation: float 3s ease-in-out infinite; }
/* Opciones y progreso: el color confirma selección, no corrección. */
.exam-heading { background: #f5f5fcf5; backdrop-filter: blur(14px); }
.timer-box { background: #242549; color: #d5ff74; border-radius: 15px; box-shadow: 0 5px 15px #20234420; }
.timer-box.urgent { background: #943a48; color: white; }
.navigation-card { position: sticky; top: 158px; }
.navigation-card, .question-card { border-radius: 20px; }
.nav-title span { color: var(--violet); font-weight: 800; }
progress { accent-color: var(--violet); }
progress::-webkit-progress-bar { background: #eceaf7; }
progress::-webkit-progress-value { background: linear-gradient(90deg, #7654f4, #00b3b5); transition: width .3s; }
#question-map button { border-radius: 8px; background: #f7f7fd; transition: background .2s, transform .2s; }
#question-map button:hover { transform: translateY(-2px); }
#question-map button.complete { background: #e3d9ff; border-color: #d5c7fa; color: #5a33c5; }
#question-map button.partial { background: #fff0d8; border-color: #f5d8a8; }
#question-map button.current { outline-color: var(--violet); }
.key-dot { background: #daccff; }
.pill { background: #eee8ff; color: #6240cc; padding: 6px 12px; }
.question-enter { animation: enter .3s ease-out; }
.question-card h2 { scroll-margin-top: 160px; }
.option { border-radius: 13px; padding: 16px; background: #fdfdff; transition: border-color .2s, transform .2s, background .2s; }
.option:hover { border-color: #bba5f9; transform: translateX(3px); background: #faf8ff; }
.option:has(input:checked) { border-color: var(--violet); background: #f2edff; box-shadow: 0 0 0 2px #7151ed0a; }
.option input { accent-color: var(--violet); }
.option-letter { border-radius: 7px; width: 28px; height: 28px; font-weight: 700; }
.choice-check { margin-left: auto; color: var(--violet); opacity: 0; font-weight: 850; }
.option:has(input:checked) .choice-check { opacity: 1; }
.truth-options .options { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.truth-options .option { padding: 24px 18px; margin: 0; min-height: 100px; }
.truth-options .option-letter { font-size: 22px; width: 36px; height: 36px; color: var(--violet); background: #eee8ff; border: 0; }
.answer-status { font-size: 11px; color: #6851a5; padding: 10px 13px; border-radius: 9px; background: #f5f2fd; margin: 14px 0 0; }
.save-flash { animation: save .4s ease-out; }
/* Conectar conceptos: dos clics o Tab + Enter; selectores alternativos. */
.connect-instruction { font-size: 11px; color: var(--muted); background: #f3f0fc; padding: 10px 12px; border-radius: 9px; }
.connection-board { position: relative; display: grid; grid-template-columns: .9fr 1.25fr; gap: 65px; margin: 20px 0; }
.connection-column { display: grid; grid-template-rows: repeat(4, minmax(90px, 1fr)); gap: 12px; z-index: 1; }
.connect-node { display: flex; gap: 10px; align-items: center; border: 1px solid #dcddeb; background: #fcfcff; color: var(--ink); border-radius: 12px; padding: 12px; text-align: left; font-size: 12px; font-weight: 600; min-width: 0; transition: background .2s, border .2s, transform .2s; }
.connect-node:hover { transform: translateY(-2px); border-color: var(--violet); }
.connect-node.active { border-color: var(--pair-color); box-shadow: 0 0 0 3px #7853fa16; background: #f1edff; }
.connect-node.linked { border-color: var(--pair-color); background: #f8f5ff; }
.connection-number { display: grid; place-items: center; width: 23px; height: 23px; flex-shrink: 0; border-radius: 7px; background: var(--pair-color); color: white; font-size: 10px; }
.connect-state { margin-left: auto; font-size: 11px; color: var(--pair-color); }
.connection-lines { position: absolute; width: 100%; height: 100%; inset: 0; pointer-events: none; overflow: visible; }
.connection-lines path { fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-dasharray: 7 4; animation: flow 4s linear infinite; }
.connection-actions { display: flex; justify-content: space-between; align-items: center; }
.connection-counter { font-size: 10px; color: var(--violet); font-weight: 750; }
.select-alternative { margin: 14px 0 0; padding: 12px; }
.select-alternative summary { font-size: 11px; }
/* Perfil final: porcentajes reales, no telemetría simulada. */
.result-hero { background: linear-gradient(120deg, #27204c, #423178); border-radius: 24px; box-shadow: 0 20px 45px #40257318; }
.score-ring { background: conic-gradient(var(--lime) calc(var(--score)*1%), #6a5480 0); }
.score-ring::before { background: #302451; }
.result-profile { display: flex; align-items: center; justify-content: space-around; gap: 20px; padding: 10px 35px; background: #eeebfb; border: 1px solid var(--line); border-radius: 20px; margin: 20px 0; }
.profile-intro { max-width: 280px; font-size: 27px; line-height: 1.3; font-weight: 750; letter-spacing: -.6px; color: #544292; }
.profile-chart { width: 420px; max-width: 100%; margin: 0; }
.profile-chart svg { width: 100%; }
.profile-chart figcaption { font-size: 10px; text-align: center; margin: -10px 0 15px; color: var(--muted); }
.profile-grid { fill: none; stroke: #cfc7e8; stroke-width: 1; }
.profile-label { font-size: 11px; fill: #5e547b; }
.profile-data { fill: #825cff40; stroke: #7151ed; stroke-width: 2; }
.feedback-head b, .review-score { color: var(--violet); }
.feedback-head b { white-space: nowrap; }
.completion-sparks { position: fixed; inset: 0; pointer-events: none; z-index: 10; overflow: hidden; }
.completion-sparks i { position: absolute; left: var(--x); top: -15px; width: 7px; height: 13px; border-radius: 2px; background: var(--color); animation: confetti 1.7s ease-in var(--delay) forwards; }
dialog::backdrop { background: #202344aa; backdrop-filter: blur(4px); }
/* Estilos reutilizados únicamente en la herramienta local del instructor. */
.local-notice { font-size: 12px; padding: 15px; border: 1px solid #d4caf3; border-radius: 12px; background: #eee8ff; color: #58447e; }
.instructor-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin: 25px 0; }
.instructor-stats article { padding: 24px; background: white; border: 1px solid var(--line); border-radius: 16px; }
.instructor-stats span { display: block; font-size: 10px; color: var(--muted); letter-spacing: 1px; }
.instructor-stats strong { display: block; color: var(--violet); font-size: 35px; }
th { background: #f0ecfa; }
#import-status { color: var(--violet); }
@keyframes beacon { 50% { box-shadow: 0 0 0 12px #c7f66a08, 0 0 27px #c7f66a88; } }
@keyframes float { 50% { transform: translateY(-5px); } }
@keyframes enter { from { opacity: .4; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
@keyframes trace { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
@keyframes grow { from { width: 0; } }
@keyframes save { from { background: #dfd2ff; } }
@keyframes flow { to { stroke-dashoffset: -44; } }
@keyframes confetti { to { transform: translateY(105vh) rotate(350deg); opacity: 0; } }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
@media (max-width: 1000px) {
  .connection-board { gap: 35px; }
  .connect-node { padding: 10px; font-size: 11px; }
  .header-badge { font-size: 8px; letter-spacing: .4px; }
}
@media (max-width: 700px) {
  .landing { grid-template-columns: 1fr; }
  .header-badge { display: none; }
  .radar-panel { min-height: 300px; }
  .chip2 { bottom: 85px; }
  .topic-strip { font-size: 9px; gap: 8px; }
  .lab-heading { align-items: flex-start; flex-direction: column; gap: 12px; }
  .lab-heading h2 { font-size: 23px; }
  .demo-grid { grid-template-columns: 1fr; }
  .navigation-card { position: static; }
  .question-card .data-visual { padding: 14px; }
  .connection-board { gap: 25px; grid-template-columns: .9fr 1.15fr; }
  .connection-column { grid-template-rows: repeat(4, minmax(105px, 1fr)); gap: 10px; }
  .connect-node { padding: 9px 7px; font-size: 12px; gap: 6px; overflow-wrap: anywhere; }
  .concept-node { flex-wrap: wrap; align-content: center; }
  .connection-number { width: 20px; height: 20px; }
  .connect-state { display: none; }
  .truth-options .options { gap: 10px; }
  .truth-options .option { flex-wrap: wrap; gap: 8px; padding: 15px 10px; }
  .log-row { grid-template-columns: 65px 1fr; gap: 7px; font-size: 10px; }
  .log-row span:last-child { grid-column: 2; }
  .meter-card { padding: 11px; }
  .meter-card strong { font-size: 21px; }
  .result-profile { flex-direction: column; padding: 25px 10px; gap: 0; }
  .profile-intro { font-size: 20px; text-align: center; }
  .instructor-stats { grid-template-columns: 1fr; gap: 10px; }
}
@media print {
  .completion-sparks { display: none; }
  .result-hero { background: white; }
  .score-ring { background: none; }
  .score-ring::before { background: white; }
  .result-profile { break-inside: avoid; padding: 0; max-height: 270px; }
  .profile-chart { width: 320px; }
  .profile-intro { font-size: 20px; }
}
```

## preguntas.js

```javascript
/* BANCO EDITABLE — versión 2.0, 12 de octubre de 2026.
 * Fuente principal: Guia de aprendizaje Monitoreo 3399813 final.docx
 * (texto de trabajo: _trabajo_guias/monitoreo_final_texto.txt) y
 * Plan Trabajo Concertado Monitoreo 3399813 corregido.xlsx, actividades 1–4.
 * 100 preguntas: 20 por tema (10 opción múltiple, 6 V/F y 4 de relación).
 * AJUSTAR por el instructor: nombres/recursos del laboratorio, herramienta
 * seleccionada, parámetros de práctica si cambia el entorno. Sin preguntas de entregables o grupos.
 * Los niveles diagnósticos y el tiempo están en motor.js. No son criterios
 * oficiales de certificación. Los umbrales de laboratorio no son SLA reales.
 * No se incluyen fechas de entrega ni datos personales de los archivos fuente.
 * Edición: mc(tema, pregunta, [correcta, distractor, distractor, distractor], explicación).
 * La correcta se escribe primera aquí; el motor baraja opciones en la sesión.
 * tf(tema, afirmación, true/false, explicación).
 * match(tema, instrucción, [[concepto, definición], ...], explicación).
 * Mantener IDs únicos y cambiar VERSION si se modifica el banco.
 */
(() => {
  const temas = {
    conceptos: {nombre:'Conceptos de monitoreo',ruta:'Reconoce métricas, umbrales, alertas y línea base antes de configurar el tablero.'},
    indicadores: {nombre:'Indicadores y análisis',ruta:'Practica disponibilidad, cobertura y comparación de ventanas con unidades claras.'},
    infraestructura: {nombre:'Switches y routers',ruta:'Revisa interfaces, VLAN, tablas MAC/ARP, gateway y rutas para delimitar fallas.'},
    servidores: {nombre:'Windows y Linux Server',ruta:'Relaciona recursos, procesos, servicios y logs en Windows Server y Linux Server.'},
    diagnostico: {nombre:'Servicios y diagnóstico',ruta:'Combina ICMP, SNMP, agentes y pruebas DNS, HTTP, DHCP y correo para validar una hipótesis.'}
  };
  const banco = [];
  const id = t => `${t}-${String(banco.filter(q=>q.tema===t).length+1).padStart(2,'0')}`;
  function mc(tema,texto,opciones,explicacion){banco.push({id:id(tema),tema,tipo:'mc',texto,opciones,correcta:0,explicacion});}
  function tf(tema,texto,correcta,explicacion){banco.push({id:id(tema),tema,tipo:'tf',texto,opciones:['Verdadero','Falso'],correcta:correcta?0:1,explicacion});}
  function match(tema,texto,pares,explicacion){banco.push({id:id(tema),tema,tipo:'match',texto,pares,explicacion});}
  // CONCEPTOS — guía, presentación, contextualización y glosario.
  mc('conceptos','¿Cuál es el propósito principal del monitoreo de una red?',['Observar equipos y servicios para tomar decisiones con datos','Instalar más equipos sin medir su desempeño','Cambiar las contraseñas de los usuarios diariamente','Reemplazar todas las pruebas de diagnóstico'], 'Monitorear permite reconocer el estado y los cambios de recursos y servicios, y orientar decisiones.');
  mc('conceptos','El tablero muestra CPU = 65 %. ¿Qué representa ese dato?',['Una métrica de utilización del procesador','Una causa de falla comprobada','Un acuerdo contractual de servicio','Una notificación enviada al técnico'],'Una métrica es una medición; por sí sola no demuestra una causa ni constituye una alerta.');
  mc('conceptos','¿Qué describe mejor una línea base?',['Mediciones del comportamiento normal para comparar cambios','El valor máximo que permite un fabricante','La última contraseña del equipo','Una lista de incidentes sin fechas'],'La línea base ayuda a comparar el comportamiento normal con eventos posteriores.');
  mc('conceptos','¿Qué es un umbral de monitoreo?',['Una condición que determina cuándo activar una alerta','El nombre del servidor que recibe los correos','La totalidad de datos históricos del equipo','Una copia de seguridad de la configuración'],'El umbral debe responder al contexto y a los criterios técnicos acordados.');
  mc('conceptos','¿Cuál de estas situaciones describe un incidente?',['El portal deja de responder a sus usuarios','Se guarda una lectura normal de memoria','Se consulta un manual oficial','Se cambia el título de una gráfica'],'Una interrupción o degradación del servicio requiere atención y registro.');
  mc('conceptos','¿Qué información caracteriza un log útil para diagnosticar?',['Eventos del sistema con fecha y hora','Sólo el nombre comercial del equipo','Un porcentaje sin origen ni momento','La contraseña utilizada en la prueba'],'Un registro fechado ayuda a reconstruir qué sucedió y correlacionarlo con mediciones.');
  mc('conceptos','Un switch responde a ping, pero el portal no carga. ¿Qué puedes concluir?',['Hay respuesta ICMP, pero aún falta comprobar el servicio web','Todos los servicios funcionan correctamente','El portal estuvo disponible durante todo el día','El servidor web necesita más memoria con certeza'],'La conectividad y el funcionamiento de un servicio requieren comprobaciones distintas.');
  mc('conceptos','¿Qué diferencia hay entre una alerta y un incidente?',['Una alerta notifica una condición; el incidente implica interrupción o degradación','Son siempre exactamente lo mismo','Un incidente es cualquier muestra de CPU','Una alerta confirma siempre la causa raíz'],'Una alerta puede requerir validación; no todas las alertas equivalen a un incidente confirmado.');
  mc('conceptos','¿Qué debes observar para entender una falla intermitente?',['Históricos y registros alrededor de los momentos de falla','Únicamente una captura tomada después','Sólo el modelo del teclado del usuario','El color del cable, sin ninguna prueba'],'Las fallas intermitentes se comprenden mejor con registros y mediciones a lo largo del tiempo.');
  mc('conceptos','¿Qué describe un SLA?',['Un acuerdo sobre niveles de servicio y condiciones de medición','Una aplicación para dibujar topologías','Una medición instantánea de CPU','Una regla universal de 30 minutos para toda empresa'],'El SLA establece compromisos y cómo medirlos; un objetivo didáctico no equivale a un contrato.');
  tf('conceptos','Una red conectada puede presentar servicios lentos o fallas intermitentes.',true,'La conectividad no garantiza un desempeño adecuado ni el funcionamiento de todas las aplicaciones.');
  tf('conceptos','Una alerta de CPU alta demuestra por sí sola que el procesador está averiado.',false,'Hay que correlacionar carga, procesos, registros y otras pruebas antes de atribuir una causa.');
  tf('conceptos','El monitoreo puede apoyar acciones preventivas al mostrar tendencias de consumo.',true,'Reconocer tendencias permite actuar antes de que un recurso se agote.');
  tf('conceptos','Una consulta sin respuesta registrada equivale siempre a una medición de cero.',false,'Un dato ausente no es un cero real; la ausencia debe registrarse como tal.');
  tf('conceptos','Guardar el historial permite comparar el estado actual con el comportamiento anterior.',true,'Los históricos dan contexto a las mediciones y a los eventos.');
  tf('conceptos','Una captura del tablero reemplaza la necesidad de explicar lo que significan sus datos.',false,'La evidencia requiere interpretación, unidades, periodo y relación con el caso.');
  match('conceptos','Relaciona cada elemento del monitoreo con su función.',[['Métrica','Medición de un recurso o servicio'],['Umbral','Condición para activar una alerta'],['Log','Registro fechado de eventos'],['Línea base','Referencia del comportamiento normal']],'Distinguir datos, reglas, eventos y referencias ayuda a interpretar el monitoreo.');
  match('conceptos','Relaciona los recursos con lo que interesa observar.',[['CPU','Uso del procesador'],['Memoria','Consumo de RAM'],['Disco','Ocupación del almacenamiento'],['Interfaz','Tráfico y estado del enlace']],'Cada recurso requiere métricas adecuadas y unidades explícitas.');
  match('conceptos','Relaciona cada concepto con su descripción.',[['Alerta','Aviso de una condición detectada'],['Incidente','Interrupción o degradación que requiere atención'],['SLA','Acuerdo de niveles de servicio'],['Histórico','Datos conservados de periodos anteriores']],'Una alerta es una señal; la atención del incidente se sustenta en pruebas.');
  match('conceptos','Relaciona cada situación con el concepto más directo.',[['CPU medida en 40 %','Métrica'],['Regla de ocupación sostenida','Umbral'],['Portal interrumpido','Incidente'],['Registro de inicio de sesión','Log']],'Los conceptos describen momentos distintos de observación y respuesta.');
  // INDICADORES — actividad 4. AJUSTAR ventanas/frecuencia si cambia la práctica.
  mc('indicadores','De 30 consultas previstas, 28 tienen resultado y 26 son exitosas. ¿Cuál es la disponibilidad observada por muestreo?',['26 / 28 × 100 = 92,86 %','26 / 30 × 100 = 86,67 %','28 / 30 × 100 = 93,33 %','30 / 26 × 100 = 115,38 %'],'La disponibilidad por muestreo usa consultas exitosas / consultas con resultado.');
  mc('indicadores','De 30 consultas previstas, 28 tienen resultado. ¿Cuál es la cobertura de datos?',['28 / 30 × 100 = 93,33 %','30 / 28 × 100 = 107,14 %','2 / 30 × 100 = 6,67 %','28 / 28 × 100 = 100 %'],'La cobertura mide qué parte de las consultas previstas tiene un resultado conocido.');
  mc('indicadores','Se planearon 30 consultas, pero no se obtuvo ningún resultado. ¿Cómo se informa?',['Disponibilidad no evaluable y cobertura 0 %','Disponibilidad 100 % y cobertura 100 %','Disponibilidad 0 % y cobertura 100 %','Disponibilidad 100 % y cobertura 0 %'],'Sin resultados no hay denominador para disponibilidad; la cobertura sí es cero.');
  mc('indicadores','¿Qué comparación permite evaluar una mejora con mayor claridad?',['Ventanas equivalentes con los mismos intervalos, unidades y prueba','Una ventana de un minuto y otra de un día sin aclararlo','CPU de un servidor contra correos recibidos en otro','Sólo una medición posterior sin referencia previa'],'Mantener condiciones comparables permite interpretar cambios con menor ambigüedad.');
  mc('indicadores','¿Qué debe acompañar una gráfica de tráfico de interfaces?',['Unidad, intervalo observado y frecuencia de consulta','Sólo el valor máximo sin indicar el periodo','Sólo el número de dispositivos conectados','Una conclusión sin indicar la fuente'],'Las unidades y los periodos permiten interpretar la escala y el alcance de la gráfica.');
  mc('indicadores','CPU: 20 %, 25 %, 70 %, 90 %. ¿Qué conclusión es prudente?',['Hay un aumento en esas muestras; se necesita contexto para explicar la causa','El procesador está físicamente roto con certeza','El servicio tuvo disponibilidad del 90 %','El disco está lleno con certeza'],'Una tendencia describe el cambio; explicar su causa requiere otras evidencias.');
  mc('indicadores','Una consulta HTTP no produjo datos. ¿Cómo entra en el cálculo de disponibilidad por muestreo?',['Se excluye de éxitos y fallas y se refleja en cobertura','Se suma a los éxitos automáticamente','Se suma a las fallas automáticamente aunque se desconozca el resultado','Se reemplaza por una muestra de CPU'],'La ausencia de datos se registra por separado para no inventar el resultado del servicio.');
  mc('indicadores','Un servicio tuvo 18 consultas exitosas entre 20 con resultado. ¿Cuál es su disponibilidad observada?',['90 %','18 %','20 %','100 %'],'18 / 20 × 100 = 90 %. El resultado corresponde al muestreo realizado.');
  mc('indicadores','En una ventana de observación se programan 30 consultas a intervalos de 60 segundos. ¿Qué debe conservarse?',['Fecha, dato, unidad y resultado, incluyendo intervalos sin datos','Sólo la última muestra correcta','Sólo el promedio sin ninguna referencia','Una captura con los valores ausentes ocultos'],'La trazabilidad permite revisar cómo se construyó la línea base y los indicadores.');
  mc('indicadores','¿Qué significa obtener 100 % de éxito en tres pruebas funcionales?',['Las tres operaciones observadas funcionaron; el alcance es limitado','Se garantizó el servicio durante todo el mes','Nunca se producirán incidentes','Se cumplió cualquier SLA empresarial'],'Tres pruebas positivas no demuestran disponibilidad permanente.');
  tf('indicadores','La disponibilidad por muestreo mide directamente cada segundo de operación.',false,'Es una estimación basada en consultas, con límites dados por la frecuencia y la cobertura.');
  tf('indicadores','Las consultas de CPU se pueden mezclar con las HTTP para calcular la disponibilidad del portal.',false,'El cálculo debe referirse a un servicio y a una prueba identificada, sin mezclar métricas distintas.');
  tf('indicadores','Debe indicarse si una ventana de observación incluye mantenimiento.',true,'El contexto de mantenimiento ayuda a interpretar interrupciones y comparar resultados.');
  tf('indicadores','Dos consultas previstas sin datos deben quedar visibles en el reporte.',true,'Es necesario distinguir datos ausentes de ceros y de resultados de falla conocidos.');
  tf('indicadores','Un dato aislado basta para afirmar una tendencia sostenida durante todo el día.',false,'Una tendencia necesita observaciones a lo largo del tiempo y un periodo definido.');
  tf('indicadores','La cobertura puede ser baja aunque todas las consultas con resultado sean exitosas.',true,'Éxitos / resultados y resultados / previstas miden aspectos distintos.');
  match('indicadores','Relaciona cada indicador o dato con su interpretación.',[['Disponibilidad por muestreo','Éxitos entre consultas con resultado'],['Cobertura','Resultados conocidos entre consultas previstas'],['Frecuencia','Intervalo entre consultas'],['Unidad','Escala de la medición']],'Disponibilidad y cobertura deben informarse juntas para describir el alcance del muestreo.');
  match('indicadores','Relaciona las unidades habituales con la medición.',[['Milisegundos','Tiempo de respuesta'],['Porcentaje de CPU','Utilización del procesador'],['Bits por segundo','Tasa de tráfico'],['Gigabytes libres','Espacio disponible de almacenamiento']],'No confundir tiempo de respuesta, consumo y tasa de transferencia.');
  match('indicadores','Relaciona cada conjunto de datos con su cobertura.',[['10 resultados de 10 previstas','100 %'],['8 resultados de 10 previstas','80 %'],['5 resultados de 10 previstas','50 %'],['0 resultados de 10 previstas','0 %']],'Cobertura = resultados conocidos / consultas previstas × 100.');
  match('indicadores','Relaciona cada situación con la forma de reportarla.',[['No se obtuvo la medición','Dato ausente'],['Se midió tráfico de 0 bps','Cero real'],['HTTP devolvió resultado incorrecto','Falla de la prueba'],['HTTP devolvió contenido esperado','Éxito de la prueba']],'Registrar con precisión evita atribuir éxito o falla a un dato desconocido.');
  // INFRAESTRUCTURA — presaberes de switches, routers y redes aplicados a monitoreo.
  mc('infraestructura','Un switch de capa 2 reenvía tramas dentro de una LAN. ¿Qué tabla conviene revisar cuando un equipo no aparece en el puerto esperado?',['La tabla de direcciones MAC','La tabla de zonas DNS','La lista de cuentas locales del servidor','El historial de CPU del navegador'],'La tabla MAC relaciona direcciones de capa 2 con interfaces y ayuda a rastrear la conexión de un equipo.');
  mc('infraestructura','Los equipos de una VLAN se comunican entre sí, pero no llegan a otra subred. ¿Qué revisarías primero?',['La puerta de enlace y el enrutamiento entre redes','La resolución de pantalla de los clientes','Sólo la capacidad de almacenamiento del switch','El nombre del archivo de monitoreo'],'La comunicación entre subredes requiere un dispositivo que enrute y una puerta de enlace correcta.');
  mc('infraestructura','Un puerto de switch muestra aumentos de errores CRC. ¿Qué comprobación tiene más sentido?',['Revisar cableado, conectores y condiciones del enlace','Cambiar el DNS del dominio como única acción','Borrar los registros para reiniciar la gráfica','Dar por averiado el servidor de correo'],'Los CRC justifican revisar la integridad del enlace; no demuestran por sí solos una causa única.');
  mc('infraestructura','Un enlace de 100 Mbps registra tráfico sostenido de 95 Mbps. ¿Qué merece investigar?',['La posible saturación del enlace y su impacto en los servicios','La falta de espacio en todas las unidades de disco','La certeza de que todos los paquetes se pierden','Un cambio obligatorio de dirección MAC'],'La utilización cercana a la capacidad puede aumentar esperas o descartes; se comprueba con otras métricas.');
  mc('infraestructura','Desde el cliente responde el gateway, pero no responde la IP de un servidor remoto. ¿Qué paso ayuda a delimitar la falla?',['Revisar la ruta y las pruebas de conectividad hacia el destino','Reinstalar inmediatamente el sistema del cliente','Cambiar la RAM del switch sin medirla','Suponer que el DNS falló aunque la prueba use una IP'],'La ruta, filtros y conectividad del destino ayudan a delimitar dónde falla la comunicación.');
  mc('infraestructura','Varios clientes de una sola VLAN pierden acceso; otras VLAN funcionan. ¿Qué alcance inicial de monitoreo priorizas?',['Puertos, pertenencia a VLAN y enlaces que transportan esa VLAN','Todas las aplicaciones del mundo por igual','Sólo el consumo de CPU de un cliente de otra VLAN','Únicamente el correo del administrador'],'El alcance del síntoma orienta la revisión de la segmentación y los enlaces compartidos.');
  mc('infraestructura','Una interfaz cambia repetidamente entre up y down. ¿Qué información ayuda más a investigar?',['Horas de los cambios, logs del puerto y estado físico del enlace','Sólo el último estado up, ocultando los anteriores','Únicamente el nombre comercial del switch','El tamaño de los archivos de los usuarios'],'Los cambios de enlace deben correlacionarse en el tiempo con registros y condiciones físicas.');
  mc('infraestructura','¿Qué permite SNMP al monitorear un router o switch compatible?',['Consultar estado y contadores de interfaces','Comprobar por sí solo que un correo llegó al buzón','Garantizar que el enrutamiento nunca cambia','Sustituir todas las pruebas de aplicación'],'SNMP obtiene información del dispositivo; cada servicio necesita además pruebas acordes a su función.');
  mc('infraestructura','Si el contador total de errores de un puerto es 400, ¿cómo sabes si siguen ocurriendo errores?',['Comparando el incremento del contador durante un intervalo conocido','Afirmando que son 400 errores por segundo','Dividiendo siempre el total entre la CPU del servidor','Suponiendo que el puerto acaba de reiniciarse'],'Un contador acumulado necesita dos lecturas y un intervalo para interpretar su evolución.');
  mc('infraestructura','Un equipo tiene una IP estática duplicada con otro. ¿Qué señal de monitoreo podría aparecer?',['Conectividad intermitente y cambios en la asociación IP/MAC','Un aumento garantizado de espacio libre en el disco','Una mejora obligatoria de la latencia','Que todos los servicios DNS se detengan siempre'],'Los conflictos de direcciones pueden producir comunicación errática; se contrastan direcciones y asociaciones ARP.');
  tf('infraestructura','Un switch de capa 2 utiliza direcciones MAC para reenviar tramas dentro de la LAN.',true,'La tabla MAC ayuda a comprobar por qué interfaz se alcanza un dispositivo.');
  tf('infraestructura','Una VLAN separa dominios de difusión y puede ser parte del alcance de una falla.',true,'Los síntomas limitados a una VLAN orientan la revisión de su configuración y enlaces.');
  tf('infraestructura','Que una interfaz esté up demuestra que todas las aplicaciones de los equipos conectados funcionan.',false,'El estado del enlace no comprueba DNS, HTTP, autenticación ni las demás funciones de aplicación.');
  tf('infraestructura','Los descartes de una interfaz son necesariamente lo mismo que errores CRC.',false,'Los descartes pueden asociarse a colas o políticas; los CRC indican problemas de integridad de tramas.');
  tf('infraestructura','Un router puede ser un punto de falla compartido para el acceso a varias subredes.',true,'La topología y las rutas permiten reconocer dependencias comunes.');
  tf('infraestructura','Si ping falla, se puede asegurar que el cable está dañado.',false,'También puede haber filtros, rutas incorrectas, destino apagado u otras causas; se requieren comprobaciones.');
  match('infraestructura','Conecta cada elemento de red con la información que aporta.',[['Tabla MAC','Direcciones de capa 2 e interfaces'],['Tabla de rutas','Redes destino y próximos saltos'],['Tabla ARP','Asociaciones IPv4 con direcciones MAC'],['Estado del puerto','Condición operativa del enlace']],'Las tablas de red aportan perspectivas distintas para delimitar un problema.');
  match('infraestructura','Conecta cada señal con una comprobación inicial razonable.',[['Errores CRC crecientes','Examinar cableado y conectores'],['Tráfico cercano a capacidad','Revisar saturación y descartes'],['Cambios up/down repetidos','Correlacionar eventos del enlace'],['Falla sólo en una VLAN','Revisar puertos y transporte de esa VLAN']],'Las señales orientan pruebas; ninguna confirma automáticamente una causa única.');
  match('infraestructura','Conecta cada dispositivo o función con su papel.',[['Switch de capa 2','Conectar equipos dentro de una LAN'],['Router','Encaminar tráfico entre redes'],['Gateway del cliente','Salida hacia otras subredes'],['VLAN','Segmentar el dominio de difusión']],'Conocer la topología facilita decidir qué componentes monitorear primero.');
  match('infraestructura','Conecta cada métrica de interfaz con lo que describe.',[['Tasa de tráfico','Cantidad de bits por segundo'],['Errores','Tramas o paquetes con problemas detectados'],['Descartes','Paquetes eliminados sin reenviarse'],['Velocidad del enlace','Capacidad negociada de la interfaz']],'Distinguir tasa, capacidad, errores y descartes mejora la interpretación del estado de red.');

  // SERVIDORES — presaberes de Windows Server y Linux Server.
  // AJUSTAR nombres de servicios a los instalados; los ejemplos Linux suponen systemd.
  mc('servidores','¿Qué herramienta de Windows Server permite observar contadores e históricos de rendimiento?',['Monitor de rendimiento (Performance Monitor)','Administrador de discos como único monitor de CPU','Editor del Registro como visor de tráfico','Bloc de notas sin una fuente de datos'],'Performance Monitor recolecta y presenta contadores para estudiar recursos y comportamiento a lo largo del tiempo.');
  mc('servidores','¿Dónde consultarías eventos del sistema y de aplicaciones en Windows Server?',['Visor de eventos','Administrador de discos exclusivamente','Editor de directivas sin registros','Centro de fuentes tipográficas'],'El Visor de eventos ayuda a correlacionar errores y advertencias con el momento de una degradación.');
  mc('servidores','En Linux con systemd, ¿qué consulta muestra el estado de un servicio nginx instalado?',['systemctl status nginx','df -h','ip route','hostname'],'systemctl status consulta el estado de la unidad; ese estado debe complementarse con una prueba funcional.');
  mc('servidores','Un servidor Linux no puede escribir más archivos. ¿Qué comando revisa el espacio de los sistemas de archivos montados?',['df -h','free -h','ip addr','whoami'],'df informa capacidad y uso de sistemas de archivos; si hay espacio aún disponible, se revisan también inodos y permisos.');
  mc('servidores','¿Qué utilidad de Linux permite observar procesos y su consumo de recursos?',['top','passwd','mkdir','nslookup'],'top muestra procesos y actividad del sistema; ayuda a encontrar qué proceso coincide con CPU alta.');
  mc('servidores','Windows Server presenta CPU sostenida al 95 %. ¿Cuál es el siguiente paso de diagnóstico más útil?',['Identificar procesos que consumen CPU y correlacionar el inicio del problema','Reiniciar sin conservar ninguna información','Cambiar el nombre del dominio de inmediato','Declarar averiado el procesador sólo por el porcentaje'],'El consumo elevado es una señal; la revisión de procesos y eventos ayuda a explicar la causa.');
  mc('servidores','Un servicio está en estado Running o active, pero la página devuelve errores. ¿Qué conclusión es correcta?',['El proceso está activo; falta verificar la función y sus dependencias','La página funciona correctamente con certeza','El disco del cliente está averiado con certeza','Los logs ya no aportan información'],'El estado del proceso no garantiza respuesta funcional, contenido correcto ni acceso a dependencias.');
  mc('servidores','¿Qué revisarías para investigar los eventos del servicio nginx en Linux con systemd?',['journalctl -u nginx','Sólo la tabla de rutas','Sólo el listado de cuentas','El historial de resolución de pantalla'],'journalctl permite revisar eventos del servicio por unidad; los registros ayudan a contextualizar la falla.');
  mc('servidores','Windows Server indica un volumen de 100 GB con 97 GB usados. ¿Qué conviene monitorear?',['Espacio libre y su tendencia, junto con errores de escritura','Sólo la cantidad de usuarios de dominio','Sólo el estado del teclado','Únicamente la respuesta ICMP del gateway'],'La capacidad disponible y la velocidad de crecimiento permiten anticipar problemas de almacenamiento.');
  mc('servidores','El servidor consume mucha RAM. ¿Qué ayuda a interpretar la situación?',['Memoria disponible, procesos, uso de intercambio y efecto en los servicios','Considerar averiado todo el sistema sólo por un porcentaje','Comparar la RAM con el número de puertos del switch','Borrar todos los registros para liberar memoria'],'La utilización de memoria requiere contexto: caché, memoria disponible, procesos y presión de intercambio.');
  tf('servidores','En Windows Server, una advertencia en el Visor de eventos debe interpretarse con su hora, origen y contexto.',true,'El nivel del evento orienta la investigación, pero no demuestra por sí solo una causa.');
  tf('servidores','En un Linux con systemd, systemctl puede consultar si un servicio está activo.',true,'La consulta de estado no reemplaza la verificación funcional del servicio.');
  tf('servidores','free -h en Linux muestra información de memoria y de intercambio.',true,'Ayuda a revisar RAM y swap; se interpreta junto con procesos y comportamiento del servicio.');
  tf('servidores','Una CPU alta en Windows Server y en Linux Server siempre tiene la misma causa.',false,'La causa depende de procesos, carga y condiciones; se investiga en cada sistema.');
  tf('servidores','Un agente de monitoreo puede obtener métricas de CPU, memoria y disco de un servidor compatible.',true,'El agente debe estar instalado, configurado y autorizado para entregar esas mediciones.');
  tf('servidores','Si un servicio responde a ping, ya se verificaron sus permisos de acceso y autenticación.',false,'ICMP no comprueba las credenciales ni las operaciones propias del servicio.');
  match('servidores','Conecta cada herramienta de Windows Server con su uso.',[['Monitor de rendimiento','Observar contadores de recursos'],['Visor de eventos','Consultar eventos fechados'],['Consola Servicios','Revisar estado de los servicios'],['Administrador de tareas','Identificar consumo por proceso']],'Combinar recursos, procesos y eventos ayuda a investigar un servidor.');
  match('servidores','Conecta cada consulta Linux con la información que aporta.',[['df -h','Espacio de sistemas de archivos'],['free -h','RAM y memoria de intercambio'],['top','Actividad y consumo de procesos'],['ip route','Rutas configuradas']],'Estas consultas cubren almacenamiento, memoria, procesos y conectividad.');
  match('servidores','Conecta cada síntoma con un dato inicial útil.',[['No se pueden guardar archivos','Espacio libre y permisos'],['Aplicación lenta con CPU alta','Consumo por proceso'],['Servicio detenido','Estado y eventos de la unidad'],['Errores sólo al autenticar','Registros de acceso y credenciales de prueba']],'Primero reúne datos que distingan entre recursos, servicio y acceso.');
  match('servidores','Conecta cada recurso del servidor con un indicador.',[['Procesador','Utilización de CPU'],['Memoria','RAM disponible'],['Almacenamiento','Espacio libre'],['Red','Tasa de tráfico de la interfaz']],'No mezcles recursos distintos: conserva origen, unidad y momento de cada medición.');

  // DIAGNÓSTICO — herramientas, servicios, alertas y recuperación según enfoque de la guía.
  mc('diagnostico','La IP del servidor responde, pero su nombre no se resuelve. ¿Qué componente revisarías primero?',['DNS y la configuración del resolvedor del cliente','La CPU del switch como única explicación','El contenido del buzón de correo','El tamaño de la partición de datos'],'La diferencia entre acceder por IP y por nombre orienta una prueba de resolución DNS.');
  mc('diagnostico','¿Qué prueba comprueba mejor el funcionamiento de un portal HTTP?',['Validar respuesta y contenido esperado','Comprobar sólo un puerto TCP abierto','Comprobar sólo ping','Comprobar sólo que el proceso está iniciado'],'Un servicio web debe entregar la respuesta funcional esperada, además de estar accesible.');
  mc('diagnostico','¿Qué permite una consulta DNS de diagnóstico?',['Comprobar que el nombre devuelve la dirección esperada desde el DNS elegido','Garantizar que el servicio HTTP entrega su contenido','Medir el espacio libre del servidor','Comprobar por sí sola la concesión DHCP'],'Registrar el servidor DNS consultado y su respuesta ayuda a diferenciar problemas de resolución.');
  mc('diagnostico','¿Qué confirma que DHCP funciona para un cliente de prueba?',['Una concesión válida con IP, máscara, gateway y DNS esperados','Sólo ver el proceso del servidor activo','Sólo observar un puerto abierto en el servidor','Sólo resolver un nombre externo'],'La comprobación funcional se realiza desde el cliente y revisa los parámetros concedidos.');
  mc('diagnostico','SMTP acepta un mensaje de prueba. ¿Qué falta para comprobar la entrega completa?',['Verificar el mensaje esperado en el buzón de destino','Comprobar sólo que el puerto 25 está abierto','Cambiar la VLAN del switch de inmediato','Medir la latencia ICMP del servidor como única prueba'],'Aceptar el envío no demuestra que el destinatario recibió el mensaje.');
  mc('diagnostico','¿Qué aporta una plataforma como Zabbix al monitoreo?',['Integrar métricas, históricos y alertas de equipos y servicios','Garantizar que no habrá ningún incidente','Reemplazar toda prueba funcional por un único ping','Corregir automáticamente cualquier causa de falla'],'La plataforma reúne señales y permite configurar comprobaciones; el diagnóstico sigue requiriendo interpretación.');
  mc('diagnostico','¿Qué diferencia hay entre Prometheus y Grafana en un sistema de monitoreo?',['Prometheus obtiene y almacena métricas; Grafana visualiza datos de fuentes','Grafana instala por sí sola agentes en todos los equipos','Prometheus sirve exclusivamente para correo','Ambos sustituyen siempre las consultas SNMP'],'La recolección y la visualización son funciones distintas que pueden integrarse.');
  mc('diagnostico','Una alerta se activa con cada pico de CPU de un segundo y el servicio sigue estable. ¿Qué revisarías?',['Línea base, duración de la condición y criterio del umbral','Desactivar todas las alertas permanentemente','Considerar cada pico una avería física confirmada','Borrar el histórico antes de investigar'],'Ajustar la condición a la persistencia y al impacto puede reducir avisos que no representan degradación.');
  mc('diagnostico','Tras intervenir un servicio con fallas, ¿qué comprueba su recuperación?',['Repetir la operación funcional y contrastar estado y registros','Cerrar la alerta sin ejecutar pruebas','Reiniciar y suponer que ya funciona','Eliminar los registros del incidente'],'La recuperación se verifica con la función que fallaba, no sólo con un estado visual.');
  mc('diagnostico','¿Qué acceso es preferible para recolectar datos de un dispositivo de red?',['Permisos de lectura limitados y SNMPv3 con autenticación y cifrado si es compatible','Credenciales de administrador publicadas en el tablero','Acceso de escritura abierto a cualquier origen','Compartir una comunidad sin limitar la red de gestión'],'El monitoreo necesita permisos acordes a la recolección y protección del canal y las credenciales.');
  tf('diagnostico','Un puerto TCP abierto garantiza que la aplicación completa funciona correctamente.',false,'La conexión TCP no verifica contenido, autenticación ni operaciones de negocio.');
  tf('diagnostico','Los relojes sincronizados ayudan a correlacionar logs y métricas entre equipos.',true,'Las marcas de tiempo comparables facilitan reconstruir una secuencia de eventos.');
  tf('diagnostico','Una alerta confirma siempre la causa raíz de un incidente.',false,'Notifica una condición; la causa se comprueba con hipótesis y pruebas.');
  tf('diagnostico','La pérdida de paquetes y el tiempo de respuesta son indicadores distintos.',true,'Una prueba puede registrar respuestas lentas, pérdida o ambos; se interpretan por separado.');
  tf('diagnostico','Si hay conectividad, un firewall ya no puede influir en el acceso a servicios concretos.',false,'Un filtro puede permitir ICMP y bloquear un puerto o aplicación.');
  tf('diagnostico','Es útil conservar mediciones antes y después de un cambio para evaluar su efecto.',true,'Comparar ventanas equivalentes permite observar si el servicio mejoró o si persiste la falla.');
  match('diagnostico','Conecta cada mecanismo con la información que obtiene.',[['ICMP','Respuesta de conectividad'],['SNMP','Estado y contadores del dispositivo'],['Agente','Métricas del sistema operativo'],['Logs','Eventos con fecha y hora']],'El mecanismo se selecciona según lo que se necesita observar.');
  match('diagnostico','Conecta cada servicio con su comprobación funcional.',[['HTTP','Respuesta y contenido esperados'],['DNS','Resolución del nombre a la IP esperada'],['DHCP','Concesión y parámetros del cliente'],['Correo','Mensaje recibido en el buzón destino']],'Cada prueba debe ejecutar la función del servicio.');
  match('diagnostico','Conecta cada síntoma con una prueba para delimitarlo.',[['Falla por nombre, funciona por IP','Consulta de resolución DNS'],['Servidor accesible, web incorrecta','Validación de respuesta HTTP'],['Cliente sin concesión válida','Renovación DHCP en red de prueba'],['Alerta de CPU persistente','Consulta de procesos y métricas']],'Delimitar el síntoma evita intervenir componentes sin evidencia.');
  match('diagnostico','Conecta cada componente con su función de monitoreo.',[['Recolector','Obtener mediciones'],['Histórico','Conservar evolución de los datos'],['Tablero','Visualizar estado y tendencias'],['Notificador','Enviar avisos de condiciones detectadas']],'La observación combina recolección, conservación, visualización y notificación.');

  // Casos con gráficos explorables. Datos sintéticos, fijos dentro de cada sesión.
  // AJUSTAR los datos y la pregunta juntos: las unidades y conclusiones deben coincidir.
  const cpu = {tipo:'linea',titulo:'CPU del servidor',unidad:'%',max:100,etiquetas:['09:00','09:01','09:02','09:03'],valores:[20,25,70,90]};
  const muestras = {tipo:'barras',titulo:'Consultas HTTP en 30 minutos',unidad:'consultas',max:30,etiquetas:['Previstas','Con resultado','Exitosas'],valores:[30,28,26]};
  const visuales = {
    'conceptos-02':{tipo:'medidores',titulo:'Estado observado · servidor de pruebas',unidad:'%',max:100,etiquetas:['CPU','RAM','Disco usado'],valores:[65,48,37]},
    'conceptos-07':{tipo:'topologia',titulo:'Cliente → red → servicio',nodos:[['Cliente','En prueba'],['Switch','ICMP responde'],['Servidor','HTTP sin comprobar']]},
    'conceptos-09':{...cpu,titulo:'Serie histórica · cuatro muestras'},
    'indicadores-01':muestras,'indicadores-02':muestras,
    'indicadores-03':{tipo:'barras',titulo:'Resultados de la ventana',unidad:'consultas',max:30,etiquetas:['Previstas','Con resultado','Exitosas'],valores:[30,0,0]},
    'indicadores-05':{tipo:'linea',titulo:'Tráfico de interfaz · muestras cada 60 s',unidad:'Mbps',max:100,etiquetas:['10:00','10:01','10:02','10:03','10:04'],valores:[12,24,21,46,39]},
    'indicadores-06':cpu,
    'indicadores-08':{tipo:'barras',titulo:'Pruebas del servicio',unidad:'consultas',max:20,etiquetas:['Con resultado','Exitosas'],valores:[20,18]},
    'infraestructura-03':{tipo:'linea',titulo:'Errores CRC · contador acumulado',unidad:'errores',max:80,etiquetas:['11:00','11:01','11:02','11:03'],valores:[4,9,32,67]},
    'infraestructura-04':{tipo:'linea',titulo:'Enlace de 100 Mbps',unidad:'Mbps',max:100,etiquetas:['11:00','11:01','11:02','11:03'],valores:[91,95,96,95]},
    'infraestructura-05':{tipo:'topologia',titulo:'Pruebas por dirección IP',nodos:[['Cliente','Origen'],['Gateway','Responde'],['Servidor remoto','No responde']]},
    'infraestructura-07':{tipo:'registro',titulo:'Eventos de la interfaz',filas:[['12:00:01','Gi0/1','Link up'],['12:00:20','Gi0/1','Link down'],['12:00:32','Gi0/1','Link up'],['12:00:58','Gi0/1','Link down']]},
    'infraestructura-09':{tipo:'linea',titulo:'Contador total de errores',unidad:'errores',max:500,etiquetas:['12:01','12:02'],valores:[400,424]},
    'servidores-02':{tipo:'registro',titulo:'Windows Server · ejemplo sintético',filas:[['13:10:00','Application','Servicio iniciado'],['13:11:10','Application','Advertencia de aplicación'],['13:12:05','System','Error de escritura']]},
    'servidores-03':{tipo:'registro',titulo:'Linux con systemd · salida simulada',filas:[['Unidad','nginx.service','Web server'],['Estado','active (running)','Desde 13:00']]},
    'servidores-04':{tipo:'barras',titulo:'Uso de sistemas de archivos',unidad:'%',max:100,etiquetas:['/','/var','/home'],valores:[42,100,31]},
    'servidores-06':{tipo:'linea',titulo:'Windows Server · utilización de CPU',unidad:'%',max:100,etiquetas:['14:00','14:01','14:02','14:03'],valores:[92,95,96,95]},
    'servidores-09':{tipo:'medidores',titulo:'Volumen de 100 GB',unidad:'GB',max:100,etiquetas:['Usados','Libres'],valores:[97,3]},
    'servidores-10':{tipo:'medidores',titulo:'Memoria de servidor · lectura sintética',unidad:'GB',max:16,etiquetas:['RAM total','Disponible','Swap usada'],valores:[16,1,3]},
    'diagnostico-01':{tipo:'registro',titulo:'Pruebas del cliente',filas:[['15:00','Acceso por IP','Responde'],['15:01','Consulta por nombre','No resuelve']]},
    'diagnostico-02':{tipo:'registro',titulo:'Sondas de monitoreo · sin validar contenido',filas:[['15:10','ICMP','Responde'],['15:10','TCP 80','Conexión establecida']]},
    'diagnostico-08':{tipo:'linea',titulo:'CPU · picos de un segundo',unidad:'%',max:100,etiquetas:['0 s','1 s','2 s','3 s','4 s','5 s','6 s'],valores:[23,94,24,22,93,25,23]},
    'diagnostico-09':{tipo:'registro',titulo:'Seguimiento del servicio',filas:[['16:00','Prueba inicial','Respuesta incorrecta'],['16:02','Intervención','Cambio aplicado'],['16:03','Verificación','Por ejecutar']]}
  };
  banco.forEach(q=>{if(visuales[q.id])q.visual=visuales[q.id];});
  globalThis.RADAR_BANCO = {version:'2.0',temas,preguntas:banco};
})();
```

## motor.js

```javascript
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
```

## graficos.js

```javascript
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
```

## interacciones.js

```javascript
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
```

## app.js

```javascript
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
```

## favicon.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#102f36"/><g fill="none" stroke="#c7f66a" stroke-width="3"><circle cx="32" cy="32" r="21"/><circle cx="32" cy="32" r="12"/><path d="M32 32 49 17"/></g><circle cx="32" cy="32" r="4" fill="#c7f66a"/></svg>
```

## .nojekyll

```text

```

## pruebas.cjs

```javascript
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
```

## servidor.cjs

```javascript
/* Vista local opcional: node servidor.cjs. Detener con Ctrl+C. */
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const tipos={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.md':'text/plain; charset=utf-8','.json':'application/json'};
http.createServer((req,res)=>{
  let nombre;try{nombre=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);res.end();return;}
  const p=path.resolve(__dirname,'.'+(nombre==='/'?'/index.html':nombre));
  if(!p.startsWith(__dirname+path.sep)){res.writeHead(403);res.end();return;}
  fs.readFile(p,(error,data)=>{if(error){res.writeHead(404);res.end('No encontrado');return;}res.writeHead(200,{'Content-Type':tipos[path.extname(p)]||'text/plain; charset=utf-8','Cache-Control':'no-store'});res.end(data);});
}).listen(4173,'127.0.0.1',()=>console.log('Radar: http://127.0.0.1:4173'));
```
