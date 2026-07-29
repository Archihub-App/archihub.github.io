---
title: 'Campos para los estándares de metadatos'
description: 'Documentación general sobre los tipos de campos disponibles para construir formularios en ArchiHUB'
---

Los campos son los bloques de construcción de los formularios de cada tipo de contenido en ArchiHUB. Al configurar un tipo de contenido desde el módulo de **Tipos**, defines qué campos tendrá su formulario, en qué orden aparecen y cómo se comportan, determinando así exactamente qué metadatos captura o muestra cada recurso.

Esta sección documenta en detalle cada tipo de campo disponible: qué propiedades se pueden configurar, cómo se comporta en la interfaz y ejemplos prácticos de uso.

## Propiedades comunes a todos los campos

La mayoría de los campos comparten un mismo conjunto base de propiedades de configuración. Se documentan aquí una única vez para no repetirlas en cada página; las páginas de cada campo solo detallan las propiedades adicionales que le son propias.

- **Nombre**: La etiqueta que ve el usuario en el formulario.
- **Destino**: La ruta dentro de los metadatos del recurso donde se guardará el valor capturado (por ejemplo, `metadata.firstLevel.<clave>`).
- **Instrucciones**: Texto de ayuda opcional, visible mediante un icono de ayuda junto al campo.
- **Requerido**: Indica si el campo debe diligenciarse obligatoriamente para poder guardar el recurso.
- **Condición**: Permite mostrar u ocultar el campo dinámicamente según el valor de otro campo del mismo formulario.
- **Niveles de acceso**: Restringe qué roles de usuario pueden ver o editar el campo.

## Tipos de campos disponibles

### Texto y datos simples

| Campo | Descripción |
| --- | --- |
| [Texto](/archihub.github.io/es/campos/texto) | Entrada de texto en una sola línea; ideal para títulos, nombres o identificadores cortos. |
| [Área de texto](/archihub.github.io/es/campos/area_texto) | Entrada de texto en múltiples líneas; para descripciones, resúmenes o notas extensas. |
| [Número](/archihub.github.io/es/campos/numero) | Restringe la entrada a valores numéricos, con límites mínimo y máximo configurables. |
| [Fecha](/archihub.github.io/es/campos/fecha) | Selección de fechas mediante un calendario, con formato de almacenamiento consistente. |
| [Verdadero / Falso](/archihub.github.io/es/campos/true_false) | Casilla de verificación para opciones binarias del tipo Sí/No. |

### Selección de opciones

| Campo | Descripción |
| --- | --- |
| [Listado](/archihub.github.io/es/campos/listado) | Selección de una única opción a partir de una lista (vocabulario controlado) predefinida. |
| [Lista de selección múltiple](/archihub.github.io/es/campos/seleccion_multiple) | Igual al Listado, pero permite elegir varias opciones simultáneamente. |

### Referencias a personas y recursos

| Campo | Descripción |
| --- | --- |
| [Autor](/archihub.github.io/es/campos/autor) | Relaciona el recurso con uno o varios usuarios del sistema con atribución de autoría. |
| [Lista de Usuarios](/archihub.github.io/es/campos/lista_usuarios) | Selecciona uno o varios usuarios registrados, para listas genéricas de participación o responsables. |
| [Relación](/archihub.github.io/es/campos/relacion) | Vincula el recurso con uno o varios recursos de otro tipo de contenido. |

### Archivos y ubicación

| Campo | Descripción |
| --- | --- |
| [Archivo](/archihub.github.io/es/campos/archivo) | Área para arrastrar, soltar o seleccionar archivos multimedia adjuntos al recurso. |
| [Ubicación](/archihub.github.io/es/campos/ubicacion) | Captura coordenadas geoespaciales y datos de ubicación, con soporte de mapa integrado. |

### Organización del formulario

| Campo | Descripción |
| --- | --- |
| [Campo múltiple](/archihub.github.io/es/campos/multiple) | Grupo de subcampos que se puede instanciar tantas veces como sea necesario (grupo repetible). |
| [Separador](/archihub.github.io/es/campos/separador) | Elemento puramente visual que divide el formulario en secciones o páginas. |
