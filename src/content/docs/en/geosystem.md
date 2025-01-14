---
title: 'Geographic system'
description: ''
---

ArchiHUB allows the systematization of different geographic polygons for the cataloguing and visualization of information. The system has been designed with the flexibility to support various geographic locations and administrative levels. Next, we will see how these polygons can be added to the system and how they work.

## Loading polygons

The first step in organizing geolocated information in ArchiHUB is to give the system knowledge about different geographic levels and areas by loading geographic polygons. The system implementation uses GEOJSON files, which must be placed in the app/utils/geo/ folder of the application backend.

Within this folder, GEOJSON files should be organized according to the administrative level they represent. For example, the first administrative level (level 0) corresponds to the country level. Therefore, in the folder app/utils/geo/admin_0, the GEOJSON file containing all the countries or those that you want to implement must be located. Since this is the first administrative level, it is useful to configure it by loading the complete countries.

The second administrative level is loaded in a similar way. In the app/utils/geo/admin_1 folder, the next administrative level must be located, which, in the case of Colombia, would be a GEOJSON file with the departments. The third level, located in the app/utils/geo/admin_2 path, would correspond to the municipalities.

Once the files have been placed in the correct folders according to the administrative level they represent, you can start loading them from the system configuration.

![Loading polygons](/archihub.github.io/imagenes/carga_poly.png)

During the loading of GEOJSON files, ArchiHUB iterates between them, associating each polygon of the administrative level to the polygon of the higher level that contains it. For example, when loading level 1, which corresponds to departments, the system automatically validates in which polygon of administrative level 0 (country) it is located and associates it in the database.

In this way, countries and administrative levels are configured and related in the database, allowing geographical cross-referencing in searches.