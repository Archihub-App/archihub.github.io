---
title: 'El campo Grupo Repetible'
description: 'Documentación sobre el campo repetidor (Grupo Repetible) en ArchiHUB'
---

El campo Grupo Repetible (internamente `repeater` o `multiple`) permite crear conjuntos dinámicos de campos que pueden instanciarse múltiples veces. Es esencial cuando un recurso requiere capturar una cantidad variable de grupos de información (por ejemplo, múltiples contactos, experiencias laborales, historial de ubicaciones).

### Estructura del campo

Este campo actúa como un contenedor para subcampos:

**Nombre**:  
- **Descripción**: La etiqueta que identifica el grupo en su conjunto.  
- **Ejemplo**: `"Información de Contactos"`, `"Experiencias"`.

**Destino**:  
- **Descripción**: La clave raíz en los metadatos donde se guardará el array de objetos.  
- **Ejemplo**: `metadata.firstLevel.contactos`.

**Subcampos**:  
- **Descripción**: La configuración del repetidor permite incrustar una lista de otros campos (como texto, fecha o listados) que componen cada instancia del grupo.

**Condición** y **Niveles de acceso**:  
- **Descripción**: Controlan la visibilidad dinámica del bloque repetidor completo y qué perfiles pueden interactuar con él.

![Configuración del campo grupo repetible](/archihub.github.io/imagenes/campos/repeater.png)

---

### Comportamiento en la interfaz

- En el formulario, se presenta con un botón (por ejemplo, "+ Añadir") que permite al usuario agregar un nuevo bloque de campos.
- Cada instancia añadida se muestra visualmente como un contenedor (a menudo enmarcado) que alberga sus propios subcampos.
- Los usuarios pueden agregar tantas instancias como requieran y cuentan con un botón para eliminar (papelera o cruz) cualquier bloque que se haya añadido por error.
- En la base de datos, toda esta información se guarda como un arreglo (Array) de objetos JSON.

![Grupo repetible en el formulario](/archihub.github.io/imagenes/campos/repeater_form.png)