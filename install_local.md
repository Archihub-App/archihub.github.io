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

El sistema ArchiHUB se compone de dos partes principales: un backend y un frontend. El backend, siendo una API, permite que el frontend sea un componente intercambiable. Actualmente, hay una versión del frontend que ejecuta todas las tareas relacionadas con el procesamiento y la gestión del archivo. No obstante, esta configuración no restringe el uso del sistema, ya que se puede desarrollar una interfaz adaptada a las necesidades específicas de cada usuario, dependiendo de sus requerimientos. A continuación detallaremos los pasos a seguir para la instalación usando _docker compose_. El primer paso es clonar el [repositorio](https://github.com/Archihub-App/getting-started) con los scripts de instalación:

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

### Organización de las carpetas

 ```
├── local-machine
│   ├── archihub
│   │   ├── frontend
│   │   ├── backend
│   │   ├── mongo_db
│   ├── webfiles
│   ├── userfiles
│   ├── temporal
│   ├── original
│   ├── data
│   │   ├── mongodb
│   │   ├── elastic
 ```

 La raiz de la carpeta está compuesta por las siguientes carpetas, si no existen se deben crear:
 - __archihub__: en esta carpeta encontramos el código del _frontend_, el _backend_ debemos descargarlo o clonarlo del repositorio y en _mongo_db_ se encuentra la configuración inicial del aplicativo para cargar a una instalación fresca de la base de datos.
 - __webfiles__: ArchiHUB soporta una amplia variedad de documentos que puedes cargar sin preocuparte por el formato. Para facilitar la visualización y estandarizar los formatos, nuestra herramienta se encarga de generar versiones web de los documentos. Esto te permite acceder y ver tus archivos de manera consistente y sin complicaciones, independientemente del formato original.
 - __userfiles__: en esta carpeta se guardan los archivos generados por los usuarios, pueden ser reportes de procesamiento masivo o inventarios que se solicitan desde el módulo de catalogación.
 - __temporal__: para algunos casos de procesamiento es necesario manipular archivos temporal, esta carpeta se usa para eso.
 - __original__: acá se almacenan los archivos originales de los documentos. Se guardan en una estructura temporal de carpetas y la ruta del original es la misma que la de las versiones web.
 - __data__: estos son los datos persistentes tanto de la base de datos como del índice. Esta carpeta es para uso exclusivo del sistema y no debe ser modificada.

### Descargar el backend del aplicativo

Como mencionamos anteriormente, es necesario descargar el código del backend desde el [repositorio](https://github.com/Archihub-App/archihub-backend) del proyecto. Puedes hacerlo de dos maneras:

- __Clonando el repositorio__: Utiliza el comando `git clone` para clonar el repositorio.
- __Descargando el zip__: Haz clic aquí para descargar el archivo zip con el contenido del backend.

Esto te permitirá obtener todo el código necesario para configurar y ejecutar el backend de ArchiHUB.

```
git clone https://github.com/Archihub-App/archihub-backend.git
```

![descarga desde github](imagenes/descarga_git.gif)

Cuando ya tengamos las variables de entorno configuradas y las carpetas listas, estamos preparados para iniciar el aplicativo usando Docker. Para esto es necesario abrir un terminal y dirigirse a la carpeta en donde se encuentra la herramienta Archivo. Para hacer esto, se debe escribir `cd ` _(!! no olvidar el espacio al final)_ en la terminal y arrastrar la carpeta __archihub__ a la terminal.

![vista abrir carpeta en la terminal](imagenes/terminal.gif)

Pulsar “Enter” y luego copiar y pegar el comando `docker compose up -d` y “Enter” para aceptar. Se iniciará el despliegue de los servicios. Para verificar el estado de los servicios, se puede abrir la aplicación Docker y dirigirse a la pestaña "Containers". Allí debería aparecer __archihub__ como activo.

Usualmente la instalación puede tomar unos minutos. Cuando esté listo puede ir al siguiente enlace usando su navegador: http://localhost/

El usuario por defecto de esta instalación es: __beta__
La contraseña: __beta__

Una vez estés listo podemos seguir con los [primeros pasos](pasos.md) en ArchiHUB.