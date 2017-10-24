# kpd-custom-theme
This repository contains all source files for the first tutorial, from the book Kibana Plugin Development (https://leanpub.com/kibanaplugindevelopment).

A simple plugin which customizes the Kibana theme. The plugin will be loaded after the core application, so it might take a couple of milliseconds for the modifications to take effect.
This means you might see the original preloader flashing by. There are a couple of reasons for writing a plugin instead of customizing the core files, for example it's easier to share the modifications and if you want to upgrade Kibana to another version, you don't have to remodify all files again.

A short demo:
![Demo custom theme inclusive preloader](img/demo.gif?raw=true "Demo custom theme inclusive preloader")