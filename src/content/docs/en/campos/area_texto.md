---
title: 'The Text Area Field'
description: ''
---

The Text Area field allows the entry of multi-line text, ideal for extensive content that requires formatting and line breaks.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Description"`, `"Observations"`.

**Field type**: Text area  
- **Description**: Allows entering text in several lines, ideal for long descriptions or comments.  
- **Example**: Field for the detailed description of a project.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g. metadata, database).  
- **Example**: `metadata.description`.

**Instructions**:  
- **Description**: Guide for the user on how to use the field.  
- **Example**: *"Enter a detailed description of the resource."*

**Character limit**:  
- **Description**: Maximum number of allowed characters.  
- **Example**: `2000 characters`.

**Editor**:  
- **Description**: Indicates if the field includes a basic toolbar for text formatting.  
- **Example**: *"Allows bold, italics, and lists."*

**Format**:  
- **Description**: Supports line breaks and paragraphs.  
- **Example**: *"You can write text in several paragraphs."*

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `No` (can be left empty).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g. depending on another field).  
- **Example**: *"Visible only if `Document type = Report`."*

**Access levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![areaDeTexto](/archihub.github.io/imagenes/areaDeTexto.png)

### Practical example
**Scenario**: Create a field for the detailed description of a project:

1. **Label**: "Detailed description"
2. **Type**: Text area
3. **Required**: Optional
4. **Limit**: 2000 characters

![areaDeTextoForm](/archihub.github.io/imagenes/campo-edit-area-de-texto.png) 