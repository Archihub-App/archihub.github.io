---
title: 'El campo Texto'
description: 'Documentación sobre el campo de texto en ArchiHUB'
---

El campo de texto permite el ingreso de texto en una sola línea. Es el tipo de campo más utilizado para capturar información corta como nombres, títulos o identificadores.

### Estructura del campo

Al configurar un campo de texto en un formulario, dispones de las siguientes propiedades:

**Nombre**:  
- **Descripción**: La etiqueta o título que verá el usuario en el formulario.  
- **Ejemplo**: `"Título del documento"`, `"Nombre del autor"`.

**Destino**:  
- **Descripción**: La clave o ruta en los metadatos donde se guardará el valor (por ejemplo, dentro del esquema de la base de datos).  
- **Ejemplo**: `metadata.firstLevel.titulo`.

**Instrucciones**:  
- **Descripción**: Texto de ayuda opcional que se muestra al usuario al interactuar con el icono de ayuda del campo.  
- **Ejemplo**: *"Ingrese el título completo del documento tal como aparece en la portada."*

**Requerido**:  
- **Descripción**: Indica si el campo es de diligenciamiento obligatorio para poder guardar el recurso.

**Condición** (Opcional):  
- **Descripción**: Permite configurar la visibilidad del campo basándose en el valor de otro campo del mismo formulario. Útil para formularios dinámicos.

**Niveles de acceso** (Opcional):  
- **Descripción**: Restringe qué roles de usuario pueden ver o editar este campo.

![Configuración del campo de texto](/archihub.github.io/imagenes/campos/text.png)

---

### Ejemplo de visualización

Cuando el usuario interactúa con un campo de texto, verá una entrada estándar de una línea. Si el campo tiene instrucciones, aparecerá un icono de ayuda junto al nombre.

*(Nota: Las opciones de validación avanzada como longitud máxima o formato de correo electrónico dependen de configuraciones a nivel de backend y no directamente de la estructura visual básica del campo).*

![Campo de texto en el formulario](/archihub.github.io/imagenes/campos/text_form.png)