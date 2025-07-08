---
title: 'El campo Separador'
description: ''
---

El campo Separador es un campo especial que permite dividir un formulario en múltiples páginas, mejorando la experiencia de usuario al organizar la información en secciones más manejables. Es particularmente útil para formularios extensos que contienen muchos campos.

Cada separador define una nueva página en el formulario y requiere:
- **Nombre**: Identificador único del separador (obligatorio)

![Campo de separador en el formulario](/archihub.github.io/imagenes/formulario_separador.png)

### Configuración del separador

En la siguiente imagen se muestra el formulario de configuración del separador, donde se puede definir el nombre, título y descripción que se mostrará en la navegación del formulario.

![Formulario de configuración del separador](/archihub.github.io/imagenes/separador-form.png)

### Ejemplo de uso

**Escenario**: Crear un formulario de registro de proyecto con tres secciones:

1. **Información básica**
   - Campos: Título, descripción, fecha de inicio
   - Sin separador (aparece en la primera página por defecto)

2. **Detalles del proyecto**
   - Separador: "Detalles"
   - Campos: Objetivos, alcance, presupuesto

3. **Equipo y colaboradores**
   - Separador: "Equipo"
   - Campos: Miembros del equipo, roles, contactos

### Visualización en el formulario

Los separadores aparecen como pasos en la navegación superior del formulario, permitiendo a los usuarios moverse fácilmente entre las diferentes secciones:

![Navegación por separadores](/archihub.github.io/imagenes/campo-separador.png) 