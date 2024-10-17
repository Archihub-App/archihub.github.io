---
title: Los niveles de acceso a la información
author: Néstor Andrés Peña
date: 2024-02-02
category: ArchiHUB
layout: post
---

# Los niveles de acceso a la información

ArchiHUB permite configurar niveles de acceso a la información, adaptándose a las necesidades específicas del archivo. Por defecto, solo existe un nivel de acceso, que hace que todo el contenido sea __Público__. Sin embargo, es posible configurar niveles de acceso adicionales para controlar quién puede ver y manejar la información en la plataforma.

## Niveles de acceso personalizados

Además del nivel de acceso por defecto, ArchiHUB permite configurar niveles de acceso personalizados según las necesidades específicas. Esta funcionalidad se ajusta desde la configuración del sistema.

Para crear niveles de acceso personalizados, sigue estos pasos: Ve a _Catalogación_ > _Listas_ y crea una nueva lista. En esta lista, agrega todos los niveles de acceso nuevos que desees para tu archivo y tipos de contenido. Por ejemplo, podrías crear niveles de acceso como __clasificado__ o __reservado__.

Una vez tengamos la lista hecha, volvemos a los ajustes del sistema y en la sección _Niveles de acceso y roles_ seleccionamos nuestro listado recién creado en la asignación de niveles de acceso.

## Asignando niveles de acceso a los recursos

Por defecto, todo el contenido creado en ArchiHUB es Público. Sin embargo, puedes asignar un nivel de acceso diferente para restringir quién puede ver o editar esos recursos. Aquí te explicamos cómo funciona:

- __Contenido Público:__ Por defecto, cualquier usuario con rol `editor` puede ver y editar el contenido.
- __Niveles de Acceso:__ Si asignas un nivel de acceso distinto, solo los usuarios con ese nivel podrán ver o editar esos recursos específicos.
- __Visibilidad de Metadatos:__ Los metadatos seguirán siendo visibles para todos, garantizando transparencia.
- __Restricción de Documentos:__ Los documentos asociados al recurso con niveles de acceso restringidos no podrán ser consultados por usuarios sin el nivel adecuado. Solo se mostrará el hash del documento, asegurando la confidencialidad del contenido.

Esta funcionalidad permite un control detallado sobre quién puede acceder y manejar diferentes tipos de información en la plataforma.

## Asignando niveles de acceso a los metadatos

En algunos casos, es posible que ciertos tipos de contenido deban publicarse, pero algunos metadatos sean confidenciales. Para estos casos, ArchiHUB permite asignar niveles de acceso al crear o editar un estándar de metadatos para cada campo indivualmente. De este modo:
- Los __usuarios públicos__ no podrán leer los metadatos reservados, asegurando la confidencialidad de la información sensible.
- __Transparencia:__ Se garantiza transparencia en el manejo de la información, ya que los metadatos públicos seguirán siendo visibles para todos.