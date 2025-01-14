---
title: 'System settings'
description: ''
---

![Menu general settings](/archihub.github.io/imagenes/menu_ajustes.gif)

In this section of the documentation, we will explore in depth the various options available for configuring ArchiHUB. Here you will learn how to customize and adjust the tool to meet your specific needs, making sure to take full advantage of all its functionalities.

## Metadata schema

![Metadata standards](/archihub.github.io/imagenes/estandares.png)

The first option we found is not something you can directly modify, but it is crucial to understand the metadata structure that your ArchiHUB installation handles. From this section, you can quickly consult the aggregate schema of all the metadata schemas you have created.

This is an advanced configuration of the application. Although ArchiHUB comes preconfigured with a metadata standard, you have the flexibility to create your own schemas. All the fields of these standards are integrated in a unified structure, which you can review here.

If you want to create a new standard and need to check existing fields in other standards, you can do it from this section. This ensures that there are no duplications or inconsistencies in the metadata fields you define.

## Content type settings

![Content type settings](/archihub.github.io/imagenes/ajustes_tipos.png)

The next configuration option refers to the content types. As we have already seen, you can create as many content types as you wish. In the default ArchiHUB installation, the hierarchy is as follows:

 ```
├── Fond
│   ├── Document Unit
│   ├── Section
│   │   ├── Document Unit
│   ├── Serie
│   │   ├── Document Unit
 ```

From this diagram, we can deduce that the content type that contains the information or documents is the Documentary Unit. The other content types are there to provide order and structure to the organization of these resources.

When we want to explore the resources in this archive, we will focus primarily on the __Document Units__. Therefore, this is the default content type in the cataloging module. When opening the module or loading the browser in the tool, it will automatically open in the __Document Unit__, as this is where the information is located. This makes it easier to navigate and manage the documents within your archive.

The next configuration option refers to the types of content displayed in the individual resource view. Let's use an example to clarify this. Suppose you have a resource called “News”.

When you visit the resource “News”:

![Individual view](/archihub.github.io/imagenes/vista_individual.png)

- __Section "Get to know"__: On the left side of the screen, you will see the metadata for that resource.
- __Section "Explore"__: Here you will find, in this case, the __Document Units__ that are within “News”.

This configuration defines which types of content are shown in that view. As mentioned before, the type that contains the information are the __Document Units__. We do not want series or sections to be displayed in this view, as these are used to organize the information. Instead, we prefer that these appear in tree form, serving as an additional filter.

This approach helps you focus on the most relevant resources, which in this case are the __Document Units__, making it easier to navigate and manage information.

## Roles and access to information

![Role adjustments](/archihub.github.io/imagenes/ajustes_roles.png)

In this section of the configuration, you must select the lists created for the [roles](../roles) and [access levels](../acceso). This configuration is vital for the correct functioning of ArchiHUB. Although it is possible to add new roles or access levels throughout the use of the tool, it is important not to delete or modify existing listings in the configuration. Doing so could generate errors in the installation and affect the operation of the tool.

Keep these lists up to date and review them periodically to ensure that they correctly reflect the needs and access structures of your organization, without compromising the integrity of the system.

## API

![API Settings](/archihub.github.io/imagenes/ajustes_api.png)

ArchiHUB offers several API entries that you can manage from this configuration. It is possible to enable or disable both the administration API and the public API:

- __Management API__: This API is useful to connect ArchiHUB with external tools and facilitate bulk uploading of information.
- __Public API__: It allows users to query the archive from their own web pages or tools, promoting greater ownership of the content. This can include everything from web specials to interactive installations.

From these settings, you can quickly enable or disable these options according to your needs. Remember that when making any changes to these settings, it is necessary to restart the backend of the tool for the changes to take effect.

## Index management

![Index settings](/archihub.github.io/imagenes/ajustes_indice.png)

One of the pillars of ArchiHUB is advanced search, facilitated by the implementation of ElasticSearch for indexing and retrieving information. This indexing depends on the configuration and synchronization between the database, the cataloging and the index. Fortunately, ArchiHUB takes care of all of this automatically, allowing you to focus on using the tool without hassle.

From the configuration options, you can:

- __Enable or disable search__: This is useful on machines with few resources, as the advanced search can require a significant amount of resources. If this option is disabled the keyword search is not useful but you can filter by closed lists.
- __Regenerate index__: This is required if you have made changes to metadata standards or content types.
- __Reindex resources__: Although it is not a necessary step in most cases, you can use this option if the search is not up to date. ArchiHUB automatically takes care of indexing your resources when you create, update or process them.

With these options, you can manage the advanced search efficiently, adapting it to the needs and capabilities of your system.