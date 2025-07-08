---
title: 'Author Field'
description: ''
---

The Author field is a specialized field for capturing information about the creators or contributors of a resource. It supports multiple authors and different types of contribution, allowing you to distinguish between individuals and organizations.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Author"`, `"Authors"`.

**Field type**: Author  
- **Description**: Allows entering information about individuals or organizations responsible for the resource.  
- **Example**: Field to record authors of a book, article, etc.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g. metadata, database).  
- **Example**: `metadata.authors`.

**Instructions**:  
- **Description**: Guide for the user on how to use the field.  
- **Example**: *"Add one or more authors, indicating whether it is a person or an organization."*

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `No` (can be left empty).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g. depending on another field).  
- **Example**: *"Visible only if `Resource type = Publication`."*

**Access levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![Author field](/archihub.github.io/imagenes/campoAuthor.png)

![Author form](/archihub.github.io/imagenes/autor-form.png)

### Practical example
**Scenario**: Register a book with two authors and a collaborating organization:

1. **First author**:
   - Type: Person
   - First name: María
   - Last name: González

2. **Second author**:
   - Type: Person
   - First name: Juan
   - Last name: Pérez

3. **Organization**:
   - Type: Organization
   - Name: Centro de Investigaciones Científicas
   - Acronym: CIC

### Display in metadata
Authors appear listed in the resource's metadata section, grouped by type and showing all the provided information:

![Author in metadata](/archihub.github.io/imagenes/autor-metadatos.png) 