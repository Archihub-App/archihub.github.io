---
title: 'Fields for metadata standards'
description: ''
---

In this part of the documentation, we will detail each of the fields that can be configured in the form:

- [True / False](#the-true--false-field)
- [Text](#the-text-field)
- [Text Area](#the-text-area-field)
- [Number](#the-number-field)
- [Date](#the-date-field)
- [List](#the-list-field)
- [Multiple Selection List](#the-multiple-selection-list-field)
- [Author](#the-author-field)
- [Relation](#the-relation-field)
- [Location](#the-location-field)
- [Multiple Field](#the-multiple-field)
- [File](#the-file-field)
- [Separator](#the-separator-field)

## The True / False Field

The True/False field is a boolean field that only accepts two values: true or false. It is ideal for metadata that requires a binary response.

### Field Structure
- **Field Type**: Boolean (true/false)
- **Visual Representation**: Checkbox
- **Possible Values**: 
  - True (checkbox checked)
  - False (checkbox unchecked)

### Practical Example
**Scenario**: Configure a field to indicate if a document is published:

1. **Field**: "Published"
2. **Type**: True/False
3. **Usage**: Check when the document is ready to be publicly visible

![trueFalse](/archihub.github.io/imagenes/truefalse.png)

## The Text Field

The text field allows single-line text input, being one of the most versatile field types in the system.

### Field Structure
- **Field Type**: Single-line text
- **Maximum Length**: Configurable
- **Validations**: May include format validation (email, URL, etc.)

### Practical Example
**Scenario**: Create a field for a document title:

1. **Label**: "Document Title"
2. **Type**: Text
3. **Required**: Yes
4. **Maximum Length**: 255 characters

![campoTexto](/archihub.github.io/imagenes/campoTexto.png)

## The Text Area Field

The Text Area field allows multi-line text input, ideal for extensive content that requires formatting and line breaks.

### Field Structure
- **Field Type**: Multi-line text
- **Editor**: Includes basic toolbar
- **Format**: Supports line breaks and paragraphs
- **Character Limit**: Configurable

### Practical Example
**Scenario**: Create a field for a detailed project description:

1. **Label**: "Detailed Description"
2. **Type**: Text Area
3. **Required**: Optional
4. **Limit**: 2000 characters

![areaDeTexto](/archihub.github.io/imagenes/areaDeTexto.png)

## The Number Field

The Number field is specifically designed to capture numeric values with automatic validation.

### Field Structure
- **Field Type**: Numeric
- **Supported Formats**: Integers and decimals
- **Validations**:
  - Minimum/maximum value
  - Allowed increments
  - Display format

### Practical Example
**Scenario**: Configure a field for the publication year:

1. **Label**: "Publication Year"
2. **Type**: Number
3. **Range**: 1900-2025
4. **Format**: Integer

![campoNumerico](/archihub.github.io/imagenes/campoNumerico.png)

## The Date Field

The Date field allows structured date selection through a visual picker, ensuring format consistency.

### Field Structure
- **Field Type**: Date/Time
- **Supported Formats**:
  - Date (DD/MM/YYYY)
  - Date and time
  - Date range
- **Validations**:
  - Minimum/maximum dates
  - Allowed weekdays
  - Custom validation

### Practical Example
**Scenario**: Configure a field for the publication date:

1. **Label**: "Publication Date"
2. **Type**: Date
3. **Format**: DD/MM/YYYY
4. **Allowed Range**: Current date onwards

![campoFecha](/archihub.github.io/imagenes/campoFecha.png)

## The List Field

The List field allows selecting one option from a predefined set, ensuring data consistency.

### Field Structure
- **Field Type**: Single selection
- **Data Source**: Predefined list
- **Presentation**: Dropdown menu
- **Search**: Includes predictive search

### Configuration
Lists are defined in the __LISTS__ section of the cataloging module, allowing:
- Create new lists
- Edit existing options
- Reuse lists in multiple fields

### Practical Example
**Scenario**: Create a field for document type:

1. **Label**: "Document Type"
2. **Type**: List
3. **Options**: Article, Book, Thesis, Report
4. **Required**: Yes

![menu](/archihub.github.io/imagenes/listados.png)

## The Multiple Selection List Field

The Multiple Selection List field allows choosing several options from a predefined list, ideal for metadata that can have multiple values.

### Field Structure
- **Field Type**: Multiple selection
- **Data Source**: Predefined list
- **Presentation**: Checkbox list
- **Selection Limit**: Configurable

### Features
- Search within options
- Display of selected options
- Custom sorting
- Minimum/maximum selection validation

### Practical Example
**Scenario**: Configure a field for document keywords:

1. **Label**: "Keywords"
2. **Type**: Multiple Selection
3. **Source**: Controlled vocabulary list
4. **Minimum Required**: 1
5. **Maximum Allowed**: 10

![listaDeSeleccionMultiple](/archihub.github.io/imagenes/listaDeSeleccionMultiple.png)

## The Author Field

The Author field is a specialized field for capturing information about the creators or contributors of a resource. It supports multiple authors and different types of contribution, allowing differentiation between individuals and organizations.

### Field Structure
Each author entry can contain:
- **Author Type**: Person or Organization (selector)
- **Basic Information**:
  - For individuals: First name, Last name
  - For organizations: Full name, Acronyms

![Author field](/archihub.github.io/imagenes/campoAuthor.png)

The following image shows the author form. The checkbox allows selecting between a person or an organization. For a person, it will show first name and last name fields; for an organization, it will show organization name and acronym fields.

## The Relation Field

The Relation field allows creating relationships between different content types. For example, you can have a content type called _Thesaurus_ and use it as a label in another content type using the relation field. This way, you can relate one or more fields from the _Thesaurus_ to the content.

It's important to note that when using a relation field of type _Thesaurus_ in the _Thesaurus_ form, the platform will automatically establish the relationship between them when saving. This means the relationship will be saved not only in the resource being edited but also in the related resources.

![Relation form](/archihub.github.io/imagenes/formulario_relacion.png)

## The Location Field

The Location field allows georeferencing resources by associating them with physical places or administrative jurisdictions. It supports multiple locations and different levels of precision.

### Field Structure
Each location can contain:
- **Place Name**: City, region, landmark
- **Administrative Division**: Department/State/Province
- **Country**: Selectable from dropdown list
- **Geographic Coordinates** (optional): Latitude and Longitude

![Location field interface](/archihub.github.io/imagenes/ubicacion.png)

### Adding a Location
1. Click on "Add location"
2. Fill in the main name (e.g., "Cali")
3. Select the corresponding locality

![Add location](/archihub.github.io/imagenes/agregar_ubicacion.png)

### Practical Example
**Scenario**: Registering a book with two relevant locations:

1. **Place of Publication**:
   - Name: Medellín

2. **Research Location**:
   - Name: Tayrona National Natural Park, Magdalena, 11.3114° N, 74.0775° W

### Metadata Display
Locations appear listed with their complete information:

![Location example](/archihub.github.io/imagenes/ejemplo-ubicaciones.png)

## The Multiple Field

The Multiple field allows creating groups of related fields that can be repeated as needed, ideal for capturing structured information in multiple instances.

### Field Structure
- **Field Type**: Repeatable group
- **Subfields**: Individually configurable

### Practical Example
**Scenario**: Capture multiple phone numbers with their types:

1. **Field Group**: "Phone Numbers"
2. **Subfields**:
   - Type (Mobile, Home, Work)
   - Number
   - Extension (optional)
3. **Repeatable**: Yes, add multiple numbers

![módulo](/archihub.github.io/imagenes/multiple.png)

## The File Field

The File field allows uploading and associating files with a resource. It includes several configuration options to suit different needs.

### Field Structure
- **Field Type**: File upload
- **Supported Files**: Configurable file types
- **Multiple Files**: Option to allow multiple file uploads
- **Size Limit**: Configurable maximum file size

### Configuration
When configuring a File field, you can specify:
- **Tag**: Used to identify the field (required)
- **Allowed File Types**: Restrict to specific file extensions
- **Maximum File Size**: Set a size limit for uploads
- **Multiple Files**: Allow single or multiple file uploads

### How It Works
Unlike other metadata fields that store values in the metadata structure, the File field uses tags to associate files with resources. This allows for multiple file fields, each identified by a unique tag.

![form files](/archihub.github.io/imagenes/formulario_archivo.png)

### Viewing Uploaded Files
Uploaded files are displayed with their associated tag, each with a distinct color. You can view these from either the resource detail view or the edit form after the resource has been saved.

![File tag](/archihub.github.io/imagenes/etiqueta_archivo.png)

![Label form](/archihub.github.io/imagenes/archivo_formulario.png)

## The Separator field

There are cases when the form must have several pages, and for that we use the __Separator__ field. This is a special field that only needs the __Name__ field. Once added to the form, it will be used to paginate the form when cataloging a new resource.

![Separator form](/archihub.github.io/imagenes/formulario_separador.png)
