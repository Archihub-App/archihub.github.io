---
title: 'List of functionalities'
description: ''
---

## Cataloging
- [x] Flexible content types to create relationships and hierarchies of information
- [x] Metadata standards or forms for each type. These forms are customizable according to the needs
- [x] Multiple fields for these forms among which we have closed listings and relationship between resources
- [x] Indexing and automatic mapping of the cataloged information for its retrieval in the search
- [x] Massive update of content types, closed lists, metadata forms and cataloged resources
- [x] Validation of document HASH at upload time to avoid duplicates
- [x] Export of resources, content types, metadata and closed lists from the tool to excel format
- [x] _editor_ and _publisher_ roles for saving changes to resources or publishing a resource
- [x] Favorites for saving resources and the ability to _trim_ document chunks or audio/video snippets
- [x] Cataloging task management
- [ ] Enable the ability to create narrated collections with bookmarks and snippets

## Processing
- [x] Processing of multiple source formats to standard formats for web viewing
- [x] Integrated plugin system with 4 available views allowing either to configure the plugin, select resources to process or launch general processing
- [x] Processing queue system that allows to deploy multiple machines and parallelize processing tasks relieving the load on the main machine
- [x] System of _hooks_ in the application, which allows any plugin to _hook_ to different parts of the code: before saving a resource, when updating a resource, etc...
- [x] Cache system that allows central memory management from different machines
- [x] Plugin function packs that allow plugins to access resources or files as well as the ability to save and read temporary files
- [x] Ability for plugins to use the file content as training material for model tuning
- [x] Different priority ranks for processing: _high_, _medium_ and _low_.
- [x] Ability for plugins to save in the database configurations for their functioning
- [x] System prepared for support of text models such as GPT, either in the cloud or in a local deployment of a free model
- [x] Ability to create processing queues with plugins and give a specific order of execution to each one

## Interface
- [ ] Advanced search interface
- [ ] Interface for bookmarks and collections
- [x] Advanced document viewing module in which, from the administration interface, it is possible to edit the segmentation and OCR done by the processing
- [x] Advanced automatic transcription visualization module that allows to edit the transcription and add tagging
- [x] Advanced module for editing image segmentation from the administration interface

## Other
- [x] Possibility to enable a public API per user with limits of requests per week.
- [x] Ability to enable an administration API for bulk uploads of information
- [x] Simplified deployment of the tool on a local machine using Docker
- [x] Possibility to connect visualization dashboards
- [x] System settings section for general configurations