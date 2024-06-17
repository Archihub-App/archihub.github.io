# Campos para los estándares de metadatos

En esta parte de la documentación detallaremos cada uno de los campos que se pueden configurar en el formulario:

- [Listado](#el-campo-listado)
- [Relación](#el-campo-relación)
- [Archivo](#el-campo-archivo)
- [Separador](#el-campo-separador)
- Texto
- Fecha

## El campo listado

En casos especiales, un campo de metadatos puede tener un conjunto predefinido de opciones. Cuando esto sucede, es posible definir estas listas de opciones en la sección denominada __LISTAS__ del módulo de catalogación y seleccionarla como lista de opciones al definir el metadato.

![menu](imagenes/listados.png)

## El campo relación

El campo relación es útil si queremos relacionar tipos de contenido entre si. Por ejemplo, podemos tener un tipo de contenido que se llame _Tesauro_ y usarlo a manera de etiqueta en otro tipo de contenido usando el campo relación. De esta manera puedo relacionar uno o más campos del _Tesauro_ al contenido. Es importante aclarar que si uso un campo de relación de tipo _Tesauro_ para el formulario del _Tesauro_, al momento de guardar la plataforma los va a relacionar automaticamente entre si. Es decir que la relación se guardará no solo en el recurso que se está editando sino también en los recursos que estoy relacionando.

## El campo archivo

Dentro de un formulario puedes configurar varios campos distintos para cargar archivos. Para el campo de archivo hay varias opciones que es importante considerar al momento de crear el formulario.

![formulario archivos](/imagenes/formulario_archivo.png)

A diferencia de los otros campos de metadatos que se guardan en una ruta usando el campo __Destino__, el campo __Archivo__ no se guarda en los metadatos. Los archivos se asocian a un recurso usando el campo __Etiqueta__. De esta manera, es posible configurar varios campos de __Archivo__ cada uno con una etiqueta distinta para así identificar el campo al cual están asociados.

![Etiqueta archivo](/imagenes/etiqueta_archivo.png)

A cada archivo asociado a un recurso, puedes ver el campo asociado en su etiqueta identificada, cada uno con un color distinto. Es posible verlo desde la vista del detalle de cada recurso o desde el formulario de edición una vez se haya subido y guardado el recurso.

## El campo separador