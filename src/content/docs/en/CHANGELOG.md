---
title: 'CHANGELOG'
description: ''
---

## [1.2.0] _beta_

### Added
- The possibility of changing the content type of a resource is enabled as long as it shares a form with the destination type.
- Implemented a timezone standard for display in the frontend
- Added `hot-reloading` to enable or disable plugins without needing to restart the application
- Added default views for query interfaces, allowing users to start navigation in either list or gallery mode
- A new field is added to the query views, allowing users to directly upload the image that the system will use for that view
- A new `Articles` component is added, allowing users to create blog posts using a Gutenberg-style editor and attach any resources or clippings they choose
- Drag-and-drop is added to reorganize files in the cataloging form.
- A new clipping manager is added to the `Articles` editor to improve the experience when inserting clippings into the text
- A favorites manager is added to the `Articles` editor, allowing users to manage saved resources or files and link them to the text
- Added the ability to create clippings for videos and audio files.

### Fixed
- Fixed UI navigation issues in Firefox
- The graphical implementation of the resource tree is improved to better indicate when a resource can or cannot be selected.
- The UX and UI for the cataloging form are improved overall.
- Fixed an interface error that occurred when the token had expired and the user navigated to the login page

### Security
- The access levels for image galleries are adjusted

## [1.1.0] _20 November 2025_

### Added
- The resource editing view’s tree has been reimplemented to provide clearer support for multiple parent relationships
- Icons and colors were added to the form editor to visually identify each field type more easily
- Added the ability to modify the information returned by the system’s search through plugins
- A calendar-style field is implemented, replacing the previous date field
- New models are added for AI assistants, including vision models for local execution with Ollama
- The context size for AI models is adjusted based on the selected model

### Fixed
- Fixed an issue in the form editor where conditions broke after moving, adding, or removing fields above the conditional field. An automatic adjustment process was added to keep conditions synchronized when fields are modified
- Fixed an error in field-to-index mapping when the field was added through a plugin
- Fixed and improved the tree in the content editor form, enhancing the handling of direct and indirect parents of the resource
- Fixed an error in the multi-field component when it contained only text fields

## [1.0.2] _16 October 2025_

### Added
- Added support for plugins to display a generated image in the control panel view, enabling use cases such as generating QR codes for user authentication
- When no query views are available, the system uses the `front_img` defined in `config.json` (if present) and displays it on the home page

### Fixed
- When performing bulk upload or update via Excel file, location fields can either retrieve coordinates using external services or read the postal code and assign the corresponding geographic polygons
- Fixed an issue when filtering resources in query views where resources had one or more parent elements
- The `AIHandler` has been updated to support the latest Gemini and OpenAI models
- Fixed bulk update issues affecting fields of type `simple-date`
- Fixed an error that occurred when downloading the inventory from the content editor

## [1.0.1] _7 October 2025_

### Added
- When editing a form, a left-side column now displays a compact view of the form fields, with the option to drag and reorder them

### Fixed
- Fixed error in audio conversion to OGG format
- Fixed an error occurring during bulk updates using Excel files
- Fixed an issue when exporting an inventory from the bulk processing plugin for inventory generation

## [1.0.0] _24 September 2025_

### Added
- Installation assistant added to load basic data into forms and lists during setup

### Fixed
- Fixed indexing error when indexing a resource with a multi-select field
- When downloading a resource file, if there is only one document, the system no longer generates a `.zip` file and instead directly serves the associated document
- Fixed an error in the standards creation form where, when selecting a condition dependent on a list, the application did not set a default `equal` value, causing the condition to fail unless one was manually selected

## [0.9.14] _11 September 2025_

### Added
- Added support for viewing public files without requiring login
- Added the option to implement `actions` that are public for all users
- Added parent tags to resource metadata
- Added a public view for `video` and `audio` documents, first validating the access levels of the document and the resources that contain them
- Added a button to jump to the last page in the cataloging form
- Added levels for resource parents
- Added a condition in list fields for forms

### Fixed
- Fixed an issue with list fields when editing a form. By default, even if a list had been selected, the system displayed the first item as selected. This did not affect the database, which correctly stored the selected list, but the frontend did not display it properly

## [0.9.13] _4 September 2025_

### Added
- Added tag support for transcription
- Added support for groups in transcription tags
- Media files can now be served from a cloud provider if configured by a plugin
- Added the ability to adjust the width of the left column

### Fixed
- The `parent` field of resources now supports multiple parents simultaneously. This replaces the relation field, with resource relationships managed through the information hierarchy defined by content types.
- The resource tree now allows two or more simultaneous roots
- Added an error message when unmounting a video or audio
- Improved performance and responsiveness of form fields in plugin actions
- Automated the download of the latest version of Exiftool in the Dockerfile for backend deployment
- Disabled navigation in galleries when there is only one image
- Adjusted the query views menu to handle cases with no query views or with multiple ones
- Optimized the aggregation query for the query views

## [0.9.12] _11 August 2025_

### Added
- New system plugin for auto-completing metadata using documents and LLM assistants
- Added OpenCV.js support in the document and image viewer
- Added the option to restore adjustments made to the image, whether on the original image or the one processed with OpenCV.js
- Added support for running local LLMs with Ollama

### Fixed
- Fixed 401 error when loading the sidebar menu for users who are not registered

## [0.9.11] _31 July 2025_

### Added
- Added a new role `super-editor`. This role inherits all permissions from `editor`, while the `editor` role can now view all accessible resources but only edit the ones they own
- Implemented the resource tree in the `Control Panel` view of the plugins for integration with services like SharePoint and Google Drive

### Fixed
- Optimized the loading of polygons in the map box
- Restructured the LLM service by grouping them under an `AIHandler`
- Fixed the interface for editing blocks and transcriptions from the document segmentation processing
- Fixed `Ctrl + Z` and `Ctrl + Y` functionality in the Liquid Text editor

### Security
- The system now removes all executables and JavaScript code from PDF files and overwrites the original with the sanitized version

## [0.9.10] _22 July 2025_

### Added
- Added a column showing the last update date for resources
- Added the ability to configure new fields using `canvas` within the tool's plugins
- Added the ability to schedule tasks within the system
- Implemented a login attempt limit within a 10-minute window

### Fixed
- Added search functionality to the public query views in the menu for users who are not logged in

### Improved
- Improved translations in the backend

## [0.9.9] _17 July 2025_

### Added
- Implemented the ability to associate `parent` resources during upload using an Excel inventory
- Added preview support for videos and audios in the content editor form
- Added new icons for content types

### Fixed
- Fixed an issue with the `parent` filter when exporting an inventory
- When generating an inventory, `select` and `select-multiple` fields now display their text content instead of IDs
- Fixed an icon display issue in the content type form
- Fixed an issue where metadata was not appearing in public queries

## [0.9.8] _14 July 2025_

### Added
- Added a gallery view to the query interfaces for browsing image content using filters
- Displayed metadata of the first associated resource in the file view
- Added filter chips to the resource view to show which filters are active
- All `select` type fields now include a search option to quickly select the desired item
- File processing now extracts metadata from `TIF` files and displays it in the document query view. A system has been implemented to support additional formats and their metadata, with new formats to be added progressively
- Changed the MongoDB version to 7.0.21. If you have a previous installation of ArchiHUB, you must update the database to the new version following the instructions in the [documentation](https://archihub-app.github.io/archihub.github.io/en/upg_mongo/)
- Implemented certificate handling for login using LDAP Active Directory

### Fixed
- Refined the implementation of the tree and navigation in the query views when only one content type is being displayed
- Fixed display issues on the map when zooming, ensuring markers are correctly positioned at their assigned coordinates
- Fixed an error when regenerating the index involving multi-select lists, the users field and the author field
- Fixed the display issue of document pages that were shown out of order
- Fixed an issue with single-speaker transcription editing
- Fixed backend startup error when the search index is enabled
- Fixed the issue with document and image block views displaying files in the wrong order when uploading files
- Fixed an issue related to the order of options in `index_management`
- Fixed an issue with the `HookHandler` to allow registering multiple tasks with the same function without duplicating arguments
- Fixed an issue in the content editor that occurred when a user logged in for the first time

## [0.9.7] _2 July 2025_

### Added
- Implemented zoom functionality in the map of the Location field

### Fixed
- Fixed the window stacking order when clicking in the gallery view
- Fixed an issue with recursive hooks
- Removed the download button from the gallery view if downloads are disabled in the system
- Added support for synchronous functions in the `HookHandler`
- Cleared `parent` filters whenever the content type is changed
- Fixed an issue with `files` when saving
- Fixed the `offset` issue when navigating backward in the gallery

## [0.9.6] _26 June 2025_

### Added

- Implemented chat with the AI assistant in the image and gallery views
- Added the ability to search from the sidebar menu from any view within the application
- Azure has been added as one of the LLM API providers
- Grok has been added as one of the LLM API providers
- Improved the AI conversation interface to display the images being uploaded

### Fixed
- Added the ability to edit an AI assistant after creation. For all providers, the name can be edited, and for Azure, the connection URLs can also be modified
- Optimized the backend Dockerfile for faster application deployment

## [0.9.5] _19 June 2025_

### Added
- Added a new form field that allows selecting one of the users registered in the system
- Added image support to the LLM services handler
- Added a zoom level slider to both the document view and the image view
- Added a link to the resource in the related content buttons within the document view

### Fixed
- Implemented double-click functionality in the resource tree to open a folder
- Fixed the geographic filter component
- Added a `Clear filters` option when a search returns no results
- Added middle-click support to open links from results and the menu in a new tab
- Fixed an error when deleting compressed files if the folder does not exist
- Fixed the issue with deleting generated inventories
- Cache is now automatically cleared when a form is created or updated
- Fixed an issue in the creation form's selection list so that the first loaded value is set as the default
- When the system fails to save the `resource-schema`, it creates a new one
- Improved the UX for creating `repeater` fields during form creation

### Removed
- The `relation` field has been temporarily removed to be reimplemented in accordance with recent functional changes

## [0.9.4] _6 June 2025_

### Added
- Implemented chat with the AI assistant in the document view
- Added text fields to the resource results
- Added conditional fields for displaying plugin action forms
- Added the ability to directly select OCR on the document when using the `scroll` view
- Enabled the document view in public query interfaces
- Added `Ctrl + Z` support in the Liquid Text editor
- `HookHandler` now works for `records`

### Fixed
- Fixed the display of location names in the metadata query view
- Polished the display of blocks and OCR, enabling editing
- Improved UX for drawing blocks on documents and images in both 3D and scroll views
- The image and document gallery viewer now supports adding a URL parameter to specify the page to explore
- When exploring resources, if `text` fields are being displayed in the results, those fields are not required. In other words, a resource may or may not have content in that field
- Added the necessary filters to allow sorting results using a `text` field

### Security
- Implemented a key validation system for the application's PRO features

## [0.9.3] _23 May 2025_

### Added
- Added keyboard shortcuts for the audio and video playback views: play and pause.
- The ability to sort results using more fields from the forms
- When using text search, results can now be sorted either by relevance or by any of the active columns
- Added search/replace functionality in the Liquid Text editor
- Added a name-based search field to the location form
- Added the ability to view the backend and frontend version of the application from the interface
- Added the `updatedAt` field to store the edit date for both resources and records
- Added the `updatedBy` field to store the user who made the last edit in both resources and records
- Added the ability to search for a geographic location for assignments, and automatically assign the corresponding polygon if it exists in the database.

### Fixed
- Fixed and simplified the code for creating an instance of an already initialized Plugin
- Added automatic file processing when a resource is updated, not just when it is created
- Optimized the loading of geographic polygons from the backend by simplifying shapes and omitting polygons based on size
- Fixed an issue where some polygons would disappear from the map view when displaying locations
- Fixed an issue with the date field where saving would reset the hour, minutes, and seconds to 0
- Refined the styling of form fields for both light and dark interfaces

## [0.9.2] _6 May 2025_

### Added
- Added support for `lat,lon` and map display in the Location field
- Added an "Edit Resource" button to the resource actions
- Added support for multiple locations in the Location field
- Added necessary processing for geographic indexing integrated with the `geosystem`
- Added indexing of polygons in the `geosystem`
- Added the cataloging tasks window to the document view
- Added geographic location filter to search functionality
- All processings can now be exported to a new 'Liquid Text' format for easy editing in a simple text editor, the text can be saved and exported to PDF, DOCX or TXT
- Added a button to restart the backend of the application when deployed in containers
- Change history has been added for resources. When visiting a resource, users can view its change history. Depending on their role and access level, they may see detailed information about the changes made.
- Added the ability for the class responsible for LLMs to estimate the approximate number of tokens for processing and to provide a warning when a query exceeds token limits, suggesting it be split.
- Added keyboard shortcuts for the audio and video playback views: play and pause.

### Fixed
- Fixed an issue with loading filters when initializing a gallery
- Logs with the user set to `None` are now automatically recorded as `system`  
- The `record` update process has been simplified into a single function to centralize actions within the HookHandler
- Simplified the creation of a new index by centralizing the task within the `IndexHandler` class
- Improved the `mapping` implementation when generating a new index.

### Security
- Hierarchical validation of access levels added when loading a `record`

## [0.9.1] _15 April 2025_

### Added
- Error message added when the plugin for downloading inventories is not active.
- Added the ability to edit transcription text directly in place. Clicking on the text now makes it editable and no longer controls video playback.
- Added MARKDOWN support for transcriptions and AI chats.
- Google has been added as one of the LLM API providers
- AI conversations can now switch models mid-conversation, allowing the messages from the ongoing conversation to be used as context for more powerful models

### Fixed
- The `transcriber` role can now submit tasks for review  
- The resource tree correctly displays associated resources in draft status

## [0.9] _10 April 2025_

### Added
- Support for LLMs APIs
- Added an option to enable/disable document downloads in the application
- Added the ability to implement a unit for numeric fields
- New filters for saturation and color inversion have been added  
- Image rotation functionality has been implemented  
- The filter box has been added to the document view
- Added information about the users who submit tasks  
- Added task function parameters to retrieve details about the resources on which they are executed
- AI assistants have been added to the audio/video transcription feature
- New `llm` role added for users who can engage in conversations with the AI

### Fixed
- Fixed error while exporting forms with fields without `instructions`
- The issue with the actions service has been resolved
- Multiple windows for files can now be open simultaneously
- A `transcriber` user cannot save changes to a transcription unless they have an assigned task for that transcription

## [0.8.8] _1 April 2025_

### Fixed
- The issue with system settings in the indexing section has been resolved. The "Regenerate" button was leading to a broken link in the backend. To fix this, delete the entry with ID `index_management` from the `system` collection in the database and restart the backend.
- Python version updated in the Dockerfile
- The indexing task has been updated to omit the `createdAt` field if it does not exist in the record. This ensures compatibility with older versions of the ArchiHUB database.
- The issue with generating tokens for users who are not beta has been resolved.

### Added
- A result message has been added for indexing processes

## [0.8.7] _31 March 2025_

### Fixed
- New system rol `transcriber` for editing transcriptions without the need for rol `editor`
- Added progress messages to task result view for all processings
- The draggable windows view is adjusted so that each time a window is clicked, the selected window moves to the top of the stack

### Added
- Added message and progress bar to file processing plugin
- New options for audio an video playback

## [0.8.6] _26 March 2025_

### Added
- New player settings (speed and fast forward) for audio and video
- Delete task that are pending
- Added actions to the resource page
- Added `FileProcessing`action to resource view
- Added support for user tasks at the record level

### Fixed
- Environment variable ELASTIC_DOMAIN now must have `http` or `https`

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