# Cargas masivas usando el script de carga y la API de administración

ArchiHUB tiene como objetivo ser lo más flexible posible tanto para la administración y organización del archivo como para su gestión. Para facilitar la carga de documentos y mantener la lógica y jerarquía que han trabajado los equipos, ArchiHUB ofrece un script simple pero muy útil para cargar carpetas.

Este script es especialmente útil en entornos donde los documentos se organizan en unidades de red basadas en una jerarquía de carpetas. En lugar de subir los documentos manualmente uno por uno, puedes usar este script para cargar toda la estructura de carpetas de una vez. El script utiliza la API de administración de ArchiHUB para realizar esta tarea de manera eficiente.

Con esta herramienta, puedes mantener la estructura de tus archivos y facilitar la migración de grandes volúmenes de documentos a ArchiHUB, asegurando que se respete la organización y jerarquía existentes.

Para esta guía, realizaremos dos ejemplos con dos estructuras de información distintas. Así que, prepara tus archivos, pon en marcha el aplicativo y ¡vamos a ello!

## Llave para la API de administración

Para ejecutar este y otros scripts que administren el aplicativo, necesitas tener una llave de administración. Esta llave es esencial para interactuar con la API de administración de ArchiHUB. Conoce más sobre como generarla [acá](llaves.md).

## Descarga de los scripts

Si ya seguiste la [guía de instalación en un máquina local](install_local.md), ya descargaste el [repositorio](https://github.com/Archihub-App/getting-started) que necesitamos. Si no, puedes clonar el repositorio o descargarlo [acá](https://github.com/Archihub-App/getting-started/archive/refs/heads/main.zip).

```
git clone https://github.com/Archihub-App/getting-started.git
```

En la raíz de la carpeta verás una carpeta llamada `scripts`, el script en específico que nos interesa es el que se llama `folder_load.py`, pero antes de usarlo necesitamos ajustar algunas cosas.

## Configuración del script