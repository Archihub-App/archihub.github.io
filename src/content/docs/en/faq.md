---
title: "Frequently Asked Questions"
description: "Answers to the most common questions about ArchiHUB."
---

# Frequently Asked Questions

## What are the minimum requirements to use ArchiHUB?
To use ArchiHUB, you need a device with Docker installed and a stable internet connection. We recommend at least 4 GB of RAM and 2 CPUs for optimal performance. However, requirements may vary depending on the size of the projects you manage.

As a reference, ArchiHUB has been running on a Raspberry Pi 4.

## How can I contribute to the ArchiHUB project?
You can contribute to the ArchiHUB project in several ways:
- Reporting bugs or suggesting improvements in our [GitHub repository](https://github.com/Archihub-App/archihub-backend).
- Participating in discussions and helping other users in our community.
- Developing new features or improving the documentation.
- Sharing ArchiHUB with your colleagues and friends.

## Where can I find support if I have problems with ArchiHUB?
If you have problems with ArchiHUB, you can seek help in the following places:
- Our [official documentation](https://archihub-app.github.io/archihub.github.io/).
- The [GitHub repository](https://github.com/Archihub-App/archihub-backend/issues/new).
- If you have premium support or ArchiHUB Pro, you can contact our support team directly through the email provided in your plan.

## Is ArchiHUB open source?
Yes, ArchiHUB is an open source project. You can find the source code in our [GitHub repository](https://github.com/Archihub-App/archihub-backend).

## Can I use ArchiHUB in a production environment?
Yes, ArchiHUB is designed to be used in production environments. Make sure to follow security and maintenance best practices to ensure optimal performance and data security. If you need additional support, consider opting for ArchiHUB Pro. Find details on our [website](https://bit-sol.com.co/es/).

## How is my data privacy handled in ArchiHUB?
Your data privacy is a priority for us. ArchiHUB stores your data locally on your server, which means you have complete control over it.

## Can ArchiHUB be deployed in the cloud?
Yes, ArchiHUB can be deployed on cloud services. As an example, you have a public [cloud deployment](https://archihub.bit-sol.com.co/) available. You can choose providers like AWS, Google Cloud, or Azure (among others).

## Where can I find the official ArchiHUB documentation?
The official ArchiHUB documentation is available on our website: [https://archihub-app.github.io/archihub.github.io/](https://archihub-app.github.io/archihub.github.io/). Here you will find installation guides, tutorials, and references to help you get the most out of ArchiHUB. Additionally, you can visit the documentation generated with [DeepWiki](https://deepwiki.com/) at [https://deepwiki.com/Archihub-App/archihub-backend](https://deepwiki.com/Archihub-App/archihub-backend).

## How can I update ArchiHUB to the latest version?
To update ArchiHUB to the latest version, follow these steps:
1. Back up your current data and configurations.
2. Stop the ArchiHUB container if it is running.
3. Update your local ArchiHUB repository with the latest changes from GitHub.
4. Rebuild and restart the ArchiHUB container.
5. Verify that the update was successful and that all your data is intact.

If you need additional help, consult our [official documentation](https://archihub-app.github.io/archihub.github.io/) or contact our support team.

## Can I customize ArchiHUB according to my needs?
Yes, ArchiHUB is highly customizable. You can modify the configuration, add plugins, and adapt the platform to meet your specific needs.

If you require a custom frontend, you can develop your own interface using the ArchiHUB API. You can also contact us for customization services and tailored development.

## Does ArchiHUB allow integration with AI tools?
Yes, ArchiHUB allows integration with various artificial intelligence (AI) tools. You can use plugins and APIs to connect ArchiHUB with AI services that enhance your workflow. We are continuously working to expand AI integration capabilities in future versions.

## Managing the index in ArchiHUB

### What is needed to use the index for searches in ArchiHUB?
To use the index in ArchiHUB, you need to have the Elasticsearch service active and running. The container must be enabled in the `docker-compose.yml` file. Additionally, from the ArchiHUB settings, you must activate the "Use index for searches" option:

![activate index](/archihub.github.io/imagenes/check_indice.png)

If this is the first time you activate the index, you must save the configuration and then restart the system for the changes to take effect. Once restarted, the ArchiHUB configuration will show the index status as active.

If the index checkbox becomes deactivated, it may be because the Elasticsearch service is not running or has not been configured correctly. Verify that the container is active and that the configuration is appropriate.

### How can I reindex my content in ArchiHUB?
If this is the first time you activate the index or if you have made significant changes to your content, it is recommended to reindex your files to ensure the index is up to date. To reindex, follow these steps:
1. Go to the ArchiHUB configuration section.
2. Look for the "Regenerate the index for resource search" option and click the corresponding button.
3. Confirm the action and wait for the reindexing process to complete. This process may take time depending on the number of files you have in your system.
4. Look for the "Reindex resources" option and click the corresponding button.
5. Confirm the action and wait for the reindexing process to complete.

This process may take time depending on the number of files you have in your system. Once finished, the index will be updated and ready for use in searches.
