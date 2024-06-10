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

En nuestro archivo `.env` que configuramos al inicio de la guía vamos a modificar las rutas.

## Habilitar ElasticSearch para la Búsqueda

## Configuración de Nodos de Procesamiento