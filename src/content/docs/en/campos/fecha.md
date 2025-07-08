---
title: 'The Date Field'
description: ''
---

The Date field allows for structured date selection through a visual picker, ensuring consistency in format.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Publication date"`, `"Date of birth"`.

**Field type**: Date/Time  
- **Description**: Allows selecting a date, a date and time, or a date range.  
- **Example**: Field for publication date, event date, etc.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g. metadata, database).  
- **Example**: `metadata.publication_date`.

**Instructions**:  
- **Description**: Guide for the user on how to use the field.  
- **Example**: *"Select the date in the format DD/MM/YYYY."*

**Supported formats**:  
- **Description**: Allowed types of date format.  
- **Example**: `Date (DD/MM/YYYY)`, `Date and time`, `Date range`.

**Validations**:  
- **Description**: Rules to restrict valid dates.  
- **Example**: *"Only dates after today."*, *"Weekends are not allowed."*

**Minimum/maximum dates**:  
- **Description**: Lower and upper limits for date selection.  
- **Example**: `01/01/2000` (minimum), `12/31/2030` (maximum).

**Allowed days of the week**:  
- **Description**: Restricts selection to certain days.  
- **Example**: *"Only business days (Monday to Friday)."*

**Custom validation**:  
- **Description**: Allows additional rules as needed.  
- **Example**: *"The start date must be before the end date."*

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `Yes` (the field must be completed).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g. depending on another field).  
- **Example**: *"Visible only if `Document type = Report`."*

**Access levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![campoFecha](/archihub.github.io/imagenes/campoFecha.png)

### Practical example
**Scenario**: Configure a field for the publication date:

1. **Label**: "Publication date"
2. **Type**: Date
3. **Format**: DD/MM/YYYY
4. **Allowed range**: Current date onwards

![campoFechaForm](/archihub.github.io/imagenes/campo-edit-fecha.png) 