---
title: "Massive Resource Updater"
description: "Plugin to update resources in ArchiHUB"
---

The plugin allows you to update resources in ArchiHUB. This plugin is included by default in the application and does not need to be installed. The plugin allows you to update resources in ArchiHUB from an Excel file in a format similar to the one generated by the [inventory generation](../inventory_maker) plugin. The following steps describe how to update resources:

## Update resources

1. **Access the plugin**: to access the resource update plugin, go to the processing tab in the ArchiHUB interface and select the `MASS PROCESSING` button from the resource update plugin.
2. **Select the file**: select the Excel file with the resources you want to update.
3. **Configure update**: the plugin allows you to delete resources when the Excel file has blank fields. Select the `Blank space as content deletion` option if you want to delete resources with blank fields.
4. **Update resources**: once you have selected the Excel file, click on the `PROCESS` button. The plugin will create a processing task and the resources will be updated once the task has finished.

For the use of the plugin, it is important that there is at least one processing row available, as this depends on the tasks related to the processing of files being able to be executed. To create a processing row or validate that it exists, check the documentation on [processing rows](../nodos).

Once the processing is finished, the resources will be updated in ArchiHUB. You can verify the updated resources from the cataloging module.