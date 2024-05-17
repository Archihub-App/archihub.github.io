# Instalación en una máquina local

Es importante destacar que existen requerimientos mínimos de hardware para poder ejecutar el aplicativo en función de las herramientas que se deseen utilizar. A continuación, se presenta una tabla que describe las distintas funciones junto con sus requerimientos mínimos correspondientes.

| Descripción | Requerimientos |
| ----------- | ----------- |
| __Módulo de catalogación__: Esta funcionalidad permite catalogar y organizar nuevos recursos en base a un formulario descrito por el usuario. Los procesamientos deben estar límitados a uno al tiempo para evitar sobrecargar la máquina. | __8GB RAM__ |
| __Búsqueda avanzada__ con cruces de información relacionada al procesamiento de texto, OCR, transcripción y etiquetado automático. | __32GB RAM__ (_16GB RAM es posible pero es necesario usar modelos de menor tamaño y capacidad en el caso de la transcripción automática_)|

## Instalación de Docker en la máquina

Para instalar ArchiHUB en una máquina local, es necesario contar con el aplicativo Docker instalado en el sistema operativo (ya sea Mac o Windows). Docker es una herramienta que permite virtualizar los diferentes servicios necesarios para el correcto funcionamiento del archivo. A lo largo de esta guía, se mostrará cómo utilizar esta herramienta para poner en marcha el archivo, realizar copias de seguridad y actualizar la herramienta.

- [Instalación en MAC](https://docs.docker.com/desktop/install/mac-install/)
- [Instalación en Windows](https://docs.docker.com/desktop/install/windows-install/)

## Descargar ArchiHUB