# Configuración avanzada de la instalación local

Una vez que tenemos el aplicativo instalado y funcionando en nuestra máquina, podemos empezar a configurar nuestra instalación para adaptarla a nuestras necesidades específicas. Aquí te mostramos cómo realizar algunas configuraciones importantes:

## Cambiar la Ruta de los Archivos y la Base de Datos

Por defecto, como ya lo vimos nuestra instalación local tiene configurada la estructura de la siguiente forma:

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
En ArchiHUB, las carpetas __webfiles__, __userfiles__, __temporal__, __original__, y __data__ son esenciales para el funcionamiento del sistema ya que contienen todos los documentos y datos generados por la aplicación. Sin embargo, es posible configurar estas carpetas para que se ubiquen en rutas diferentes, ya sea en una unidad de disco externo o en una unidad de red, permitiendo una mayor flexibilidad en la organización de tus archivos. Veamos como hacerlo.

En nuestro archivo `.env` que configuramos al inicio de la guía vamos a modificar las rutas. Estas se encuentran configuradas en las variables de entorno:

```
USERFILES_PATH='../userfiles'
WEBFILE_PATH='../webfiles'
UPLOAD_PATH='../original'
TEMPORAL_PATH='../temporal'
DATA_PATH='../data'
```

Desde aquí, puedes cambiar las rutas de las carpetas esenciales. En el ejemplo, las rutas son relativas, pero puedes usar rutas absolutas que lleven directamente a tu contenido. Es importante recordar que para el correcto funcionamiento del aplicativo, estas carpetas no deben estar cambiando ni su contenido de manera frecuente.

Puedes Añadir o modificar las siguientes variables en el archivo `.env` para apuntar a las nuevas rutas deseadas, en este caso queremos asignar una ruta que se encuentra en un disco externo:

```
WEBFILES_PATH=/mnt/disco_externo/webfiles
USERFILES_PATH=/mnt/disco_externo/userfiles
TEMPORAL_PATH=/mnt/disco_externo/temporal
ORIGINAL_PATH=/mnt/disco_externo/original
DATA_PATH=/mnt/disco_externo/data
```

### Consideraciones Importantes

- __Consistencia de las Rutas__: Asegúrate de que las rutas especificadas estén siempre disponibles y accesibles por el sistema donde se ejecuta ArchiHUB.
- __Permisos de Acceso__: Verifica que ArchiHUB tenga los permisos necesarios para leer y escribir en las nuevas rutas.
- __Evitar Cambios Frecuentes__: Cambiar las rutas y el contenido de estas carpetas de manera frecuente puede causar errores en el funcionamiento del aplicativo. Asegúrate de definir estas rutas de manera definitiva durante la configuración inicial.
- __Reinicio del Aplicativo__: Después de realizar estos cambios, es necesario reiniciar ArchiHUB para que los nuevos ajustes tengan efecto. Puedes ejecutar `docker compose up --build -d` desde la carpeta raíz.

## Habilitar ElasticSearch para la Búsqueda

## Configuración de Nodos de Procesamiento