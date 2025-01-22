---
title: 'CHANGELOG'
description: ''
---

## [0.8.2] _beta_

### HOTFIX

### Added
- The possibility is added for plugins to define their responsibilities. That is to say, a plugin can be responsible for the indexing of the processing it executes. The processing flow is implemented in the tool to launch these responsibilities automatically when loading or updating a resource.
- The possibility of changing the content type of a resource is enabled as long as it shares a form with the destination type.
- It is now possible to download the documents associated to a resource in a .zip file, in this case only the download is enabled for the files directly associated to a resource.
- The possibility of downloading original or processed documents for each individual file has been added.
- Added public user registration.
- Password recovery option has been added.

### Fixed
- True/False fields are added to the multiple field.
- Fixed sorting by date and title in the public query view.
- Fixed the order when using elastic for keyword searches.
 
### Security
- The access levels for image galleries are adjusted.

## [0.8.1] _20 December 2024_

### HOTFIX

### Added
- When returning resources the `createdAt` field is added.
- Added the possibility to sort the results by `Record Date` or by the `Title` of each record in the result view.

### Fixed
 
### Security

## [0.8] _17 December 2024_

### HOTFIX

### Added
- The `requirements.txt` of the libraries now have no versioning, always search and download the latest version.
- Added LDAP login possibility.
- A new multiple field is implemented for standards. This field allows to generate lists of perzonalized fields in the forms.
- Implemented conditional fields for text fields (equal to, contains to, different from) and false true fields.
- Instructions are added to the metadata standards fields.

### Fixed
- Fixed cache when getting a list of all plugins.
- Fixed bulk processing when a resource type does not have a parent selected.
- Added export options in the new interface.
- Fixed label title in metadata when returning a select
- Completed tasks are added to the user profile plus a color system to identify the status in a simpler way.
- When saving a form (metadata standard) the Title field must always be a text field.
- Adjusted the visibility of tasks when the user is not a `team_lead`.
 
### Security
- The access levels for the image galleries are adjusted.

## [0.7.2] _11 November 2024_

### HOTFIX
- Fixed validation of number fields to support decimals.
- None is fixed when loading plugin settings and they do not exist. If this is the case it returns a {}.

### Added
- Added support for Qdrant vector database.
- Users with `editor` role can now create and edit listings.
- Added validation and approval flow for cataloging tasks.
- Support for version 2.0 of the administration interface.

### Fixed
- Added a 30s timeout for mongodb connection.
- Adjusted the query to elasticsearch to show the total number of results when they exceed 10,000.
- The application only clears the cache at startup if the environment is development and not production.
- When saving a `record`, the system makes sure that the parents of that document are not repeated in the field
 are not repeated in the `parent` field.
- The file pagination is fixed for each resource, changing the pagination depending on whether or not it has image gallery grouping.
- Removed the database request that slowed down the resource tree requests.
 
### Security


## [0.7.1] _20 October 2024_

### Added
- Advanced searches have been added so that you can select the field you want to search in either a text or date field.
- New columns for the results [Documents, identifier].
- The possibility of filtering resources with associated files has been added.
- Added display of aggregates for documents.
- Added new services for image analysis 'img_analyze'. These services provide the possibility to return the metadata of processing and segmentation blocks in an image.
- A new task manager is added to assign corrections to resources to certain users. A new service and a new user role `team_lead` is generated for this purpose.
- A new user role `user` is added for users logged in but without access to anything else in the query and the public.
- Added new public paths for unauthorized querying of cataloged public resources.
- Added new routes for the public API of the application.
- Added compatibility with V2 of the administration interface.
- Added the possibility to order files within each resource with the `order` option of `fileObj` for each resource.

### Changed

- Refresh cache when creating or updating resources now has the option to be disabled when performing bulk uploads.
- When uploading images to a resource it is now possible to adjust the order in which the images will be displayed in the gallery.

### Deprecated

### Removed

### Fixed
- Error handling when processing files
- Added shapely to requirements.txt file
- Adjusted video processing for .MOV videos
- Adjusted clicking on non-nested lists in navigation tree
- Block display in images and documents
- Added .oga .ogv file types
- Fixed synonym search in the search engine and index mapping.
- Implemented pagination when processing files.
- Adjusted blocks on vertical and horizontal images.
- When deleting a resource it and its children are recursively deleted from the search index.

### Security

## [0.7] _7 August 2024_

### Added
- A new “View Information” view is implemented for the cataloging module for general displays of each type.
- SAVE warning when creating or updating a resource.
- Identifier in the resource metadata.
- A new geographic service is implemented for information management.

### Changed

### Deprecated

### Removed

### Fixed
- lastRequest error when updating a user.
- date formatting in the metadata.
- checkbox select in the resource and view form.
- fixed an infinite loop when saving a single resource when indexing automatically.

### Security