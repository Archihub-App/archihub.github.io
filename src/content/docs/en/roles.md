---
title: 'User roles'
description: ''
---


User roles define the ability of users to manage information. By default, ArchiHUB supports three roles: admin, editor and processing.

- __admin__: Users with this role have full access to all platform functions. They can make changes to the system configuration, create users, catalog and process information.
- __editor__: Users with this role can create and edit resources for different types of content. Although there may be exceptions, in general, editors can catalog any type of content, unless otherwise configured when creating content types. Content they create or update is saved as a draft until a user with the `publisher` role publishes it.
- __Publishers__: Users with this role have the function of publishing resources on the platform and making them visible to other users. By default, whenever content is saved, it remains as a draft and is only visible to users with the `admin` and `editor` roles. It is important to note that when publishing content it is only visible to users who are enabled by access levels or roles.
- __processing__: Users with this role can execute processing and configure plugins to run automatically at various times within the application, such as when saving a resource. In some cases, a special role may be required for certain processing, which will be addressed in the advanced plugin configuration. However, to access the configurations, the user must be assigned this role.
- __visualizer__: Users with this role can generate read-only API access keys, which is ideal for connecting visualization dashboards and taking advantage of the data available in ArchiHUB. These users have the ability to create access keys that allow read-only connections, useful for integrations with visualization and data analysis tools. ArchiHUB provides API entries from which reports can be generated. These entries support both basic and advanced search, allowing detailed and customized reports to be generated for each type of content available on the platform. This facilitates the analysis and efficient management of stored information.

## Custom roles

In addition to the default roles, ArchiHUB allows you to configure custom roles according to your specific needs. This functionality is set from the system configuration.

To create custom roles, follow these steps: Go to _Cataloging_ > _Lists_ and create a new list. In this list, add as many new roles as you want for your archive and content types. For example, you could create roles like *fund_editor* or *file_viewer*.

Once we have the list done we go back to the system settings and in the *Roles and information access* section we select our newly created list in the role assignment.

## Assigning editing and viewing roles to content types


Roles can be assigned to content types in two specific sections: the _editing_ and _viewing_ roles. Here is an explanation of how each works:

- __Editing roles:__

If you leave the _Edit Roles_ field empty, only users with roles __admin__ and __editor__ will be able to edit that type of content.
If you specify a role in the _Edit Roles_ field, for example, __editor_funds__, only users with the roles __admin__ or __editor__ and __editor_funds__ will be able to edit funds.

- __Viewing Roles:__

This field determines who can view the resources of a content type. If, for example, you assign the role __records_viewer__ to the content type “Records”, only users with that role will be able to view and query the resources associated with this particular type.

In this way, you can control who can edit and who can view each content type, ensuring that only the appropriate users have access to the necessary functions and resources.