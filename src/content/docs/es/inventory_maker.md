---
title: 'Generador de inventarios'
description: 'Plugin para generar inventarios en ArchiHUB'
---

El plugin permite exportar inventarios en ArchiHUB. Este plugin está por defecto en la aplicación y no necesita ser instalado. El plugin permite exportar un inventario de los recursos de ArchiHUB en Excel. A continuación, se describen los pasos para generar un inventario:

## Generar inventario

1. **Acceder al plugin**: para acceder al plugin de generación de inventarios, ve a la pestaña de procesamientos en la interfaz de ArchiHUB y selecciona el botón `PROCESAMIENTO MASIVO` del plugin de exportar inventarios.
2. **Seleccionar el recurso**: selecciona el recurso del cual deseas generar el inventario.
3. **Exportar inventario**: una vez que hayas seleccionado el recurso, haz clic en el botón `PROCESAR`. El plugin creará una tarea de procesamiento y el inventario estará disponible en la pestaña de tareas una vez que la tarea haya finalizado.
4. **Descargar inventario**: una vez que la tarea haya finalizado, ve a la pestaña de tareas en el perfil y haz clic en el botón `DESCARGAR` para descargar el inventario en formato Excel.

Para el uso del plugin es importante que haya al menos una fila de procesamiento disponible, ya que de esto depende que se puedan ejecutar las tareas relacionadas con el procesamiento de archivos. Para crear una fila de procesamiento o validar que exista, revisa la documentación de [filas de procesamiento](../nodos).