---
title: 'Fields for metadata standards'
description: ''
---

In this part of the documentation we will detail each of the fields that can be configured in the form:

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

## The True / False field

This field allows you to create a boolean type field that only accepts two values: true or false. It is useful for metadata that requires a binary response, such as "Is it published?", "Is it confidential?", etc.

When configuring this field, it will be displayed as a checkbox in the cataloging form. The user can check or uncheck the box as appropriate.

![trueFalse](/archihub.github.io/imagenes/truefalse.png)

## The Text field

The text field is one of the most basic and versatile. It allows entering free text in a single line. It is ideal for titles, names, identifiers, short URLs, etc.

When configuring this field you can set:
- **Name**: The name of the field that will appear in the form
- **Destination**: The path where the value will be saved in the metadata
- **Required**: Whether the field is mandatory or not
- **Help**: Help text that will appear below the field

![campoTexto](/archihub.github.io/imagenes/campoTexto.png)

## The Text Area field

Similar to the text field, but allows entering multiple lines of text. It is perfect for long descriptions, summaries, comments, or any content that requires more space.

This field is rendered as an expandable text area where the user can write complete paragraphs with line breaks.

![areaDeTexto](/archihub.github.io/imagenes/areaDeTexto.png)

## The Number field

The number field is specifically designed to capture numeric values. It includes automatic validation to ensure that only valid numbers are entered.

It is useful for metadata such as:
- Publication year
- Number of pages
- Quantity of elements
- Numeric codes
- Coordinates

![campoNumerico](/archihub.github.io/imagenes/campoNumerico.png)

## The Date field

This field allows capturing dates in a structured way. It includes a date picker that facilitates selection and ensures that the format is consistent.

You can configure:
- Date format
- Minimum and maximum allowed dates
- Whether to include time or not

It is especially useful for creation, publication, modification, event dates, etc.

![campoFecha](/archihub.github.io/imagenes/campoFecha.png)

## The List field

In special cases, a metadata field may have a predefined set of options. When this happens, it is possible to define these option lists in the section called __LISTS__ of the cataloging module and select it as an option list when defining the metadata.

![menu](/archihub.github.io/imagenes/listados.png)

## The Multiple Selection List field

Similar to the list field, but allows selecting multiple options from a predefined list. It is useful when a resource can have several values for the same metadata.

For example:
- Multiple categories
- Various languages
- Different formats
- Multiple authors from a predefined list

The selected options are saved as an array in the resource metadata.

![listaDeSeleccionMultiple](/archihub.github.io/imagenes/listaDeSeleccionMultiple.png)

## The Author field

The Author field is a specialized field for capturing information about the creators or contributors of a resource. It supports multiple authors and different types of contribution, allowing differentiation between individuals and organizations.

### Field structure
Each author entry can contain:
- **Author type**: Person or Organization (selector)
- **Basic information**:
  - For individuals: First name, Last name
  - For organizations: Full name, Acronyms

![Author field](/archihub.github.io/imagenes/campoAuthor.png)

The following image shows the author form. The checkbox allows selecting between a person or an organization. For a person, it will show first name and last name fields; for an organization, it will show organization name and acronym fields.

![Author form](/archihub.github.io/imagenes/autor-form.png)

### Practical example
**Scenario**: Registering a book with two authors and a collaborating organization:

1. **First author**:
   - Type: Person
   - First name: María
   - Last name: González

2. **Second author**:
   - Type: Person
   - First name: Juan
   - Last name: Pérez

3. **Organization**:
   - Type: Organization
   - Name: Center for Scientific Research
   - Acronym: CSR

### Metadata display
Authors appear listed in the resource's metadata section, grouped by type and showing all provided information:

![Author in metadata](/archihub.github.io/imagenes/autor-metadatos.png)

## The Relation field

The relation field is useful if we want to relate content types to each other. For example, we can have a content type called _Thesaurus_ and use it as a label on another content type using the relation field. In this way I can relate one or more fields of the _Thesaurus_ to the content. It is important to clarify that if I use a relation field of type _Thesaurus_ for the _Thesaurus_ form, at the moment of saving the platform will automatically relate them to each other. That is to say that the relation will be saved not only in the resource that is being edited but also in the resources that I am relating.

![Relation form](/archihub.github.io/imagenes/formulario_relacion.png)

## The Location field

The Location field allows georeferencing resources by associating them with physical places or administrative jurisdictions. It supports multiple locations and different levels of precision.

### Field structure
Each location can contain:
- **Place name**: City, region, landmark
- **Administrative division**: Department/State/Province
- **Country**: Selectable from dropdown list
- **Geographic coordinates** (optional): Latitude and Longitude

![Location field interface](/archihub.github.io/imagenes/ubicacion.png)

### Adding a location
1. Click on "Add location"
2. Fill in the main name (e.g., "Cali")
3. Select the corresponding locality

![Add location](/archihub.github.io/imagenes/agregar_ubicacion.png)

### Practical example
**Scenario**: Registering a book with two relevant locations:

1. **Place of publication**:
   - Name: Medellín

2. **Research location**:
   - Name: Tayrona National Natural Park, Magdalena, 11.3114° N, 74.0775° W

### Metadata display
Locations appear listed with their complete information:

![Location example](/archihub.github.io/imagenes/ejemplo-ubicaciones.png)

## The Multiple field

The multiple field allows grouping several related fields into a single repeatable section. This is useful when you need to capture structured information that can be repeated multiple times.

For example:
- Multiple addresses with different types
- Various phone numbers with their respective types
- Different versions of a document with their specific metadata

Each instance of the multiple field can contain several subfields that repeat as a set.

![módulo](/archihub.github.io/imagenes/multiple.png)

## The File field

Within a form you can set up several different fields for uploading files. For the file field there are several options that are important to consider when creating the form.

![form files](/archihub.github.io/imagenes/formulario_archivo.png)

Unlike the other metadata fields that are stored in a path using the __Destination__ field, the __File__ field is not stored in the metadata. Files are associated with a resource using the __Tag__ field. In this way, it is possible to configure several __File__ fields each with a different label to identify the field to which they are associated.

![File tag](/archihub.github.io/imagenes/etiqueta_archivo.png)

For each file associated to a resource, you can see the associated field in its label identified, each with a different color. It is possible to see it from the detail view of each resource or from the edit form once the resource has been uploaded and saved.

![Label form](/archihub.github.io/imagenes/archivo_formulario.png)

## The Separator field

There are cases when the form must have several pages, and for that we use the __Separator__ field. This is a special field that only needs the __Name__ field. Once added to the form, it will be used to paginate the form when cataloging a new resource.

![Separator form](/archihub.github.io/imagenes/formulario_separador.png)
