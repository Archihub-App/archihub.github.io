---
title: 'The True / False Field'
description: ''
---

The True/False field is a boolean field that only accepts two values: true or false. It is ideal for metadata that requires a binary response.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Approved"`, `"Active"`.

**Field type**: Boolean (true/false)  
- **Description**: Only accepts the values `True` or `False`.  
- **Example**: Radio options or checkbox in the interface.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g. metadata, database).  
- **Example**: `metadata.first_level.relationField`.

**Instructions**:  
- **Description**: Guide for the user on how to use the field.  
- **Example**: *"Select 'True' if the document is complete."*

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `Yes` (an option must be selected).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g. depending on another field).  
- **Example**: *"Visible only if `Status = Pending`."*

**Access levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).
  
![trueFalse](/archihub.github.io/imagenes/truefalse.png)

### Practical example
**Scenario**: Configure a field to indicate if a document is published:

1. **Field**: "Published"
2. **Type**: True/False
3. **Usage**: Mark when the document is ready to be publicly visible

![trueFalseForm](/archihub.github.io/imagenes/campo-edit-verdadero-falso.png)