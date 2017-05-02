# Ionic 3 Starter Template

This template is the tabs-starter with some additional work. It contains a set of different custom components and a simple http call to a JSON file.
Furthermore, it has search implemented with a loader that shows up before the data has been rendered.
There is no platform specific styling on any component other than the basic differences implemented in Ionic 3.

![Imgur](http://i.imgur.com/c7QHVQ3.gif)

## Getting Started

To begin using this template, choose one of the following options to get started:
* [Download the latest release here](https://github.com/kristofferandreasen/simple-ionic-3-app/archive/master.zip)
* Clone the repo: `git clone https://github.com/kristofferandreasen/simple-ionic-3-app.git`
* Fork the repo

## Project Structure

```
.
 ├── resources                    # Build files on the specific platforms (iOS, Android) and app icon + splash
 ├── src                          # This is where the app lives - *the main folder*
 ├── .editorconfig                # A helper file to define and maintain coding styles across environments
 ├── .gitignore                   # Specifies intentionally untracked files to ignore when using Git
 ├── .io-config.json              # Ionic ID
 ├── config.xml                   # Ionic config file
 ├── .ionic.config.json           # Global configuration for your Ionic app
 ├── package.json                 # Dependencies and build scripts
 ├── readme.md                    # Project description
 ├── tsconfig.json                # TypeScript configurations
 └── tslint.json                  # TypeScript linting options
```

### src directory
```
.
   ├── ...
   ├── src                       
   │   ├── app                    # This folder contains global modules and styling
   │   ├── assets                 # This folder contains images and the *data.json*
   |   ├── pages                  # Contains all the individual pages (home, tabs, category, list, single-item)
   |   ├── services               # Contains the item-api service that retrieves data from the JSON file
   |   ├── theme                  # The global SCSS variables to use throughout the app
   |   ├── declarations.d.ts      # A config file to make TypeScript objects available in intellisense
   |   ├── index.html             # The root index app file - This launches the app
   |   ├── manifest.json          # Metadata for the app
   │   └── service-worker.js      # Cache configurations
   └── ...
```


## Start the project
The project is started with the regular ionic commands.

1. Run `npm install` to install all dependencies.
2. Run `ionic serve` to start the development environment.
3. To build the project run `ionic build android` or `ionic build ios`. In order for you to build an iOS app, you need to run on MacOS.

An alternative is to emulate the app on a device or upload it to the ionic cloud. From here you can download the ionic view app and use the app on all devices.

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/kristofferandreasen/simple-ionic-3-app/issues) here on Github.

## Creator

The template was created by and is maintained by **[Kristoffer Andreasen](https://medium.com/@kristoffer_andreasen)**

## Copyright and License

Copyright 2017 Kristoffer Andreasen. Code released under the [MIT](https://github.com/kristofferandreasen/simple-ionic-3-app/blob/master/LICENSE) license.
