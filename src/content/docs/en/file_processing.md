---
title: 'File Processing'
description: 'Plugin for processing files in Archihub'
---

The plugin allows you to process files in Archihub. This plugin is included by default in the application and does not need to be installed. The plugin allows you to process and create files in different formats, depending on the type of original file. It also allows you to configure automatic processing for the types of content that are configured. The following steps describe how to process files manually and automatically:

## Manual processing

1. **Access the plugin**: to access the file processing plugin, go to the processing tab in the Archihub interface and select the `MASS PROCESSING` button of the file processing plugin.
2. **Select files**: select the type of content you want to process and select the files you want to process.
3. **Configure options**: the plugin offers the option to overwrite existing processes in case the files have already been processed. If you want to overwrite existing processes, select the corresponding checkbox.
4. **Process files**: once you have selected the files and configured the options, click the `PROCESS` button. The processed files will be available in the selected parent resource.

## Automatic processing

To configure automatic file processing, follow these steps:

1. **Access the plugin**: to access the file processing plugin, go to the processing tab in the Archihub interface and select the `PROCESSING CONFIGURATION` button of the file processing plugin.
2. **Configure content types**: select the content types you want to process automatically and select the processing row that will be used for each content type. If more than one content type is configured for the same processing row, the files will be processed in alphabetical order by the name of the content type.

For the use of the plugin, it is important that there is at least one processing row available, as this depends on the tasks related to file processing being able to be executed. To create a processing row or validate that it exists, review the [processing rows](../nodos) documentation.