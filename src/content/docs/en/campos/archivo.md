---
title: 'The File Field'
description: ''
---

The File field allows uploading and managing attached files, with multiple configuration options to suit different storage and display needs.

### Field Structure
- **Field type**: File upload
- **Multiple files**: Configurable
- **Allowed formats**: Customizable
- **Maximum size**: Set per field

### Configuration
- **File types**: Restriction by extensions
- **Labels**: Unique identification for each file field
- **Preview**: Preview of images and documents
- **Versions**: Automatic generation of thumbnails

### Association with resources
Unlike other fields, files:
- Are associated through unique labels
- Are not stored in the metadata
- Can have multiple versions
- Maintain their own metadata

### Practical example
**Scenario**: Configure a field for supporting documents:

1. **Label**: "attached_documents"
2. **Type**: File
3. **Allowed formats**: PDF, DOCX, XLSX
4. **Maximum size**: 10MB per file
5. **Multiple files**: Yes (up to 5)

![file form](/archihub.github.io/imagenes/campo-archivo.png)

![File label](/archihub.github.io/imagenes/campo-archivo-preview.png)

Each file associated with a resource can be seen in its identified label, each with a different color. It is possible to view it from the detail view of each resource or from the edit form once the resource has been uploaded and saved.

![Form label](/archihub.github.io/imagenes/campo-archivo-form.png) 