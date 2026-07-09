---
title: 'El campo Archivo'
description: 'Documentación sobre el campo de carga de archivos en ArchiHUB'
---

El campo Archivo (internamente `file`) proporciona un área para arrastrar y soltar, o seleccionar y subir documentos multimedia adjuntos al recurso (imágenes, PDFs, videos, etc.).

### Estructura del campo

A diferencia de los campos de texto, el campo de archivo cuenta con opciones específicas para la gestión de medios:

**Nombre**:  
- **Descripción**: Etiqueta para identificar el tipo de archivos que se espera.  
- **Ejemplo**: `"Documentos anexos"`, `"Fotografía principal"`.

**Destino**:  
- **Descripción**: Por lo general, los archivos no se incrustan en el mismo nivel de los metadatos de texto, sino que se enlazan mediante un identificador o etiqueta (`tag`) que relaciona el archivo subido con este campo del formulario.

**Formatos permitidos**:  
- **Descripción**: Permite limitar los tipos de extensión aceptados.  
- **Ejemplo**: Solo admitir `image/*` y `application/pdf`.

**Límite de archivos**:  
- **Descripción**: El número máximo de archivos que se pueden subir en este campo específico.  
- **Ejemplo**: Limitar a `1` para forzar una única imagen de portada.

**Requerido**:  
- **Descripción**: Impide que el usuario guarde el registro si no ha subido y asociado un archivo a este campo.

**Instrucciones**, **Condición** y **Niveles de acceso**:  
- **Descripción**: Elementos comunes de ayuda, visualización dinámica y seguridad.

![Configuración del campo archivo](/archihub.github.io/imagenes/campos/file.png)

---

### Comportamiento en la interfaz

- La interfaz (*DropzoneArea*) muestra un área interactiva para soltar los archivos.
- Permite la visualización de los archivos actualmente subidos como etiquetas (*chips*).
- Los archivos existentes que se asocian al recurso aparecen enumerados, permitiendo su eliminación o el reemplazo según el límite configurado.

![Campo archivo en el formulario](/archihub.github.io/imagenes/campos/file_form.png)

### Vista previa de la etiqueta

Cada archivo asociado a un recurso se identifica mediante una etiqueta (*tag*) de un color distinto, visible tanto en la vista de detalle del recurso como en su formulario de edición una vez que el archivo fue subido y guardado:

![Vista previa de la etiqueta del archivo](/archihub.github.io/imagenes/campo-archivo-preview.png)

![Etiqueta del archivo en el formulario](/archihub.github.io/imagenes/campo-archivo-form.png)
