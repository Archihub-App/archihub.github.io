---
title: 'El campo Archivo'
description: ''
---

El campo Archivo permite la carga y gestión de archivos adjuntos, con múltiples opciones de configuración para adaptarse a diferentes necesidades de almacenamiento y visualización.

### Estructura del campo
- **Tipo de campo**: Carga de archivos
- **Múltiples archivos**: Configurable
- **Formatos permitidos**: Personalizables
- **Tamaño máximo**: Definible por campo

### Configuración
- **Tipos de archivo**: Restricción por extensiones
- **Etiquetas**: Identificación única para cada campo de archivo
- **Previsualización**: Vista previa de imágenes y documentos
- **Versiones**: Generación automática de miniaturas

### Asociación con recursos
A diferencia de otros campos, los archivos:
- Se asocian mediante etiquetas únicas
- No se almacenan en los metadatos
- Pueden tener múltiples versiones
- Mantienen metadatos propios

### Ejemplo práctico
**Escenario**: Configurar un campo para documentos de respaldo:

1. **Etiqueta**: "documentos_anexos"
2. **Tipo**: Archivo
3. **Formatos permitidos**: PDF, DOCX, XLSX
4. **Tamaño máximo**: 10MB por archivo
5. **Múltiples archivos**: Sí (hasta 5)

![formulario archivos](/archihub.github.io/imagenes/campo-archivo.png)

![Etiqueta archivo](/archihub.github.io/imagenes/campo-archivo-preview.png)

A cada archivo asociado a un recurso, puedes ver el campo asociado en su etiqueta identificada, cada uno con un color distinto. Es posible verlo desde la vista del detalle de cada recurso o desde el formulario de edición una vez se haya subido y guardado el recurso.

![Etiqueta formulario](/archihub.github.io/imagenes/campo-archivo-form.png) 