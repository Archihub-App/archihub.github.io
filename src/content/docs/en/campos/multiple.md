---
title: 'The Repeatable Group Field'
description: 'Documentation about the repeater field (Repeatable Group) in ArchiHUB'
---

The Repeatable Group field (internally `repeater` or `multiple`) allows you to create dynamic sets of fields that can be instantiated multiple times. It is essential when a resource needs to capture a variable number of information groups (for example, multiple contacts, work experiences, location history).

### Field Structure

This field acts as a container for subfields:

**Name**:  
- **Description**: The label that identifies the group as a whole.  
- **Example**: `"Contact information"`, `"Experience"`.

**Destination**:  
- **Description**: The root key in the metadata where the array of objects will be stored.  
- **Example**: `metadata.firstLevel.contacts`.

**Subfields**:  
- **Description**: The repeater's configuration allows embedding a list of other fields (such as text, date, or lists) that make up each instance of the group.

**Condition** and **Access levels**:  
- **Description**: Control the dynamic visibility of the entire repeatable block and which profiles can interact with it.

![Repeatable group field configuration](/archihub.github.io/imagenes/campos/repeater.png)

---

### Behavior in the interface

- In the form, it is presented with a button (for example, "+ Add") that allows the user to add a new block of fields.
- Each added instance is displayed visually as a container (often framed) that holds its own subfields.
- Users can add as many instances as they need and have a button to remove (trash or cross) any block that was added by mistake.
- In the database, all this information is stored as an array of JSON objects.

![Repeatable group in the form](/archihub.github.io/imagenes/campos/repeater_form.png)
