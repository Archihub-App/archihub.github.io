---
title: 'Las filas de procesos y los nodos de procesamiento'
description: ''
---

Como ya habrás notado, ArchiHub maneja ciertas tareas en lo que nosotros llamamos filas de procesamiento. Cada usuario tiene sus procesamientos y a su vez el sistema también puede agregar procesamientos automaticos.

Esto es muy útil no solo para balancear la carga entre varias máquinas sino también para definir filas de procesos.

## Las filas de procesos

Inicialmente, todas las tareas que se agregan a la fila de procesos en ArchiHub tienen la misma carga de procesamiento. No obstante, ArchiHub permite la implementación de procesamientos de mayor complejidad que podrían requerir una configuración diferente, como por ejemplo una máquina con acceso a una GPU para procesamientos más intensivos.

En estos casos, es posible desplegar un nodo de procesamiento en esa máquina, dedicado exclusivamente a las tareas de mayor intensidad. Un ejemplo de esto es el plugin para la [transcripción automática](https://github.com/Archihub-App/transcribeWhisperX), que utiliza el modelo Whisper de OpenAI.

Este procesamiento se ejecuta solamente en las máquinas que estén corriendo un nodo de procesamiento para la fila `high`. Si en el momento en que ejecutas la tarea no existe un nodo encargado de estas tareas, la tarea quedará pausada hasta que haya uno en línea que le permita continuar.

### Iniciando un nodo de procesamiento

Los nodos de procesamiento en ArchiHub se configuran de manera similar al backend del aplicativo y deben tener acceso a las mismas carpetas, variables de entorno y servicios. Para que funcionen correctamente, es necesario asegurarse de que todas las variables de entorno definidas para el backend también estén presentes en los nodos de procesamiento. Además, se debe definir una variable de entorno adicional llamada `CELERY_WORKER` y asignarle cualquier valor. Esta variable permite identificar estas instancias como `workers` de Celery y evita la duplicación de tareas automáticas.

El comando en la terminal para iniciar un nodo de procesamiento es:

```
celery --app app.celery_app worker --loglevel INFO
```

Esto iniciará un nodo de procesamiento para todas las tareas que no tengan especificada una fila de tareas en específico. Esto incluye todas las tareas del sistema, como la generación de inventarios o la indexación. Puedes tener varios nodos corriendo en la misma máquina o configurar el número de tareas en paralelo que cada uno es capaz de ejecutar. Por defecto, cada nodo corre una  sola tarea a la vez, pero esto puede configurarse en función de la capacidad de la máquina.

Si quieres iniciar un nodo enfocado a las tareas de alta, media y baja intensidad, lo haces con:

```
celery --app app.celery_app worker -Q high,medium,low --loglevel INFO
```

#### Nodos de procesamiento para tareas que requieren GPU

Para tareas que requieren el uso de GPU como la transcripción automática, es necesario agregar dos parametros adicionales al comando de inicio del nodo de procesamiento:

```
CUDA_VISIBLE_DEVICES=0 celery --app app.celery_app worker -Q high,medium,low --loglevel INFO -P solo
```

Si prefieres usar las variables de entorno de la máquina, puedes definir la variable `CUDA_VISIBLE_DEVICES` en el archivo `.env` de la máquina y asignarle el valor `0`. Esto permitirá que el nodo de procesamiento utilice la GPU 0 de la máquina.

En caso de que la máquina tenga más de una GPU, puedes definir la variable `CUDA_VISIBLE_DEVICES` con los índices de las GPUs que quieres utilizar. Por ejemplo, si quieres utilizar las GPUs 0 y 1, debes definir la variable `CUDA_VISIBLE_DEVICES` con el valor `0,1`.

### Configurar el número de tareas que ejecta cada nodo

Cada nodo es capaz de ejecutar múltiples tareas de manera concurrente. Por defecto, ArchiHub configura el sistema para que cada nodo solo ejecute una tarea a la vez. Esta configuración puede cambiarse a través de las variables de entorno de cada nodo.

```
CELERYD_CONCURRENCY=1
```
Se recomienda realizar pruebas y validar la capacidad de la máquina para las tareas específicas que se quieren ejecutar. Por ejemplo, un nodo encargado de las tareas del sistema puede manejar entre 10 y 20 tareas simultáneamente, dependiendo de la máquina que se esté utilizando. Sin embargo, para nodos encargados de tareas con mayor intensidad se recomienda no ejecutar más de una tarea a la vez.