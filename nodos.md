# Las filas de procesos y los nodos de procesamiento

Como ya habrás notado, ArchiHUB maneja ciertas tareas en lo que nosotros llamamos filas de procesamiento. Cada usuario tiene sus procesamientos y a su vez el sistema también puede agregar procesamientos automaticos.

Esto es muy útil no solo para balancear la carga entre varias máquinas sino también para definir filas de procesos.

## Las filas de procesos

Inicialmente todas las tareas que tenemos que agregar a la fila de procesos tienen la misma carga de procesamiento. Sin embargo, ArchiHUB permite implementar procesamientos de mayor complejidad que quizas requieran una configuración distinta como por ejemplo una maquina con acceso a una GPU para procesamientos más intensos.

En estos casos es posible desplegar un nodo de procesamiento en esa máquina dedicado a los procesamientos de mayor intensidad exclusivamente. Veamos por ejemplo el plugin para la transcripción automática que actualmente usa el modelo Whisper de OpenAI.