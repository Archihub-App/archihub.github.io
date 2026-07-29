---
title: 'The Author Field'
description: 'Documentation about the author field in ArchiHUB'
---

The Author field (internally `author`) is a specialized field designed to formally relate the current resource to system users who have authorship attribution.

### Field Structure

**Name**:  
- **Description**: Label to identify the field.  
- **Example**: `"Main authors"`, `"Responsible researchers"`.

**Destination**:  
- **Description**: The location in the data model where the authors' IDs or data will be referenced.

**Instructions**:  
- **Description**: Contextual help message.

**Required**:  
- **Description**: Prevents saving if at least one author is not assigned.

**Condition** and **Access levels**:  
- **Description**: Control the field's visibility and permissions.

![Author field configuration](/archihub.github.io/imagenes/campos/author.png)

---

### Behavior in the interface

- It uses a component that lets you search and autocomplete names of users registered in the system.
- It is designed as an array (FormArrayAuthor), meaning the user can add multiple authors iteratively by clicking "+ Add".
- It provides internal validation to ensure the reference to the system user is valid and is correctly persisted in the structural relations.

![Author field in the form](/archihub.github.io/imagenes/campos/author_form.png)

### Display in metadata

Authors appear listed in the resource's metadata section, grouped by type and showing all the provided information:

![Author in metadata](/archihub.github.io/imagenes/autor-metadatos.png)
