---
title: 'The Number Field'
description: ''
---

The Number field is specifically designed to capture numeric values with automatic validation.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Year of publication"`, `"Number of pages"`.

**Field type**: Numeric  
- **Description**: Allows entering numeric values, either integers or decimals.  
- **Example**: Field for year, quantity, price, etc.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g. metadata, database).  
- **Example**: `metadata.publication_year`.

**Instructions**:  
- **Description**: Guide for the user on how to use the field.  
- **Example**: *"Enter the year in numeric format (example: 2023)."*

**Minimum/maximum value**:  
- **Description**: Defines the lower and upper limits allowed for the value.  
- **Example**: `1900` (minimum), `2025` (maximum).

**Allowed increments**:  
- **Description**: Defines the step or increment between valid values.  
- **Example**: `1` for integers, `0.01` for decimals.

**Display format**:  
- **Description**: Allows defining how the number is displayed (separators, decimals, etc.).  
- **Example**: *"Show with thousands separator."*

**Add at the end**:  
- **Description**: Text to be shown at the end of the field (optional).  
- **Example**: *"Years", "kg", "USD"*

**Add at the beginning**:  
- **Description**: Text to be shown at the beginning of the field (optional).  
- **Example**: *"$", "No."*

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `Yes` (the field must be completed).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g. depending on another field).  
- **Example**: *"Visible only if `Document type = Report`."*

**Access levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![campoNumerico](/archihub.github.io/imagenes/campoNumerico.png)

### Practical example
**Scenario**: Configure a field for the year of publication:

1. **Label**: "Year of publication"
2. **Type**: Number
3. **Range**: 1900-2025
4. **Format**: Integer number

![campoNumericoForm](/archihub.github.io/imagenes/campo-edit-numero.png) 