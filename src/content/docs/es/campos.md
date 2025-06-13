---
title: 'Campos para los estándares de metadatos'
description: ''
---

En esta parte de la documentación detallaremos cada uno de los campos que se pueden configurar en el formulario:

- [Verdadero / Falso](#el-campo-verdadero--falso)
- [Texto](#el-campo-texto)
- [Área de texto](#el-campo-área-de-texto)
- [Número](#el-campo-número)
- [Fecha](#el-campo-fecha)
- [Listado](#el-campo-listado)
- [Lista de selección múltiple](#el-campo-lista-de-selección-múltiple)
- [Autor](#el-campo-autor)
- [Relación](#el-campo-relación)
- [Ubicación](#el-campo-ubicación)
- [Campo múltiple](#el-campo-múltiple)
- [Archivo](#el-campo-archivo)
- [Separador](#el-campo-separador)

## El campo Verdadero / Falso

Este campo permite crear un campo de tipo booleano que solo acepta dos valores: verdadero o falso. Es útil para metadatos que requieren una respuesta binaria, como "¿Está publicado?", "¿Es confidencial?", etc.

Al configurar este campo, se mostrará como una casilla de verificación (checkbox) en el formulario de catalogación. El usuario puede marcar o desmarcar la casilla según corresponda.

## El campo Texto

El campo de texto es uno de los más básicos y versátiles. Permite ingresar texto libre en una sola línea. Es ideal para títulos, nombres, identificadores, URLs cortas, etc.

Al configurar este campo puedes establecer:
- **Nombre**: El nombre del campo que aparecerá en el formulario
- **Destino**: La ruta donde se guardará el valor en los metadatos
- **Requerido**: Si el campo es obligatorio o no
- **Ayuda**: Texto de ayuda que aparecerá debajo del campo

## El campo Área de texto

Similar al campo de texto, pero permite ingresar múltiples líneas de texto. Es perfecto para descripciones largas, resúmenes, comentarios, o cualquier contenido que requiera más espacio.

Este campo se renderiza como un área de texto expandible donde el usuario puede escribir párrafos completos con saltos de línea.

## El campo Número

El campo número está diseñado específicamente para capturar valores numéricos. Incluye validación automática para asegurar que solo se ingresen números válidos.

Es útil para metadatos como:
- Año de publicación
- Número de páginas
- Cantidad de elementos
- Códigos numéricos
- Coordenadas

## El campo Fecha

Este campo permite capturar fechas de manera estructurada. Incluye un selector de fecha que facilita la selección y asegura que el formato sea consistente.

Puedes configurar:
- Formato de fecha
- Fechas mínimas y máximas permitidas
- Si incluir o no la hora

Es especialmente útil para fechas de creación, publicación, modificación, eventos, etc.

## El campo Listado

En casos especiales, un campo de metadatos puede tener un conjunto predefinido de opciones. Cuando esto sucede, es posible definir estas listas de opciones en la sección denominada __LISTAS__ del módulo de catalogación y seleccionarla como lista de opciones al definir el metadato.

![menu](/archihub.github.io/imagenes/listados.png)

## El campo Lista de selección múltiple

Similar al campo listado, pero permite seleccionar múltiples opciones de una lista predefinida. Es útil cuando un recurso puede tener varios valores para un mismo metadato.

Por ejemplo:
- Múltiples categorías
- Varios idiomas
- Diferentes formatos
- Múltiples autores de una lista predefinida

Las opciones seleccionadas se guardan como un array en los metadatos del recurso.

## El campo Autor

El campo autor es un campo especializado para capturar información sobre los creadores o contribuyentes de un recurso. Puede incluir:
- Nombre completo
- Rol (autor, editor, traductor, etc.)
- Información de contacto
- Identificadores únicos

Este campo puede configurarse para permitir múltiples autores y diferentes tipos de contribución.

## El campo Relación

El campo relación es útil si queremos relacionar tipos de contenido entre si. Por ejemplo, podemos tener un tipo de contenido que se llame _Tesauro_ y usarlo a manera de etiqueta en otro tipo de contenido usando el campo relación. De esta manera puedo relacionar uno o más campos del _Tesauro_ al contenido. Es importante aclarar que si uso un campo de relación de tipo _Tesauro_ para el formulario del _Tesauro_, al momento de guardar la plataforma los va a relacionar automaticamente entre si. Es decir que la relación se guardará no solo en el recurso que se está editando sino también en los recursos que estoy relacionando.

![Formulario relación](/archihub.github.io/imagenes/formulario_relacion.png)

## El campo Ubicación

El campo ubicación permite capturar información geográfica o de localización física. Puede incluir:
- Coordenadas GPS (latitud y longitud)
- Dirección física
- Nombre del lugar
- Código postal
- País, estado, ciudad

Este campo es especialmente útil para recursos que tienen una componente geográfica o cuando es importante documentar la ubicación física de un objeto o evento.

## El campo múltiple

El campo múltiple permite agrupar varios campos relacionados en una sola sección repetible. Esto es útil cuando necesitas capturar información estructurada que puede repetirse múltiples veces.

Por ejemplo:
- Múltiples direcciones con diferentes tipos
- Varios números de teléfono con sus respectivos tipos
- Diferentes versiones de un documento con sus metadatos específicos

Cada instancia del campo múltiple puede contener varios subcampos que se repiten como un conjunto.

## El campo Archivo

Dentro de un formulario puedes configurar varios campos distintos para cargar archivos. Para el campo de archivo hay varias opciones que es importante considerar al momento de crear el formulario.

![formulario archivos](/archihub.github.io/imagenes/formulario_archivo.png)

A diferencia de los otros campos de metadatos que se guardan en una ruta usando el campo __Destino__, el campo __Archivo__ no se guarda en los metadatos. Los archivos se asocian a un recurso usando el campo __Etiqueta__. De esta manera, es posible configurar varios campos de __Archivo__ cada uno con una etiqueta distinta para así identificar el campo al cual están asociados.

![Etiqueta archivo](/archihub.github.io/imagenes/etiqueta_archivo.png)

A cada archivo asociado a un recurso, puedes ver el campo asociado en su etiqueta identificada, cada uno con un color distinto. Es posible verlo desde la vista del detalle de cada recurso o desde el formulario de edición una vez se haya subido y guardado el recurso.

![Etiqueta formulario](/archihub.github.io/imagenes/archivo_formulario.png)

## El campo Separador

Hay casos en los que el formulario debe tener varias páginas, y para eso usamos el campo __Separador__. Este es un campo especial que solo necesita el campo __Nombre__. Una vez se haya añadido al formulario, se usará para paginar el formulario al momento de catalogar un nuevo recurso.

![Formulario separador](/archihub.github.io/imagenes/formulario_separador.png)
