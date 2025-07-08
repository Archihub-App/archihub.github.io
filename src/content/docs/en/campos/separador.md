---
title: 'The Separator Field'
description: ''
---

The Separator field is a special field that allows you to divide a form into multiple pages, improving the user experience by organizing information into more manageable sections. It is particularly useful for long forms containing many fields.

Each separator defines a new page in the form and requires:
- **Name**: Unique identifier for the separator (required)

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

### Visualization in the form

Separators appear as steps in the top navigation of the form, allowing users to easily move between the different sections:

![Navigation by separators](/archihub.github.io/imagenes/campo-separador.png) 