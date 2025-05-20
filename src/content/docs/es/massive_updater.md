---
title: "Actualizador masivo de recursos"
description: "Plugin para actualizar recursos en ArchiHUB"
---

El plugin permite actualizar recursos en ArchiHUB. Este plugin está por defecto en la aplicación y no necesita ser instalado. El plugin permite actualizar recursos en ArchiHUB a partir de un archivo de Excel en formato similar al generado por el plugin de [generación de inventarios](../inventory_maker). A continuación, se describen los pasos para actualizar recursos:

## Actualizar recursos

1. **Acceder al plugin**: para acceder al plugin de actualización de recursos, ve a la pestaña de procesamientos en la interfaz de ArchiHUB y selecciona el botón `PROCESAMIENTO MASIVO` del plugin de actualizar recursos.
2. **Seleccionar el archivo**: selecciona el archivo de Excel con los recursos que deseas actualizar.
3. **Configurar actualización**: el plugin permite eliminar recursos cuando el archivo de Excel tenga campos en blanco. Selecciona la opción `Espacio en blanco como borrado de contenido` si deseas eliminar recursos con campos en blanco.
4. **Actualizar recursos**: una vez que hayas seleccionado el archivo de Excel, haz clic en el botón `PROCESAR`. El plugin creará una tarea de procesamiento y los recursos se actualizarán una vez que la tarea haya finalizado.

Para el uso del plugin es importante que haya al menos una fila de procesamiento disponible, ya que de esto depende que se puedan ejecutar las tareas relacionadas con el procesamiento de archivos. Para crear una fila de procesamiento o validar que exista, revisa la documentación de [filas de procesamiento](../nodos).

Una vez finalizado el procesamiento, los recursos se actualizarán en ArchiHUB. Puedes verificar los recursos actualizados desde el módulo de catalogación.