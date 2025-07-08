---
title: 'The Multiple Selection List Field'
description: ''
---

The Multiple Selection List field allows you to choose several options from a predefined list, ideal for metadata that can have multiple values.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"States"`, `"Keywords"`.

**Field type**: Multiple selection  
- **Description**: Allows selecting several options from a predefined list.  
- **Example**: Field to select multiple states, topics, tags, etc.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g. metadata, database).  
- **Example**: `metadata.firstLevel.multiplelist`.

**Instructions**:  
- **Description**: Guide for the user on how to use the field.  
- **Example**: *"Select one or more options from the list."*

**List**:  
- **Description**: Predefined list of available options.  
- **Example**: `List of states`.

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `Yes` (at least one option must be selected).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g. depending on another field).  
- **Example**: *"Visible only if `Country = Mexico`."*

**Access levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![multipleSelectionList](/archihub.github.io/imagenes/listaDeSeleccionMultiple.png)

### Practical example
**Scenario**: Configure a field for the keywords of a document:

1. **Label**: "Keywords"
2. **Type**: Multiple selection
3. **List**: List of controlled terms 