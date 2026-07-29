---
title: 'El campo Área de texto'
description: 'Documentación sobre el campo de área de texto en ArchiHUB'
---

El campo Área de texto permite el ingreso de texto en múltiples líneas. Está diseñado para capturar bloques grandes de información como descripciones, resúmenes, notas u observaciones.

### Estructura del campo

La configuración de un campo de área de texto incluye las siguientes propiedades básicas:

**Nombre**:  
- **Descripción**: La etiqueta que identifica el campo dentro del formulario.  
- **Ejemplo**: `"Descripción general"`, `"Notas de conservación"`.

**Destino**:  
- **Descripción**: La ruta en los metadatos donde se guardará el contenido ingresado.  
- **Ejemplo**: `metadata.firstLevel.descripcion`.

**Instrucciones**:  
- **Descripción**: Texto de ayuda opcional que orienta al usuario sobre qué información detallar en el área de texto. Se muestra mediante un icono de ayuda.  
- **Ejemplo**: *"Proporcione un resumen detallado del estado físico del documento."*

**Requerido**:  
- **Descripción**: Define si el diligenciamiento de este bloque de texto es obligatorio para guardar el registro.

**Condición** (Opcional):  
- **Descripción**: Permite mostrar u ocultar el área de texto dependiendo de las respuestas previas en el formulario.

**Niveles de acceso** (Opcional):  
- **Descripción**: Permite limitar qué usuarios pueden interactuar o visualizar este campo específico.

![Configuración del campo de área de texto](/archihub.github.io/imagenes/campos/text_area.png)

---

### Comportamiento en la interfaz

- **Expansión automática**: El área de texto generalmente tiene un tamaño inicial (por ejemplo, 3 líneas) y puede expandirse automáticamente a medida que el usuario escribe, hasta un límite máximo de líneas predefinido en la vista, tras lo cual mostrará una barra de desplazamiento.
- **Formato**: Este campo guarda el texto plano junto con los saltos de línea introducidos por el usuario.

![Campo de área de texto en el formulario](/archihub.github.io/imagenes/campos/text_area_form.png)