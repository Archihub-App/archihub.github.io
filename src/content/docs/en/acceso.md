---
title: 'Levels of access to information'
description: ''
# date: 2024-02-02
# category: ArchiHUB
# layout: post
---

ArchiHUB allows you to configure access levels to the information, adapting to the specific needs of the archive. By default, there is only one access level, which makes all content __Public__. However, it is possible to configure additional access levels to control who can view and manage information on the platform.

## Customized access levels

In addition to the default access level, ArchiHUB allows configuring customized access levels according to specific needs. This functionality is set from the system configuration.

To create custom access levels, follow these steps: Go to _Cataloging_ > _Lists_ and create a new list. In this list, add as many new access levels as you want for your file and content types. For example, you could create access levels like __classified__ or __reserved__.

Once we have the list done, we go back to the system settings and in the _Access levels and roles_ section we select our newly created list in the access level assignment.

## Assigning resource access levels

By default, all content created in ArchiHUB is Public. However, you can assign a different access level to restrict who can view or edit those resources. Here is how it works:

- __Public Content:__ By default, any user with `editor` role can view and edit the content.
- __Access Levels:__ If you assign a different access level, only users with that level will be able to view or edit those specific resources.
- __Metadata Visibility:__ Metadata will remain visible to all, ensuring transparency.
- __Document Restriction:__ Documents associated with the resource with restricted access levels will not be viewable by users without the appropriate level. Only the hash of the document will be displayed, ensuring the confidentiality of the content.

This functionality allows detailed control over who can access and manage different types of information on the platform.

## Assigning access levels to metadata

In some cases, certain types of content may need to be published, but some metadata may be confidential. For these cases, ArchiHUB allows you to assign access levels by creating or editing a metadata standard for each field individually. Thus:
- __Public users__ will not be able to read reserved metadata, ensuring the confidentiality of sensitive information.
-__Transparency:__ Transparency in information management is guaranteed, as public metadata will remain visible to all.