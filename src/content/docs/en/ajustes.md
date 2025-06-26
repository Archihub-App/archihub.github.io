---
title: 'System Settings'
description: ''
---

![General settings menu](/archihub.github.io/imagenes/menu_ajustes.gif)

In this documentation section, we will explore in depth the various options available to configure ArchiHUB. Here you will learn how to customize and adjust the tool to meet your specific needs, ensuring you make the most of all its functionalities.

## Metadata Schema

![Metadata standards](/archihub.github.io/imagenes/estandares.png)

The first option you'll find is not something you can modify directly, but it is crucial for understanding the metadata structure managed by your ArchiHUB installation. From this section, you can quickly review the aggregated schema of all the metadata schemas you have created.

This is an advanced configuration of the application. Although ArchiHUB comes preconfigured with a metadata standard, you have the flexibility to create your own schemas. All fields from these standards are integrated into a unified structure, which you can review here.

If you want to create a new standard and need to verify the existing fields in other standards, you can do so from this section. This ensures there are no duplications or inconsistencies in the metadata fields you define.

## Content Type Settings

![Content type settings](/archihub.github.io/imagenes/ajustes_tipos.png)

The next configuration option refers to content types. As we've seen, you can create as many content types as you want. In the default ArchiHUB installation, the hierarchy is as follows:

 ```
├── Fond
│   ├── Document Unit
│   ├── Section
│   │   ├── Document Unit
│   ├── Serie
│   │   ├── Document Unit
 ```

From this diagram, we can deduce that the content type that contains the information or documents is the Document Unit. The other content types are there to provide order and structure to the organization of these resources.

## API

![API settings](/archihub.github.io/imagenes/settings_api.png)

In this section, you can control access to the system's APIs:

- **Enable Admin API**  
  Allows enabling the administration endpoints. The admin key has a limited duration (maximum two days). It is important to deactivate the API once the necessary changes have been made.

- **Enable Public API**  
  Enables public endpoints to query information. These endpoints have a weekly usage limit per user.

---

## Cache Management

![Cache settings](/archihub.github.io/imagenes/settings-cache.png)

- **Regenerate Cache**  
  If you notice that the information is not up to date, you can regenerate the cache to refresh the data displayed in the application.

---

## Geolocation Management

![Geolocation settings](/archihub.github.io/imagenes/settings-geo.png)

- **Load Geographic Polygons**  
  Allows loading the geographic polygons needed for map visualization.

---

## User Settings

![User settings](/archihub.github.io/imagenes/settings-user.png)

- **Enable User Registration**  
  Allows users to register and access the application's information.

- **Enable Password Recovery**  
  Enables the option for users to recover their password if forgotten.

- **Default User Language**  
  Select the default language for application users.

---

## File Settings

![File settings](/archihub.github.io/imagenes/setting-archivos.png)

- **Enable File Downloads**  
  Allows users to download files from the application.

- **Delete Zipped Files**  
  Deletes compressed files generated in the application.

- **Delete Public Inventories**  
  Deletes public inventories generated in the application.

---

## System Restart

![System restart](/archihub.github.io/imagenes/settings-reinicio.png)

- **Restart System**  
  Allows restarting the backend to apply configuration changes.

---

> **Tip:** After making important configuration changes, remember to click the "Restart backend" button for the settings to apply correctly.

When we want to explore the resources in this file, we will focus mainly on the __Document Units__. That is why this is the default content type in the cataloging module. When opening the module or loading the search tool, it will automatically open in the __Document Unit__, as this is where the information is located. This facilitates navigation and management of documents within your archive.

The next configuration option refers to the content types displayed in the individual view of resources. Let's use an example to clarify this. Suppose you have a collection called "News".

When you visit the "News" resource:

![Individual view](/archihub.github.io/imagenes/vista_individual.png)

- __"About" Section__: On the left side of the screen, you will see the metadata of that resource.
- __"Explore" Section__: Here you will find, in this case, the __Document Units__ within "News".

This configuration defines which content types are displayed in that view. As mentioned before, the type that contains the information is the __Document Units__. We do not want series or sections to be displayed in this view, as these are used to organize information. Instead, we prefer these to appear in a tree format, serving as an additional filter.

This approach helps you focus on the most relevant resources, which in this case are the __Document Units__, facilitating navigation and information management.

## Roles and Information Access

![Roles settings](/archihub.github.io/imagenes/ajustes_roles.png)

In this configuration section, you must select the lists created for [roles](../roles) and [access levels](../acceso). This configuration is vital for the proper functioning of ArchiHUB. Although it is possible to add new roles or access levels throughout the use of the tool, it is important not to delete or modify the existing lists in the configuration. Doing so could generate errors in the installation and affect the tool's functionality.

Keep these lists updated and review them periodically to ensure they correctly reflect your organization's access needs and structures, without compromising the system's integrity.

## Index Management

![Index settings](/archihub.github.io/imagenes/ajustes_indice.png)

One of the pillars of ArchiHUB is advanced search, facilitated by the implementation of ElasticSearch to index and retrieve information. This indexing depends on the configuration and synchronization between the database, cataloging, and the index. Fortunately, ArchiHUB handles all of this automatically, allowing you to focus on using the tool without complications.

From the configuration options, you can:

- __Enable or disable search__: This is useful on machines with limited resources, as advanced search can require significant resources. If this option is disabled, keyword search will not work, but you can filter by closed lists.
- __Regenerate the index__: Necessary if you have made changes to metadata standards or content types.
- __Reindex resources__: Although not a necessary step in most cases, you can use this option if the search is not up to date. ArchiHUB automatically indexes your resources when you create, update, or process them.

With these options, you can efficiently manage advanced search, adapting it to your system's needs and capabilities.