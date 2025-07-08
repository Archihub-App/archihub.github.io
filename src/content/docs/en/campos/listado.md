---
title: 'The List Field'
description: ''
---

The List field allows you to select an option from a predefined set, ensuring data consistency.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Department"`, `"Document type"`.

**Field type**: Single selection  
- **Description**: Allows selecting a single option from a predefined list.  
- **Example**: Field to select a department, type, category, etc.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g. metadata, database).  
- **Example**: `metadata.department`.

**Instructions**:  
- **Description**: Guide for the user on how to use the field.  
- **Example**: *"Select an option from the dropdown list."*

**Data source**:  
- **Description**: Predefined list of available options.  
- **Example**: `List of departments of Colombia`.

**Presentation**:  
- **Description**: How the list is displayed to the user.  
- **Example**: *"Dropdown menu"*.

**Search**:  
- **Description**: Allows searching among the available options.  
- **Example**: *"The user can type to filter the options."*

**Add at the end**:  
- **Description**: Text to be shown at the end of the field (optional).  
- **Example**: *"Select only one"*.

**Add at the beginning**:  
- **Description**: Text to be shown at the beginning of the field (optional).  
- **Example**: *"Option: "*.

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `Yes` (an option must be selected).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g. depending on another field).  
- **Example**: *"Visible only if `Country = Colombia`."*

**Access levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![listados](/archihub.github.io/imagenes/listados.png)

### Practical example
**Scenario**: Create a field for the document type:

1. **Label**: "Document type"
2. **Type**: List
3. **Options**: Article, Book, Thesis, Report
4. **Required**: Yes 