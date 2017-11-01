# Custom Theme Plugin for Kibana 5

This repository contains all source files for the first tutorial, from the book Kibana Plugin Development (https://leanpub.com/kibanaplugindevelopment).

* [About the Plugin](#about-the-plugin)
* [Installation](#installation)
* [Questions? Problems? Suggestions?](#questions-problems-suggestions)

## About the Plugin
A simple plugin which customizes the Kibana theme. The plugin will be loaded after the core application, so it might take a couple of milliseconds for the modifications to take effect.
This means you might see the original preloader flashing by. 

There are a couple of reasons for writing a plugin instead of customizing the core files, for example:

- it's easier to share the modifications and if you want to upgrade Kibana to another version;
- you don't have to remodify all files again;

A short demo:
![Demo custom theme inclusive preloader](img/demo.gif?raw=true "Demo custom theme inclusive preloader")

As you might notice from the GIF image, I've replaced the Kibana logo's (left top of the screen and the preloader) and some of the colours (left sidebar and the flashing preloader). The JavaScript will also replace the favicon, which isn't noticeable from the GIF image, but the code is included in this repo.

## Installation
```
cd KIBANA_HOME/plugins
git clone https://github.com/ErikvdVen/kpd-custom-theme.git kpd_custom_theme
cd kpd_custom_theme
```
> **Important**: If you have any problem with the plugin version (like a warning message "**it expected Kibana version "x.x.x", and found "x.x.x"**") only change the value of the "version" tag on the package.json to your Kibana version

### Uninstall:
```
cd KIBANA_HOME
rm -rf plugins/kpd_custom_theme/
```
## Questions? Problems? Suggestions?

- If you've found a bug or want to request a feature, please create a [GitHub Issue](https://github.com/ErikvdVen/kpd-custom-theme/issues/new). Please check to make sure someone else hasn't already created an issue for the same topic.
- Your are also free to join our [Gitter channel](https://gitter.im/kibanaplugindevelopment/Lobby), we are glad to help you out!
