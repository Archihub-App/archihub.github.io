---
title: 'CHANGELOG'
description: ''
---

## [0.9] _beta_

### Added
- The possibility of changing the content type of a resource is enabled as long as it shares a form with the destination type.
- The ability to sort results using more fields from the forms.
- Support for LLMs APIs

### Security
- The access levels for image galleries are adjusted.

## [0.8.6] _beta_

### Added
- New player settings (speed and fast forward)
- Delete task that are pending

## [0.8.5] _17 March 2025_

### Added
- New service that returns the application's general settings for displaying options in the interface.
- Plugins can now define actions that are buttons appearing in certain places within the application to perform specific tasks
- The ability to edit transcriptions for videos or audios has been added. Transcriptions allow editing of the transcribed text as well as the speaker's name if processing is available.

### Fixed
- Pagination issue in the resource view for the records.
- Solved chunks reading for the stream to blob for audios and video.
- Added default values for system settings
- Fixed portrait/landscape mode for video player
- Pagination fixed for users tasks
- A user must have one of the three system roles: `editor`, `admin` or `user`
- Speaker dialog can be activated or deactivated from the actions panel

## [0.8.4] _19 February 2025_

### Fixed
- The `config.json` file of the frontend now allows configuring the API URL.
- Details are being adjusted for the dark mode version of the interface in the "My Profile" options and the cataloging form.
- Resource tree now show drafts if user is authorized

### Added
- Support for spanish and english for the entire app
- The possibility of deleting generated inventories is added so that new ones can be created.
- From bulk processing for plugins, it can be executed for all content types.
- New `Control Panel` view for plugins
- Fixes to dark mode of the UI
- Added the ability to reorder lists

## [0.8.3] _6 February 2024_

### Added
- The ability to delete generated ZIPs from the administration panel is added.
- Dark mode for the UI.
- Public downloads of inventory files is now available for public users.
- Swagger docs support

### Fixed
- The ability for an administrator to delete users is added.
- The loading animation no longer persists when there is no content.


## [0.8.2] _21 January 2025_

### Added
- It is now possible to download the documents associated to a resource in a .zip file, in this case only the download is enabled for the files directly associated to a resource.
- The possibility of downloading original or processed documents for each individual file has been added.
- Added public user registration.
- Password recovery option has been added.
- The application now automatically creates default configuration fields if they do not exist in the database.

### Fixed
- True/False fields are added to the multiple field.
- Text area fields are added to the multiple field.
- Sorting by date and title is fixed in the public query view.
- Sorting is fixed when using Elasticsearch for keyword searches.
- Access to records from a public profile is fixed if and only if the file has public permissions.
- The initial load for the public search is fixed when page is not in the body of the request.

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