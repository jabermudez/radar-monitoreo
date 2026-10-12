# Verificación Radar 2.0 — 12 de octubre de 2026

- Banco: 100 preguntas técnicas, 20 por tema; IDs únicos y estructuras válidas. Se comprobó que no existen preguntas sobre entregas, organización de grupos o estructura de la guía.
- Selección: 1.000 sesiones con 30 preguntas, sin repetición interna; seis preguntas por tema y al menos un caso visual por cada tema. No se repitieron conjuntos completos ni órdenes en la muestra.
- Puntuación: vacío, perfecto, crédito parcial y límites de nivel comprobados con Node.js.
- Vista pública: no contiene sección, enlace ni controles del instructor. El ZIP de GitHub Pages excluye físicamente la consola local y su código.
- Navegador: exploración de ventana normal/evento simulado y puntos de gráfica, V/F, MC y relaciones de tarjetas con clics y Tab + Enter.
- Persistencia: respuesta V/F y cuatro conexiones recuperadas tras recarga, sin reiniciar el reloj.
- Caso de prueba: 3 respuestas completas correctas, incluyendo una relación de cuatro pares, resultaron en 3/30 = 10 %. El perfil y los porcentajes por tema correspondieron a los puntos.
- Consola local: importó el JSON 2.0 y presentó el mismo puntaje y promedio por tema. Omitió un duplicado y rechazó un JSON 1.0.
- CSV del instructor descargado y comprobado: encabezado, 16 columnas y una fila de resultados con tildes.
- Vista móvil y computador inspeccionadas (375 y 1265 px efectivos). Sin desbordamiento horizontal de la página. Temporizador fijo y alternativas de selección disponibles.
- Gráficas etiquetadas como simuladas; el perfil final usa resultados reales. Movimiento reducido respetado mediante CSS y ausencia de confeti cuando se solicita.

El cierre automático ya se comprobó en la primera entrega y su lógica se conserva. Esta revisión comprobó el cierre manual y las nuevas interacciones. No se ha realizado despliegue real de GitHub Pages. La impresión debe verificarse en el navegador del instructor.
