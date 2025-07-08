---
title: 'Location Field'
description: ''
---

The Location field allows georeferencing resources by associating them with physical places or administrative divisions, supporting multiple locations with different levels of precision.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Location"`, `"Place of origin"`.

**Field type**: Location  
- **Description**: Allows associating the resource with one or more physical places or administrative divisions.  
- **Example**: Field to record the location of an event, document, object, etc.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g. metadata, database).  
- **Example**: `metadata.location`.

**Instructions**:  
- **Description**: Guide for the user on how to use the field.  
- **Example**: *"Select or search for the corresponding location."*

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `No` (can be left empty).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g. depending on another field).  
- **Example**: *"Visible only if `Resource type = Event`."*

**Access levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![location](/archihub.github.io/imagenes/ubicacion.png)

### Practical example
**Scenario**: Document the relevant locations for a research project:

1. **Main location**:
   - Name: Universidad del Valle
   - City: Cali
   - Department: Valle del Cauca
   - Country: Colombia

2. **Study area**:
   - Name: Farallones National Natural Park
   - Coordinates: 3.3547° N, 76.7890° W

### Visualization
Locations are displayed with their complete information and on an interactive map when coordinates are available.

![Location field interface](/archihub.github.io/imagenes/ubicacion.png)

![Add location](/archihub.github.io/imagenes/agregar_ubicacion.png)

![Location](/archihub.github.io/imagenes/ejemplo-ubicaciones.png) 