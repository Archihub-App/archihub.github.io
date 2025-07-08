---
title: 'The Relation Field'
description: ''
---

The Relation field allows you to establish connections between different types of content within the platform, facilitating the organization and retrieval of related information.

### Field Structure
**Name**: Field name  
- **Description**: Unique and descriptive identifier for the field.  
- **Example**: `"Relation field"`, `"Related document"`.

**Field type**: Relation  
- **Description**: Allows selecting and linking one or more resources of another content type.  
- **Example**: Relate a document to a collection, thesaurus, etc.

**Destination**:  
- **Description**: Location or relation where the value is stored (e.g. metadata, database).  
- **Example**: `metadata.firstLevel.relationField`.

**Content type**:  
- **Description**: Defines the type of resource or entity with which the relation can be established.  
- **Example**: `Collection`, `Thesaurus`, `Fund`.

**Required**:  
- **Description**: Indicates if the field is mandatory (`Yes`) or optional (`No`).  
- **Example**: `No` (can be left empty).

**Access levels**:  
- **Description**: Permissions required to interact with the field.  
- **Example**: `Administrator, Editor` (only these roles can modify it).

![relation form](/archihub.github.io/imagenes/formulario_relacion.png)

### Practical example
**Scenario**: Relate a document to terms from a thesaurus:

1. **Label**: "Controlled terms"
2. **Type**: Relation
3. **Related content**: Thesaurus
4. **Cardinality**: Many to many
5. **Search**: By title and description 