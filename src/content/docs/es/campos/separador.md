---
title: 'El elemento Separador'
description: 'Documentación sobre el uso de separadores en formularios de ArchiHUB'
---

El elemento Separador (internamente `separator`) no es un campo de captura de datos como tal, sino un componente puramente visual y de organización (UI) para la interfaz de los formularios.

### Estructura del campo

Al ser un componente de diseño, su configuración es muy básica:

**Nombre / Etiqueta**:  
- **Descripción**: El título de la nueva sección que el separador está introduciendo.  
- **Ejemplo**: `"Información de Control"`, `"Datos de Conservación"`.

**Instrucciones**:  
- **Descripción**: Se puede utilizar como una descripción general debajo del título de la nueva sección para guiar al usuario en esa etapa del formulario.

**Condición** y **Niveles de acceso**:  
- **Descripción**: Si el separador depende de ciertas reglas, se puede ocultar para que toda la sección parezca desaparecer (esto oculta visualmente el encabezado de la sección, pero la lógica de visibilidad debe aplicarse a cada campo interno que se desee ocultar también).

![Configuración del elemento separador](/archihub.github.io/imagenes/campos/separator.png)

---

### Comportamiento en la interfaz

- Se renderiza como un encabezado o una línea divisoria prominente dentro del formulario.
- No genera ninguna estructura en los metadatos finales del recurso, ya que no almacena un valor ingresado por el usuario.
- Resulta muy útil en formularios extensos para dividir la información por categorías o pestañas lógicas, mejorando drásticamente la experiencia del catalogador.

![Separador en el formulario](/archihub.github.io/imagenes/campos/separator_form.png)

### Navegación por pasos

Los separadores aparecen como pasos en la navegación superior del formulario, permitiendo a los usuarios moverse fácilmente entre las distintas secciones:

![Navegación por separadores](/archihub.github.io/imagenes/campo-separador.png)
