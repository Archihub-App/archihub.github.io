---
title: 'El campo Casilla de Verificación (True/False)'
description: 'Documentación sobre el campo de casilla de verificación en ArchiHUB'
---

El campo Casilla de Verificación (internamente `checkbox`) se utiliza para opciones binarias, como "Sí/No", "Acepto", o cualquier estado booleano simple.

### Estructura del campo

**Nombre**:  
- **Descripción**: La etiqueta o texto descriptivo de la acción a confirmar.  
- **Ejemplo**: `"Documento original"`, `"Aprobado para publicación"`.

**Destino**:  
- **Descripción**: La clave en los metadatos donde se almacenará el valor `true` (verdadero) o `false` (falso).  
- **Ejemplo**: `metadata.firstLevel.es_original`.

**Instrucciones**:  
- **Descripción**: Texto de ayuda para proveer contexto sobre lo que implica marcar la casilla.

**Requerido**:  
- **Descripción**: Si es requerido, la casilla *debe* marcarse forzosamente para permitir guardar el formulario (útil para aceptar términos y condiciones o certificar validez).

**Condición** y **Niveles de acceso**:  
- **Descripción**: Gestionan la visibilidad dinámica y los permisos.

![Configuración del campo verdadero/falso](/archihub.github.io/imagenes/campos/checkbox.png)

---

### Comportamiento en la interfaz

- Se muestra como un cuadro clásico interactivo o un interruptor (*switch*).
- Su estado inicial por defecto suele ser desmarcado (`false`).
- Al hacer clic, alterna el estado, actualizando inmediatamente el modelo de datos.

![Campo verdadero/falso en el formulario](/archihub.github.io/imagenes/campos/checkbox_form.png)