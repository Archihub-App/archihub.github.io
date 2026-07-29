---
title: 'El campo Lista de Usuarios'
description: 'Documentación sobre el campo de lista de usuarios en ArchiHUB'
---

El campo Lista de Usuarios (internamente `userslit` o `userslist`) permite seleccionar uno o varios usuarios registrados en el sistema, similar al campo de Autor, pero orientado a listas genéricas de participación o asignación de responsables.

### Estructura del campo

**Nombre**:  
- **Descripción**: La etiqueta que identifica el campo.  
- **Ejemplo**: `"Revisores asignados"`, `"Participantes del proyecto"`.

**Destino**:  
- **Descripción**: Ubicación donde se almacenarán las IDs de los usuarios seleccionados.  
- **Ejemplo**: `metadata.firstLevel.revisores`.

**Instrucciones**:  
- **Descripción**: Información de ayuda adicional.

**Requerido**:  
- **Descripción**: Define si es obligatorio seleccionar al menos un usuario.

**Condición** y **Niveles de acceso**:  
- **Descripción**: Controlan si el campo se muestra y quién tiene permiso para modificarlo.

![Configuración del campo lista de usuarios](/archihub.github.io/imagenes/campos/userList.png)

---

### Comportamiento en la interfaz

- Se presenta como un campo de búsqueda autocompletable.
- Al escribir, el sistema consulta los nombres de usuario o correos electrónicos registrados en ArchiHUB y permite seleccionarlos de la lista sugerida.
- Los usuarios seleccionados se agregan como etiquetas o píldoras visuales, pudiendo agrupar a múltiples usuarios bajo el mismo campo.
- Garantiza que los nombres introducidos se correspondan fielmente a identidades válidas de la plataforma.
