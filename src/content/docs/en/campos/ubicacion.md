---
title: 'The Location Field'
description: 'Documentation about the geographic location field in ArchiHUB'
---

The Location field (internally `location`) provides a native tool for capturing geospatial coordinates and location data on resources.

### Field Structure

This field interacts with integrated map services:

**Name**:  
- **Description**: The field's visual label.  
- **Example**: `"Place of origin"`, `"Coordinates of the find"`.

**Destination**:  
- **Description**: The key in the metadata where the geospatial object will be stored (latitude and longitude, and optionally the location text).  
- **Example**: `metadata.firstLevel.find_location`.

**Instructions**:  
- **Description**: On-screen help to guide the user.

**Required**:  
- **Description**: Requires the user to set a location before being able to save the record.

**Condition** and **Access levels**:  
- **Description**: Handle conditional logic and security restrictions at the visual level.

![Location field configuration](/archihub.github.io/imagenes/campos/location.png)

---

### Behavior in the interface

- In the interface, it is usually presented as a geographic search (often connected to geolocation services) or a visual map component.
- The user can type the name of a place or interact with the map (dropping a pin) to set the exact coordinates.
- Storage in the database is done in a structured format suited for subsequent geospatial searches (GeoJSON or similar).

![Location field in the form](/archihub.github.io/imagenes/campos/location_form.png)

### Usage examples

Locations are displayed with their complete information and on an interactive map when coordinates are available. The user can add a new location from the form itself, and a single field can end up holding several locations associated with the resource:

![Add location](/archihub.github.io/imagenes/agregar_ubicacion.png)

![Example of multiple locations](/archihub.github.io/imagenes/ejemplo-ubicaciones.png)
