---
title: 'Metadata standards and content types'
description: ''
---

ArchiHUB has been designed to offer maximum flexibility in terms of the different types of content it can handle. This versatility is reflected in the ability to create different types of content and establish relationships between them. A concrete example is the ability to organize content into document series, which in turn can contain files.

Each type of content can be configured with the metadata standard that best suits the specific data structures and new standards can be created as needed. Following the example mentioned above, document series and records can be organized using the ISAD-G international standard.

This ability to customize the metadata configuration allows the document management tool to adjust to the specific requirements of any institution, ensuring that information is organized and stored in a coherent and structured manner. By using different standards for different types of content, an efficient and accurate management of the collected documentation is ensured.

## Metadata standards

![menu](/archihub.github.io/imagenes/estandares.gif)

When defining a new content type, it is critical to have a clear understanding of the metadata we wish to implement for that specific type. In our application, metadata standards are type-independent, meaning that a metadata standard can be linked to one or more types at the same time.

For the correct use of ArchiHUB, it is essential to understand and follow metadata standards. Although our platform allows you to edit these standards even after you have uploaded content, it is important that existing fields do not change type. For example, you should not change a date type field to a number type field, as this would require deleting and re-cataloging the content. Ideally, you should use the metadata standards editing functionality only to add new fields. This ensures that the system works correctly and that your content is always well organized.

![Metadata field](/archihub.github.io/imagenes/field.png)

A field has at least 4 configurable options:

- __Name__: this is the name of the field in the form and the one that users will see to identify it from the rest.
- __Type__: the field type defines the type of content that will be stored in that field.
- __Destination__: this is the path into the metadata schema. By default all destinations must start with _metadata_, for example, the default path for the title is _metadata.firstLevel.title_. This way I can have the same field, with the same type and destination in two or more different standards. If you try to save a field that has already been configured with a certain type you will not be able to save it with a different one. If you want to consult the complete schema of your metadata in the tool, you can go to the system configuration.
- __Required__: whether the field is required or not.

A metadata standard provides a list of metadata that can be customized according to the specific needs of the content type. The types of fields available are diverse and suit a wide range of possibilities. See the detailed documentation [here](../campos).

## Types of content

![menu](/archihub.github.io/imagenes/tipos.gif)

Content types have the function of establishing the categories of resources that the document management tool will organize, as well as the hierarchy in which these resources will be structured. To illustrate this, let's consider an example file in which we want to have a structure as follows:

 ```
├── Fond
│   ├── Serie
│   │   ├── Dossier
 ```

In this case, the hierarchy of information works as follows: the dossiers are contained in document series, which in turn are contained in fonds. The definition of these content types and their hierarchy allows for a logical and orderly structure of the archive. This facilitates the search, navigation and retrieval of information, as well as providing a coherent and organized view of the documents. Now let's see how to implement the structure of our archive.

### Making a new type of content

When defining a new content type, we can configure several parameters according to our needs.

In situations where the content type is located inside another one, as in the case of dossiers, it is necessary to specify the parent type. In this context, when creating a new file, we must always associate it with a document series as its parent type. However, since files cannot be contained within other files, the hierarchical option is not enabled in this case. On the other hand, document series can have document subseries, and in this scenario, the hierarchical option does apply.