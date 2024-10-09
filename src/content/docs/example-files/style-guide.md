---
title: 'Markdown Test Page'
description: 'Página de prueba con diferentes elementos de Markdown'
---

# Página de Prueba de Markdown

Este es un ejemplo de una página Markdown con listas, citas, tablas y bloques de código para probar y visualizar estilos.

---

## Listas

### Lista desordenada:

- Elemento de lista 1
- Elemento de lista 2
- Elemento de lista 3

### Lista anidada:

- Elemento 1
  - Sub-elemento 1.1
  - Sub-elemento 1.2
    - Sub-sub-elemento 1.2.1
  - Sub-elemento 1.3
- Elemento 2
  - Sub-elemento 2.1

### Lista ordenada:

1. Primer elemento
2. Segundo elemento
3. Tercer elemento
   1. Sub-elemento 3.1
   2. Sub-elemento 3.2

---

## Citas

> Esto es una cita simple para resaltar un texto o mensaje importante.

> ### Cita con Encabezado
> Puedes agregar encabezados dentro de las citas.
>
> - Las citas también pueden contener listas.
> - Y otros elementos como **negritas** o _cursivas_.
> 
> > Anidación de citas es posible para crear un estilo de conversación o comentarios.

---

## Tablas

| Encabezado 1 | Encabezado 2 | Encabezado 3 |
|--------------|--------------|--------------|
| Fila 1, Col 1 | Fila 1, Col 2 | Fila 1, Col 3 |
| Fila 2, Col 1 | Fila 2, Col 2 | Fila 2, Col 3 |
| Fila 3, Col 1 | Fila 3, Col 2 | Fila 3, Col 3 |

### Tabla con Alineación:

| Izquierda        | Centro          | Derecha          |
|:-----------------|:---------------:|-----------------:|
| Texto alineado a la izquierda | Texto centrado | Texto alineado a la derecha |
| Texto alineado a la izquierda | Texto centrado | Texto alineado a la derecha |

---

## Bloques de código

### JavaScript

```javascript
// Este es un bloque de código JavaScript
function saludo() {
  const mensaje = '¡Hola, Mundo!';
  console.log(mensaje);
}

saludo();
```