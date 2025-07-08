---
title: 'The Text Field'
description: ''
---

The text field allows the entry of text in a single line, being one of the most versatile field types in the system.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Title"`, `"Author's name"`.

**Field type**: Single-line text  
- **Description**: Allows entering text in a single line.  
- **Example**: Field for the title of a document.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g. metadata, database).  
- **Example**: `metadata.title`.

**Instructions**:  
- **Description**: Guide for the user on how to use the field.  
- **Example**: *"Enter the full title of the document."*

**Maximum length**:  
- **Description**: Maximum number of allowed characters.  
- **Example**: `255 characters`.

**Validations**:  
- **Description**: Optional rules for text format (email, URL, etc.).  
- **Example**: *"Must be a valid email address."*

**Add at the end**:  
- **Description**: Text to be shown at the end of the field (optional).  
- **Example**: *"Example: Final report 2023"*

**Add at the beginning**:  
- **Description**: Text to be shown at the beginning of the field (optional).  
- **Example**: *"Title: "*

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `Yes` (the field must be completed).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g. depending on another field).  
- **Example**: *"Visible only if `Document type = Report`."*

**Access levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![textField](/archihub.github.io/imagenes/campoTexto.png)

### Practical example
**Scenario**: Create a field for the title of a document:

1. **Label**: "Document title"
2. **Type**: Text
3. **Required**: Yes
4. **Maximum length**: 255 characters

![textFieldForm](/archihub.github.io/imagenes/campo-edit-texto.png) 