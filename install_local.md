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
- [Instalación en Linux](https://docs.docker.com/engine/install/)

## Descargar ArchiHUB

El sistema ArchiHUB se compone de dos partes principales: un backend y un frontend. El backend, siendo una API, permite que el frontend sea un componente intercambiable. Actualmente, hay una versión del frontend que ejecuta todas las tareas relacionadas con el procesamiento y la gestión del archivo. No obstante, esta configuración no restringe el uso del sistema, ya que se puede desarrollar una interfaz adaptada a las necesidades específicas de cada usuario, dependiendo de sus requerimientos. A continuación detallaremos los pasos a seguir para la instalación usando _docker compose_. El primer paso es clonar el repositorio con los scripts de instalación:

```
git clone https://github.com/Archihub-App/getting-started
```

En este repositorio encontramos centralizados las distintas formas en las que podemos iniciar nuestra instalación de ArchiHUB. Para nuestro caso específico, necesitaremos el contenido de la carpeta _local-machine_. Antes de comenzar el proceso de instalación, es crucial que actualices las llaves de ingreso y ajustes algunas configuraciones de seguridad. Esto asegurará que tu instalación sea segura y que todo funcione sin problemas desde el principio.

### Configuración del entorno

Para comenzar, debes ir a la carpeta /local-machine/archihub y editar el archivo .env. Puedes utilizar el editor de texto de tu preferencia para realizar esta tarea. Asegúrate de ajustar las siguientes configuraciones en este archivo para que todo funcione correctamente:

- __Línea 7__: _MONGO_INITDB_ROOT_PASSWORD_ es la variable de entorno que le asigna una contraseña a la base de datos. [Enlace para generar aleatoriamente una contraseña](https://www.random.org/strings/?num=10&len=30&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new).
- __Línea 11__: _ELASTIC_PASSWORD_ es la variable de entorno que le asigna una constraseña al índice de elasticsearch. [Enlace para generar aleatoriamente una contraseña](https://www.random.org/strings/?num=10&len=30&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new).
- __Línea 29 y 30__: _SECRET_KEY_ y _JWT_SECRET_KEY_ son para las llaves de ingreso al aplicativo. [Enlace para generar aleatoriamente una contraseña](https://www.random.org/strings/?num=10&len=30&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new).
- __Línea 31__: _FERNET_KEY_ es la llave que se usa para encriptar nuestras llaves de acceso a la API. [Enlace para generar llave fernet](https://fernetkeygen.com/).