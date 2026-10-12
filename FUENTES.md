# Radar 2.0 · Fuentes y alcance técnico

La guía final y el plan corregido de la ficha 3399813 orientan el contenido de **monitoreo**, no se evalúa su estructura ni la organización de actividades.

Fuentes principales suministradas:
- `Guias de aprendizaje 3399813/Guia de aprendizaje Monitoreo 3399813 final.docx`, consultada mediante `_trabajo_guias/monitoreo_final_texto.txt`.
- `Plan Trabajo Concertado Monitoreo 3399813 corregido.xlsx`, como referencia de alcance técnico.

| Área del banco | Contenido evaluado |
| --- | --- |
| Fundamentos | Métrica, umbral, alerta, incidente, línea base, históricos y SLA |
| Indicadores | Unidades, periodos, cobertura, disponibilidad y datos ausentes |
| Switches y routers | Interfaces, VLAN, MAC/ARP, rutas, gateway, CRC y descartes |
| Windows/Linux Server | CPU, RAM, disco, procesos, servicios y registros |
| Servicios y diagnóstico | ICMP, SNMP, agentes, DNS, HTTP, DHCP, correo, alertas y recuperación |

Los presaberes de redes y sistemas operativos son una ampliación técnica solicitada por el instructor para conectar temas ya vistos con el monitoreo. Los ejemplos Linux que usan `systemctl` y `journalctl` suponen systemd; el nombre del servicio debe existir en ese entorno. No se solicitan comandos de intervención en equipos reales.

Referencias oficiales consultadas para esa ampliación:
- [Microsoft: Performance Monitor en Windows Server](https://learn.microsoft.com/en-us/troubleshoot/windows-server/support-tools/troubleshoot-issues-performance-monitor).
- [Microsoft: eventos, servicios y rendimiento en Server Manager](https://learn.microsoft.com/en-us/windows-server/administration/server-manager/view-and-configure-performance-event-and-service-data).
- [Red Hat: systemctl y journalctl](https://developers.redhat.com/cheat-sheets/systemd-commands-cheat-sheet).
- [Red Hat: consultas administrativas y df](https://access.redhat.com/node/1189123/40/2/14017291).
- [Cisco: diagnóstico de puertos e interfaces](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-6500-series-switches/12027-53.html).

Las visualizaciones son datos sintéticos de situaciones técnicas. No se presentan como telemetría real. La pregunta, sus valores, las unidades y la explicación se deben editar juntos si se modifica un caso. Los objetivos de muestreo no se convierten en estándares empresariales universales.

Disponibilidad observada por muestreo = consultas exitosas / consultas con resultado × 100. Cobertura = consultas con resultado / consultas previstas × 100. Sin resultados, la disponibilidad no es evaluable y la cobertura es cero. Una ausencia de datos no es éxito, falla conocida ni cero real.
