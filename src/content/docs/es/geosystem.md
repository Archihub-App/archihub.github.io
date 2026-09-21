---
title: 'Sistema geográfico'
description: ''
---

ArchiHUB permite la sistematización de diferentes polígonos geográficos para la catalogación y visualización de la información. El sistema ha sido diseñado con la flexibilidad necesaria para soportar diversos lugares geográficos y niveles administrativos. A continuación, veremos cómo se pueden agregar esos polígonos al sistema y cómo funcionan.

## Carga de polígonos

El primer paso para organizar la información geolocalizada en ArchiHUB es darle al sistema conocimiento sobre los distintos niveles y zonas geográficas mediante la carga de polígonos geográficos. La implementación del sistema utiliza archivos GEOJSON, que deben ser ubicados en la carpeta `archihub/data/geo/` del backend de la aplicación (en una instalación local, `local-machine/archihub/backend/archihub/data/geo/`).

Dentro de esta carpeta, los archivos GEOJSON deben organizarse según el nivel administrativo que representan. Por ejemplo, el primer nivel administrativo (nivel 0) corresponde al nivel de país. Por lo tanto, en la carpeta `archihub/data/geo/admin_0`, se debe ubicar el archivo GEOJSON que contenga todos los países o aquellos que se quieran implementar. Dado que este es el primer nivel administrativo, es útil configurarlo cargando los países completos.

El segundo nivel administrativo se carga de manera similar. En la carpeta `archihub/data/geo/admin_1`, se debe ubicar el siguiente nivel administrativo, que, en el caso de Colombia, sería un archivo GEOJSON con los departamentos. El tercer nivel, ubicado en la ruta `archihub/data/geo/admin_2`, correspondería a los municipios.

Una vez que los archivos se han ubicado en las carpetas correctas de acuerdo con el nivel administrativo que representan, reconstruye las imágenes con `docker compose up -d --build` para que los archivos queden disponibles dentro de los contenedores. Luego se puede iniciar la carga desde la configuración del sistema.

![carga poligonos](/archihub.github.io/imagenes/carga_poly.png)

Durante la carga de los archivos GEOJSON, ArchiHUB itera entre ellos, asociando cada polígono del nivel administrativo al polígono del nivel superior que lo contiene. Por ejemplo, al cargar el nivel 1, que corresponde a los departamentos, el sistema automáticamente valida en qué polígono del nivel administrativo 0 (país) se encuentra y lo asocia en la base de datos.

De esta manera, los países y niveles administrativos quedan configurados y relacionados en la base de datos, lo que permite realizar cruces geográficos en las búsquedas.