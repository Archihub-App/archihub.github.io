# Instalar un plugin

Estamos listos para comenzar. Aprendamos a instalar un plugin en ArchiHUB para ampliar las capacidades de nuestra aplicación. Como ejemplo, usaremos el complemento para descargar videos de YouTube. Este es un ejemplo sencillo, ya que hay muchas más opciones para los complementos que veremos más adelante cuando exploremos las opciones más avanzadas del sistema. ¡Por ahora, vamos a descargar videos!

## Descarga del plugin

Los plugins de la aplicación se encuentran comúnmente en un repositorio separado. Los plugins que están instalados actualmente en tu archivo son los complementos predeterminados que acompañan al aplicativo y que cumplen con las funcionalidades básicas, como la creación de inventarios y las ediciones masivas.

![Plugins por defecto](/imagenes/plugins_defecto.png)

Descarga el nuevo complemento yendo al [repositorio](https://github.com/Archihub-App/videoDownloader) o haciendo click [acá](https://github.com/Archihub-App/videoDownloader/archive/refs/heads/main.zip) para descargar el archivo zip.

Cuando lo hayas descargado debes descomprimir el archivo y copiar la carpeta en `/gettin-started/local-machine/archihub/backend/app/plugins` de la siguiente forma:

![Carpetas de plugins](/imagenes/plugins_folders.png)

Una vez eso listo debemos reiniciar el backend con el comando:

```
docker compose up --build -d
```

Con ArchiHUB, no tienes que preocuparte por instalar nuevas dependencias o preparar el sistema para que el nuevo complemento se ejecute sin problemas. El contenedor detectará los cambios en la carpeta y reconstruirá el contenedor del backend para garantizar que el nuevo complemento esté listo para usar. Solo necesitas tener paciencia y dejar que ArchiHUB haga su trabajo automáticamente.

Una vez haya terminado vamos al submenu de __Plugins__ en la __Administración del sistema__.

![Activar plugins](/imagenes/plugin_activate.png)

Después de activar el complemento, es esencial reiniciar el backend. Este reinicio evitará la descarga de dependencias, lo que debería agilizar el proceso.

```
docker compose stop archihub_flask_backend
docker compose up --no-deps -d archihub_flask_backend
```

Ahora podemos volver a nuestro menu de procesamientos y debería salir nuestro nuevo plugin activo:

![Descarga videos](/imagenes/plugin_videos.png)

Eso es todo por ahora, puedes explorar la guía general de los plugins para saber más!