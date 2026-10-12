/* Vista local opcional: node servidor.cjs. Detener con Ctrl+C. */
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const tipos={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.md':'text/plain; charset=utf-8','.json':'application/json'};
http.createServer((req,res)=>{
  let nombre;try{nombre=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);res.end();return;}
  const p=path.resolve(__dirname,'.'+(nombre==='/'?'/index.html':nombre));
  if(!p.startsWith(__dirname+path.sep)){res.writeHead(403);res.end();return;}
  fs.readFile(p,(error,data)=>{if(error){res.writeHead(404);res.end('No encontrado');return;}res.writeHead(200,{'Content-Type':tipos[path.extname(p)]||'text/plain; charset=utf-8','Cache-Control':'no-store'});res.end(data);});
}).listen(4173,'127.0.0.1',()=>console.log('Radar: http://127.0.0.1:4173'));
