---
title: 'The Separator Element'
description: 'Documentation about the use of separators in ArchiHUB forms'
---

The Separator element (internally `separator`) is not a data-capture field as such, but a purely visual, organizational (UI) component for the forms interface.

### Field Structure

Being a layout component, its configuration is very basic:

**Name / Label**:  
- **Description**: The title of the new section the separator is introducing.  
- **Example**: `"Control Information"`, `"Conservation Data"`.

**Instructions**:  
- **Description**: Can be used as a general description below the title of the new section to guide the user at that stage of the form.

**Condition** and **Access levels**:  
- **Description**: If the separator depends on certain rules, it can be hidden so that the whole section appears to disappear (this visually hides the section's heading, but the visibility logic must also be applied to each internal field that should be hidden as well).

![Separator element configuration](/archihub.github.io/imagenes/campos/separator.png)

---

### Behavior in the interface

- It renders as a heading or a prominent dividing line within the form.
- It does not generate any structure in the resource's final metadata, since it does not store a value entered by the user.
- It is very useful in long forms to divide information into logical categories or tabs, drastically improving the cataloger's experience.

![Separator in the form](/archihub.github.io/imagenes/campos/separator_form.png)

### Step navigation

Separators appear as steps in the top navigation of the form, allowing users to easily move between the different sections:

![Navigation by separators](/archihub.github.io/imagenes/campo-separador.png)
