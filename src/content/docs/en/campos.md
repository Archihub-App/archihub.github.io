---
title: 'Fields for metadata standards'
description: ''
---


In this part of the documentation we will detail each of the fields that can be configured in the form:

- [List](#the-list-field)
- [Relation](#the-relation-field)
- [File](#the-file-field)
- [Separator](#the-separator-field)
- Text
- Date

## The list field

In special cases, a metadata field may have a predefined set of options. When this happens, it is possible to define these option lists in the section called __LISTS__ of the cataloging module and select it as an option list when defining the metadata.

![menu](/archihub.github.io/imagenes/listados.png)

## The relation field

The relation field is useful if we want to relate content types to each other. For example, we can have a content type called _Thesaurus_ and use it as a label on another content type using the relation field. In this way I can relate one or more fields of the _Thesaurus_ to the content. It is important to clarify that if I use a relation field of type _Thesaurus_ for the _Thesaurus_ form, at the moment of saving the platform will automatically relate them to each other. That is to say that the relation will be saved not only in the resource that is being edited but also in the resources that I am relating.

![Relation form](/archihub.github.io/imagenes/formulario_relacion.png)

## The file field

Within a form you can set up several different fields for uploading files. For the file field there are several options that are important to consider when creating the form.

![form files](/archihub.github.io/imagenes/formulario_archivo.png)

Unlike the other metadata fields that are stored in a path using the __Destination__ field, the __File__ field is not stored in the metadata. Files are associated with a resource using the __Tag__ field. In this way, it is possible to configure several __File__ fields each with a different label to identify the field to which they are associated.

![File tag](/archihub.github.io/imagenes/etiqueta_archivo.png)

For each file associated to a resource, you can see the associated field in its label identified, each with a different color. It is possible to see it from the detail view of each resource or from the edit form once the resource has been uploaded and saved.

![Label form](/archihub.github.io/imagenes/archivo_formulario.png)

## The separator field

There are cases when the form must have several pages, and for that we use the __Separator__ field. This is a special field that only needs the __Name__ field. Once added to the form, it will be used to paginate the form when cataloging a new resource.

![Separator form](/archihub.github.io/imagenes/formulario_separador.png)