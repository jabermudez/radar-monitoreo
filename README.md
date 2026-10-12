# Radar 2.0 · Diagnóstico de presaberes de monitoreo

Aplicación estática en español para Gestión de Redes de Datos, ficha 3399813. HTML, CSS y JavaScript sin backend, dependencias de ejecución, cuentas ni recursos externos.

## Archivos

```text
monitoreo-presaberes/
├── index.html         Interfaz exclusiva para aprendices
├── styles.css         Diseño responsivo, animación y estilos de impresión
├── experiencia.css    Paleta moderna, interacciones y animaciones
├── graficos.js        Gráficas SVG explorables y perfil de resultados
├── interacciones.js   Conexiones de tarjetas con clics y teclado
├── preguntas.js       Banco editable de 100 preguntas y rutas por tema
├── motor.js           Aleatorización, configuración y puntuación
├── app.js             Temporizador, avance, resultados y descargas
├── favicon.svg        Icono vectorial propio
├── .nojekyll          Publicación directa de los archivos estáticos
├── README.md          Uso y despliegue
├── FUENTES.md         Alineación con guía y plan
├── CODIGO.md          Código completo de los archivos de ejecución
├── pruebas.cjs        Verificación opcional con Node.js
└── servidor.cjs       Servidor de vista previa opcional con Node.js
```

## Uso en clase

1. Abre `index.html` en un navegador moderno (Chrome, Edge, Firefox o Safari), o utiliza la URL de GitHub Pages. Para comprobar el guardado con un origen estable, usa la URL publicada o el servidor local.
2. Cada aprendiz escribe su nombre (opcional) y comienza. Si lo omite, se utiliza «Aprendiz sin nombre» y un identificador independiente de sesión.
3. Dispone de **40 minutos** para **30 preguntas**: 15 de opción múltiple, 10 V/F y 5 de relación. Hay seis preguntas por cada uno de cinco temas. Las preguntas no muestran las respuestas correctas durante la sesión.
4. El mapa permite volver a preguntas, distingue completas, parciales y pendientes. La selección, el orden, las opciones y las filas de relación se barajan con `crypto.getRandomValues` y Fisher–Yates. En relación, al asignar una definición ya utilizada se libera su asignación anterior.
5. Al finalizar manualmente se pide confirmación. Al agotarse el plazo se califica automáticamente. El reloj utiliza una fecha límite absoluta: cerrar, cambiar de pestaña o recargar no reinicia los 40 minutos. Si la página estuvo cerrada, se procesa el vencimiento al retomar.
6. Se muestra puntaje sobre 100, puntos sobre 30, nivel orientativo y retroalimentación por tema. Una pregunta vale un punto; en relación cada uno de los cuatro pares vale 0,25. No hay penalización adicional por error. Los pendientes valen cero. «Preguntas completas» indica respuesta a todos sus elementos, no corrección.
7. Niveles: básico por debajo de 50 %, intermedio desde 50 % hasta menos de 80 %, avanzado desde 80 %. Se usa el porcentaje sin redondear para asignar el nivel. Los umbrales son didácticos, no una certificación de competencia.
8. Descarga JSON para el instructor, CSV individual o imprime el resumen (selecciona **Guardar como PDF** en el diálogo de impresión). Conserva o entrega estos archivos por el canal que acuerde el instructor.
9. La consola del instructor está **separada del sitio público**: en la entrega completa, abre `radar-instructor-local/index.html` en tu computador. Conserva esa carpeta al lado de `monitoreo-presaberes` y no la subas a GitHub. Importa allí los JSON para revisar el promedio por área y generar el CSV del grupo. La lista importada dura hasta cerrar o recargar: exporta para conservarla.

## Cambios de la versión 2.0

- Banco exclusivamente técnico: fundamentos, indicadores, switches/routers, Windows/Linux Server y servicios/diagnóstico. Se eliminaron preguntas sobre entregas, organización de grupos, estructura de la guía e instrumentos de evaluación.
- Cinco temas con 20 preguntas cada uno. Al menos una pregunta visual por tema en cada sesión.
- Casos explorables de CPU, RAM, disco, tráfico, consultas HTTP, logs y topología. Las cifras son datos sintéticos del caso, no mediciones de una red real.
- Tablero inicial para comparar una ventana normal y un evento simulado, sin activar el temporizador.
- Relaciones mediante dos clics, líneas animadas, Tab + Enter y selectores alternativos. La marca de conexión indica que una elección está guardada; no confirma que sea correcta.
- Nueva paleta violeta/cian/lima, transiciones, selección animada, radar original con control de exploración y celebración al terminar. Se respeta la preferencia de movimiento reducido.
- Perfil final tipo radar calculado con los porcentajes reales de los cinco temas.
- La consola del instructor no aparece ni está incluida en el paquete público. La entrega completa contiene dos carpetas; sólo `monitoreo-presaberes` se publica.

Las sesiones y JSON de la versión anterior no se mezclan con este banco. La selección sigue usando aleatoriedad independiente del nombre.

El avance y el último resultado quedan en `localStorage` del navegador, en la clave `radar-monitoreo-sesion-v2`. La aplicación guarda un intento por navegador/origen y sincroniza cambios del mismo intento entre pestañas. Usa una pestaña por aprendiz. En un equipo compartido, descarga el resultado y elige **Nueva exploración** o **Borrar avance y empezar de nuevo** antes del siguiente aprendiz. No se recopilan los nombres del plan original. Si el navegador bloquea el almacenamiento o agota su espacio, se avisa y la sesión sigue en memoria; evita cerrar o recargar.

## Editar el diagnóstico

- En `preguntas.js`, usa las funciones `mc`, `tf` y `match` con el formato de los ejemplos. En `mc` se escribe la respuesta correcta primera; el orden visible se cambia al crear cada sesión. En `tf`, `true` indica que la afirmación es verdadera. En `match`, cada par contiene concepto y definición correcta. Las definiciones deben ser distintas.
- Los IDs se generan por tema y posición. Si se insertan o modifican preguntas, **incrementa `version` en `preguntas.js`**, para que un avance antiguo no se mezcle con otro banco. Comunica la actualización antes de la clase; los JSON de otra versión se rechazan en esta versión del visor.
- Mantén al menos 3 preguntas `mc`, 2 `tf` y 1 `match` por tema; la aplicación detecta si faltan. Es recomendable conservar o ampliar las 20 por tema del banco original.
- Los comentarios `AJUSTAR` identifican decisiones del laboratorio que debes revisar si cambia la guía. Revisa también las rutas por tema y las explicaciones.
- En `motor.js`, `duracionMinutos` modifica el tiempo y `porTema` define cuotas por tipo. `nivelIntermedio` y `nivelAvanzado` son porcentajes. Si cambias la cantidad de preguntas/temas, actualiza también textos de `index.html`, validación de JSON en `radar-instructor-local/instructor.js`, documentación y pruebas; la configuración entregada es 30 preguntas y cinco temas.
- Ensaya siempre una sesión nueva y una descarga/importación después de editar.

## Aleatorización y alcance

Cada tema tiene 10 MC, 6 V/F y 4 relaciones. Se seleccionan 3 MC, 2 V/F y 1 relación por tema. Una de las MC se elige del subconjunto visual y las otras dos del resto del tema; de esta forma cada sesión contiene al menos cinco casos visuales. La selección, el orden, las opciones y las filas de relación se barajan. Hay una gran cantidad de combinaciones, por lo que 30 sesiones independientes muy probablemente tendrán conjuntos completos y órdenes distintos.

No se garantiza que dos personas no compartan algunas preguntas ni se elimina la posibilidad matemática de coincidencia de todo el conjunto. El reparto por tema/tipo ayuda a comparar puntajes, pero la dificultad del banco no está calibrada psicométricamente.

En una aplicación estática el código, el banco y las respuestas correctas son accesibles. Un usuario con conocimientos técnicos puede consultar o manipular esos datos, el reloj del dispositivo y los archivos descargados. La importación comprueba consistencia, no autenticidad ni identidad. Se entrega un diagnóstico formativo que dificulta la copia casual, no un examen seguro. No existe recolección automática, prohibición de nuevos intentos ni control centralizado de resultados.

## Vista local y pruebas opcionales

No necesitas Node.js para ejecutar la aplicación ni para GitHub Pages. Si ya está instalado, abre una terminal **en esta carpeta**:

```powershell
node pruebas.cjs
node servidor.cjs
```

Abre `http://127.0.0.1:4173`. Detén el servidor con Ctrl+C. Las pruebas verifican el banco, 1.000 selecciones equilibradas, puntuación perfecta/vacía/parcial y fronteras de nivel. El muestreo comprueba el comportamiento; no demuestra unicidad universal.

## Publicar en GitHub Pages desde el navegador

1. Entra en GitHub e inicia sesión. Pulsa **+ → New repository**.
2. Escribe `radar-monitoreo` como nombre. Para publicar con GitHub Free, crea un repositorio **Public**. Puedes marcar **Add a README file** para crear `main`. Pulsa **Create repository**.
3. Abre el repositorio y elige **Add file → Upload files**. Sube **el contenido de esta carpeta**, con `index.html` directamente en la raíz del repositorio. No subas la carpeta contenedora, `radar-instructor-local`, las guías originales, archivos de resultados o ZIP. Si usas el ZIP de GitHub Pages, ya excluye la consola del instructor. Los archivos de ejecución son `index.html`, `styles.css`, `preguntas.js`, `motor.js`, `graficos.js`, `interacciones.js`, `app.js`, `experiencia.css`, `favicon.svg` y `.nojekyll`; también puedes subir la documentación y los scripts opcionales.
4. Escribe un mensaje de commit y selecciona **Commit changes** sobre `main`. Si el selector de archivos oculta `.nojekyll`, créalo desde **Add file → Create new file**, con nombre `.nojekyll` y un comentario como contenido; confirma el commit. La presencia del archivo evita el procesamiento de Jekyll.
5. Abre **Settings → Pages** en ese repositorio. En **Build and deployment → Source**, selecciona **Deploy from a branch**.
6. En **Branch**, selecciona **main** y **/(root)**. Pulsa **Save**. Si `main` no aparece, verifica que hayas confirmado la subida del paso 4.
7. Revisa **Actions** hasta que el trabajo **pages build and deployment** termine correctamente. Regresa a **Settings → Pages** y abre la dirección mostrada en **Visit site**. Para el nombre propuesto será `https://TU-USUARIO.github.io/radar-monitoreo/`; sustituye `TU-USUARIO` por tu cuenta. La primera publicación puede tardar unos minutos.
8. Realiza una sesión de prueba: comenzar, responder, recargar, finalizar, descargar JSON e importarlo en la herramienta local del instructor. Comparte esa URL con los aprendices.

No se necesita compilación, `npm install`, secreto ni GitHub Actions personalizado. Todas las referencias de recursos son relativas, de modo que funcionan en la ruta del repositorio. Para actualizar, sube los archivos modificados a `main`, confirma el commit y espera el nuevo despliegue.

## Publicar con Git (alternativa)

Crea en GitHub un repositorio público vacío llamado `radar-monitoreo`, sin README inicial. Abre PowerShell en **esta carpeta** y ejecuta, reemplazando `TU-USUARIO`:

```powershell
git init
git add index.html styles.css experiencia.css preguntas.js motor.js graficos.js interacciones.js app.js favicon.svg .nojekyll README.md FUENTES.md CODIGO.md pruebas.cjs servidor.cjs
git commit -m "Crear diagnóstico de presaberes de monitoreo"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/radar-monitoreo.git
git push -u origin main
```

Autentícate con el flujo que ofrezca Git. Luego realiza los pasos 5–8 anteriores. Estos comandos suponen una carpeta sin repositorio Git previo y un remoto vacío. Si ya existe un repositorio, integra los archivos siguiendo su flujo habitual.

Referencia oficial de los pasos de publicación: [Configurar una fuente de publicación para GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Comprobación manual recomendada antes de la clase

- Computador y celular: texto legible, opciones completas, relaciones mediante selectores y mapa navegable con teclado.
- Temporizador: persiste tras recarga, contabiliza tiempo fuera de la página y cierra al vencer; puedes usar 1 minuto en una copia de prueba y restaurar 40 después.
- Resultado: 0 % sin respuestas, crédito parcial en relaciones, explicación sólo tras finalizar y reimpresión del resumen.
- JSON: se reimporta; un archivo inválido se rechaza; el mismo ID no duplica filas en la consola local; CSV conserva tildes y separa columnas con punto y coma.
- Nombre vacío o con caracteres especiales: se muestra como texto y nunca se interpreta como HTML.
