---
title: 'Fields for Metadata Standards'
description: 'General documentation on the field types available for building forms in ArchiHUB'
---

Fields are the building blocks of the form for each content type in ArchiHUB. When configuring a content type from the **Types** module, you define which fields its form will have, in what order they appear, and how they behave — determining exactly what metadata each resource captures or displays.

This section documents each available field type in detail: which properties can be configured, how it behaves in the interface, and practical usage examples.

## Properties common to all fields

Most fields share the same base set of configuration properties. They are documented here once so they don't need to be repeated on every page; each field's own page only details the additional properties specific to it.

- **Name**: The label the user sees on the form.
- **Destination**: The path within the resource's metadata where the captured value will be stored (for example, `metadata.firstLevel.<key>`).
- **Instructions**: Optional help text, shown via a help icon next to the field.
- **Required**: Indicates whether the field must be filled in order to save the resource.
- **Condition**: Allows the field to be shown or hidden dynamically based on the value of another field in the same form.
- **Access levels**: Restricts which user roles can view or edit the field.

## Available field types

### Text and simple data

| Field | Description |
| --- | --- |
| [Text](/archihub.github.io/en/campos/texto) | Single-line text entry; ideal for titles, names, or short identifiers. |
| [Text Area](/archihub.github.io/en/campos/area_texto) | Multi-line text entry; for descriptions, summaries, or lengthy notes. |
| [Number](/archihub.github.io/en/campos/numero) | Restricts entry to numeric values, with configurable minimum and maximum limits. |
| [Date](/archihub.github.io/en/campos/fecha) | Date selection through a calendar, with a consistent storage format. |
| [True / False](/archihub.github.io/en/campos/true_false) | Checkbox for binary Yes/No-style options. |

### Option selection

| Field | Description |
| --- | --- |
| [List](/archihub.github.io/en/campos/listado) | Selection of a single option from a predefined list (controlled vocabulary). |
| [Multiple Selection List](/archihub.github.io/en/campos/seleccion_multiple) | Like List, but allows choosing several options at once. |

### References to people and resources

| Field | Description |
| --- | --- |
| [Author](/archihub.github.io/en/campos/autor) | Relates the resource to one or more system users with authorship attribution. |
| [User List](/archihub.github.io/en/campos/lista_usuarios) | Selects one or more registered users, for generic participation or responsible-party lists. |
| [Relation](/archihub.github.io/en/campos/relacion) | Links the resource to one or more resources of another content type. |

### Files and location

| Field | Description |
| --- | --- |
| [File](/archihub.github.io/en/campos/archivo) | Drag-and-drop or selection area for multimedia files attached to the resource. |
| [Location](/archihub.github.io/en/campos/ubicacion) | Captures geospatial coordinates and location data, with integrated map support. |

### Form organization

| Field | Description |
| --- | --- |
| [Multiple Field](/archihub.github.io/en/campos/multiple) | A group of subfields that can be instantiated as many times as needed (repeatable group). |
| [Separator](/archihub.github.io/en/campos/separador) | A purely visual element that divides the form into sections or pages. |
