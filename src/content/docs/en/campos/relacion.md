---
title: 'The Relation Field'
description: 'Documentation about the relation field in ArchiHUB'
---

The Relation field (internally `relation`) allows you to establish connections between the current resource and one or more resources of another content type within the platform, facilitating the organization and retrieval of related information.

### Field Structure

**Name**:  
- **Description**: The label that identifies the field.  
- **Example**: `"Related document"`, `"Controlled terms"`.

**Destination**:  
- **Description**: The location in the metadata where the reference to the related resource will be stored.  
- **Example**: `metadata.firstLevel.relationField`.

**Content type**:  
- **Description**: Defines the type of resource or entity with which the relation can be established.  
- **Example**: `Collection`, `Thesaurus`, `Fund`.

**Required**:  
- **Description**: Indicates whether establishing at least one relation is mandatory in order to save the resource.

**Condition** and **Access levels**:  
- **Description**: Control the field's visibility and which roles can modify it.

![Relation field in the form](/archihub.github.io/imagenes/formulario_relacion.png)

---

### Behavior in the interface

- It is presented as a search tool that lets you find and link existing resources of the configured content type, typically by title or description.
- Depending on the configured cardinality, the field can accept a single relation or multiple simultaneous relations (many to many).
- Established relations remain available both from the source resource and, in many cases, from the related resource, facilitating cross-navigation between content.
