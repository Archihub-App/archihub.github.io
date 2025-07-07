---
title: 'Fields for metadata standards'
description: ''
---

In this section of the documentation, we detail each of the fields that can be configured in the form:

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
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Approved"`, `"Active"`.

**Field Type**: Boolean (true/false)  
- **Description**: Only accepts the values `True` or `False`.  
- **Example**: Radio options or checkbox in the interface.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g., metadata, database).  
- **Example**: `metadata.first_level.relationField`.

**Instructions**:  
- **Description**: User guidance on how to use the field.  
- **Example**: *"Select 'True' if the document is complete."*

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `Yes` (an option must be selected).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g., depending on another field).  
- **Example**: *"Visible only if `Status = Pending`."*

**Access Levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![trueFalse](/archihub.github.io/imagenes/truefalse.png)

### Practical Example
**Scenario**: Configure a field to indicate if a document is published:

1. **Field**: "Published"
2. **Type**: True/False
3. **Usage**: Mark when the document is ready to be publicly visible

![trueFalseForm](/archihub.github.io/imagenes/campo-edit-verdadero-falso.png)

## The Text Field

The text field allows single-line text input, being one of the most versatile field types in the system.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Title"`, `"Author Name"`.

**Field Type**: Single-line text  
- **Description**: Allows entering text in a single line.  
- **Example**: Field for the document title.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g., metadata, database).  
- **Example**: `metadata.title`.

**Instructions**:  
- **Description**: User guidance on how to use the field.  
- **Example**: *"Enter the full document title."*

**Maximum Length**:  
- **Description**: Maximum number of allowed characters.  
- **Example**: `255 characters`.

**Validations**:  
- **Description**: Optional rules for text format (email, URL, etc.).  
- **Example**: *"Must be a valid email address."*

**Add at End**:  
- **Description**: Text to display at the end of the field (optional).  
- **Example**: *"Example: Final Report 2023"*

**Add at Start**:  
- **Description**: Text to display at the start of the field (optional).  
- **Example**: *"Title: "*

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `Yes` (the field must be completed).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g., depending on another field).  
- **Example**: *"Visible only if `Document Type = Report`."*

**Access Levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![campoTexto](/archihub.github.io/imagenes/campoTexto.png)

### Practical Example
**Scenario**: Create a field for a document title:

1. **Label**: "Document Title"
2. **Type**: Text
3. **Required**: Yes
4. **Maximum Length**: 255 characters

![campoTextoForm](/archihub.github.io/imagenes/campo-edit-texto.png)

## The Text Area Field

The Text Area field allows multi-line text input, ideal for extensive content that requires formatting and line breaks.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Description"`, `"Observations"`.

**Field Type**: Text area  
- **Description**: Allows entering text in multiple lines, ideal for long descriptions or comments.  
- **Example**: Field for detailed project description.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g., metadata, database).  
- **Example**: `metadata.description`.

**Instructions**:  
- **Description**: User guidance on how to use the field.  
- **Example**: *"Enter a detailed description of the resource."*

**Character Limit**:  
- **Description**: Maximum number of allowed characters.  
- **Example**: `2000 characters`.

**Editor**:  
- **Description**: Indicates if the field includes a basic toolbar for text formatting.  
- **Example**: *"Allows bold, italics, and lists."*

**Format**:  
- **Description**: Supports line breaks and paragraphs.  
- **Example**: *"You can write text in multiple paragraphs."*

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `No` (can be left empty).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g., depending on another field).  
- **Example**: *"Visible only if `Document Type = Report`."*

**Access Levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![areaDeTexto](/archihub.github.io/imagenes/areaDeTexto.png)

### Practical Example
**Scenario**: Create a field for a detailed project description:

1. **Label**: "Detailed Description"
2. **Type**: Text Area
3. **Required**: Optional
4. **Limit**: 2000 characters

![areaDeTextoForm](/archihub.github.io/imagenes/campo-edit-area-de-texto.png)

## The Number Field

The Number field is specifically designed to capture numeric values with automatic validation.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Publication Year"`, `"Number of pages"`.

**Field Type**: Numeric  
- **Description**: Allows entering numeric values, either integers or decimals.  
- **Example**: Field for year, quantity, price, etc.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g., metadata, database).  
- **Example**: `metadata.publication_year`.

**Instructions**:  
- **Description**: User guidance on how to use the field.  
- **Example**: *"Enter the year in numeric format (e.g., 2023)."*

**Minimum/Maximum Value**:  
- **Description**: Defines the lower and upper limits allowed for the value.  
- **Example**: `1900` (minimum), `2025` (maximum).

**Allowed Increments**:  
- **Description**: Defines the step or increment between valid values.  
- **Example**: `1` for integers, `0.01` for decimals.

**Display Format**:  
- **Description**: Allows defining how the number is displayed (separators, decimals, etc.).  
- **Example**: *"Show with thousands separator."*

**Add at End**:  
- **Description**: Text to display at the end of the field (optional).  
- **Example**: *"Years", "kg", "USD"*

**Add at Start**:  
- **Description**: Text to display at the start of the field (optional).  
- **Example**: *"$", "No."*

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `Yes` (the field must be completed).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g., depending on another field).  
- **Example**: *"Visible only if `Document Type = Report`."*

**Access Levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![campoNumerico](/archihub.github.io/imagenes/campoNumerico.png)

### Practical Example
**Scenario**: Configure a field for the publication year:

1. **Label**: "Publication Year"
2. **Type**: Number
3. **Range**: 1900-2025
4. **Format**: Integer

![campoNumericoForm](/archihub.github.io/imagenes/campo-edit-numero.png)

## The Date Field

The Date field allows structured date selection through a visual picker, ensuring format consistency.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Publication Date"`, `"Birth Date"`.

**Field Type**: Date/Time  
- **Description**: Allows selecting a date, a date and time, or a date range.  
- **Example**: Field for publication date, event date, etc.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g., metadata, database).  
- **Example**: `metadata.publication_date`.

**Instructions**:  
- **Description**: User guidance on how to use the field.  
- **Example**: *"Select the date in DD/MM/YYYY format."*

**Supported Formats**:  
- **Description**: Types of formats allowed for the date.  
- **Example**: `Date (DD/MM/YYYY)`, `Date and time`, `Date range`.

**Validations**:  
- **Description**: Rules to restrict valid dates.  
- **Example**: *"Only dates after today."*, *"Weekends not allowed."*

**Minimum/Maximum Dates**:  
- **Description**: Lower and upper limits for date selection.  
- **Example**: `01/01/2000` (minimum), `12/31/2030` (maximum).

**Allowed Weekdays**:  
- **Description**: Restricts selection to certain days.  
- **Example**: *"Only business days (Monday to Friday)."*

**Custom Validation**:  
- **Description**: Allows additional rules as needed.  
- **Example**: *"Start date must be before end date."*

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `Yes` (the field must be completed).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g., depending on another field).  
- **Example**: *"Visible only if `Document Type = Report`."*

**Access Levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![campoFecha](/archihub.github.io/imagenes/campoFecha.png)

### Practical Example
**Scenario**: Configure a field for the publication date:

1. **Label**: "Publication Date"
2. **Type**: Date
3. **Format**: DD/MM/YYYY
4. **Allowed Range**: Current date onwards

![campoFechaForm](/archihub.github.io/imagenes/campo-edit-fecha.png)

## The List Field

The List field allows selecting one option from a predefined set, ensuring data consistency.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Department"`, `"Document Type"`.

**Field Type**: Single selection  
- **Description**: Allows selecting a single option from a predefined list.  
- **Example**: Field to select a department, type, category, etc.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g., metadata, database).  
- **Example**: `metadata.department`.

**Instructions**:  
- **Description**: User guidance on how to use the field.  
- **Example**: *"Select an option from the dropdown list."*

**Data Source**:  
- **Description**: Predefined list of available options.  
- **Example**: `List of departments of Colombia`.

**Presentation**:  
- **Description**: How the list is displayed to the user.  
- **Example**: *"Dropdown menu"*.

**Search**:  
- **Description**: Allows searching among the available options.  
- **Example**: *"The user can type to filter options."*

**Add at End**:  
- **Description**: Text to display at the end of the field (optional).  
- **Example**: *"Select only one"*.

**Add at Start**:  
- **Description**: Text to display at the start of the field (optional).  
- **Example**: *"Option: "*.

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `Yes` (an option must be selected).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g., depending on another field).  
- **Example**: *"Visible only if `Country = Colombia`."*

**Access Levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![listados](/archihub.github.io/imagenes/listados.png)

### Practical Example
**Scenario**: Create a field for document type:

1. **Label**: "Document Type"
2. **Type**: List
3. **Options**: Article, Book, Thesis, Report
4. **Required**: Yes

## The Multiple Selection List Field

The Multiple Selection List field allows choosing several options from a predefined list, ideal for metadata that can have multiple values.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"States"`, `"Keywords"`.

**Field Type**: Multiple selection  
- **Description**: Allows selecting multiple options from a predefined list.  
- **Example**: Field to select several states, topics, tags, etc.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g., metadata, database).  
- **Example**: `metadata.firstLevel.multiplelist`.

**Instructions**:  
- **Description**: User guidance on how to use the field.  
- **Example**: *"Select one or more options from the list."*

**List**:  
- **Description**: Predefined list of available options.  
- **Example**: `List of states`.

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `Yes` (at least one option must be selected).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g., depending on another field).  
- **Example**: *"Visible only if `Country = Mexico`."*

**Access Levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![listaDeSeleccionMultiple](/archihub.github.io/imagenes/listaDeSeleccionMultiple.png)

### Practical Example
**Scenario**: Configure a field for document keywords:

1. **Label**: "Keywords"
2. **Type**: Multiple Selection
3. **List**: Controlled vocabulary list

## The Author Field

The Author field is a specialized field for capturing information about the creators or contributors of a resource. It supports multiple authors and different types of contribution, allowing differentiation between individuals and organizations.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Author"`, `"Authors"`.

**Field Type**: Author  
- **Description**: Allows entering information about people or organizations responsible for the resource.  
- **Example**: Field to register authors of a book, article, etc.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g., metadata, database).  
- **Example**: `metadata.authors`.

**Instructions**:  
- **Description**: User guidance on how to use the field.  
- **Example**: *"Add one or more authors, indicating if it is a person or organization."*

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `No` (can be left empty).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g., depending on another field).  
- **Example**: *"Visible only if `Resource Type = Publication`."*

**Access Levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![Author field](/archihub.github.io/imagenes/campoAuthor.png)

### Practical Example
**Scenario**: Register a book with two authors and a collaborating organization:

1. **First author**:
   - Type: Person
   - Name: María
   - Last name: González

2. **Second author**:
   - Type: Person
   - Name: Juan
   - Last name: Pérez

3. **Organization**:
   - Type: Organization
   - Name: Center for Scientific Research
   - Acronym: CIC

## The Relation Field

The Relation field allows establishing connections between different content types within the platform, facilitating the organization and retrieval of related information.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Relation field"`, `"Related document"`.

**Field Type**: Relation  
- **Description**: Allows selecting and linking one or more resources of another content type.  
- **Example**: Relate a document to a collection, thesaurus, etc.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g., metadata, database).  
- **Example**: `metadata.firstLevel.relationField`.

**Content Type**:  
- **Description**: Defines the type of resource or entity that can be related.  
- **Example**: `Collection`, `Thesaurus`, `Fund`.

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `No` (can be left empty).

**Access Levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![Relation form](/archihub.github.io/imagenes/formulario_relacion.png)

### Practical Example
**Scenario**: Relate a document to thesaurus terms:

1. **Label**: "Controlled terms"
2. **Type**: Relation
3. **Related content**: Thesaurus
4. **Cardinality**: Many to many
5. **Search**: By title and description

## The Location Field

The Location field allows georeferencing resources by associating them with physical places or administrative divisions, supporting multiple locations with different levels of precision.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Location"`, `"Place of origin"`.

**Field Type**: Location  
- **Description**: Allows associating the resource with one or more physical places or administrative divisions.  
- **Example**: Field to register the location of an event, document, object, etc.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g., metadata, database).  
- **Example**: `metadata.location`.

**Instructions**:  
- **Description**: User guidance on how to use the field.  
- **Example**: *"Select or search for the corresponding location."*

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `No` (can be left empty).

**Condition**:  
- **Description**: Rules for displaying/editing the field (e.g., depending on another field).  
- **Example**: *"Visible only if `Resource Type = Event`."*

**Access Levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![Location field interface](/archihub.github.io/imagenes/ubicacion.png)

### Practical Example
**Scenario**: Document relevant locations for a research project:

1. **Main location**:
   - Name: Universidad del Valle
   - City: Cali
   - Department: Valle del Cauca
   - Country: Colombia

2. **Study area**:
   - Name: Farallones National Natural Park
   - Coordinates: 3.3547° N, 76.7890° W

### Display
Locations are shown with their complete information and on an interactive map when coordinates are available.

![Add location](/archihub.github.io/imagenes/agregar_ubicacion.png)

![Location example](/archihub.github.io/imagenes/ejemplo-ubicaciones.png)

## The Multiple Field

The Multiple field allows creating groups of related fields that can be repeated as needed, ideal for capturing structured information in multiple instances.

### Field Structure
**Field Type**: Repeatable group
**Subfields**: Individually configurable
**Cardinality**: 
  - Minimum instances
  - Maximum instances
  - No limit

### Features
- Drag and drop to reorder
- Predefined field templates
- Validation per instance
- Collapse/expand groups

### Practical Example
**Scenario**: Create a form for contact information:

1. **Group**: "Contact Information"
2. **Subfields**:
   - Type (email, phone, address)
   - Value
   - Notes
3. **Configuration**:
   - Minimum: 1 instance
   - Maximum: No limit
   - Orderable: Yes

![módulo](/archihub.github.io/imagenes/multiple.png)

## The File Field

The File field allows uploading and managing attached files, with multiple configuration options to suit different storage and display needs.

### Field Structure
**Field Type**: File upload
**Multiple Files**: Configurable
**Allowed Formats**: Customizable
**Maximum Size**: Defined per field

### Configuration
- **File Types**: Restriction by extensions
- **Tags**: Unique identification for each file field
- **Preview**: Preview of images and documents
- **Versions**: Automatic generation of thumbnails

### Association with resources
Unlike other fields, files:
- Are associated by unique tags
- Are not stored in metadata
- Can have multiple versions
- Maintain their own metadata

### Practical Example
**Scenario**: Configure a field for supporting documents:

1. **Label**: "attached_documents"
2. **Type**: File
3. **Allowed formats**: PDF, DOCX, XLSX
4. **Maximum size**: 10MB per file
5. **Multiple files**: Yes (up to 5)

![form files](/archihub.github.io/imagenes/campo-archivo.png)

![File tag](/archihub.github.io/imagenes/campo-archivo-preview.png)

Each file associated with a resource can be seen in its identified tag, each with a different color. It is possible to view it from the detail view of each resource or from the edit form once the resource has been uploaded and saved.

![Label form](/archihub.github.io/imagenes/campo-archivo-form.png)

## The Separator Field

The Separator field is a special field that allows dividing a form into multiple pages, improving the user experience by organizing information into more manageable sections. It is particularly useful for long forms with many fields.

Each separator defines a new page in the form and requires:
- **Name**: Unique identifier for the separator (mandatory)

![Separator field in the form](/archihub.github.io/imagenes/formulario_separador.png)

### Separator configuration

The following image shows the separator configuration form, where you can define the name, title, and description that will be displayed in the form navigation.

![Separator configuration form](/archihub.github.io/imagenes/separador-form.png)

### Usage example

**Scenario**: Create a project registration form with three sections:

1. **Basic information**
   - Fields: Title, description, start date
   - No separator (appears on the first page by default)

2. **Project details**
   - Separator: "Details"
   - Fields: Objectives, scope, budget

3. **Team and collaborators**
   - Separator: "Team"
   - Fields: Team members, roles, contacts

### Display in the form

Separators appear as steps in the top navigation of the form, allowing users to easily move between different sections:

![Separator navigation](/archihub.github.io/imagenes/campo-separador.png)
