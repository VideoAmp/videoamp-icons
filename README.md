# [VideoAmp Icons](http://icons.videoamp.design/)
A suite of [Material Design](https://material.io) inspired icons used in the VideoAmp Console.
These icons were created by [Kaleho Naki](https://github.com/blueishh).


## Installing
Assuming you have [NodeJS](http://nodejs.org/), [NPM](https://www.npmjs.com/), [yarn](https://yarnpkg.com/en/), and [Bower](http://bower.io/) installed globally just open up a terminal, navigate to your projects root directory and then execute

### Install via Bower
```
$ bower install videoamp-icons --save
```

### Install via Yarn
```
$ yarn add @videoamp/videoamp-icons
```


## Usage

### Usage via Bower

There are several files in the `css/` subdirectory. Import them in your project
to have access to "videoamp-icons" font face:

* `videoamp-icons.css` - whole font family compiled to CSS
* `videoamp-icons.less` - whole font family in LESS


### Usage via Yarn

Add this line into your CSS

`@import "../node_modules/@videoamp/videoamp-icons/style.css";`

If your project is WebPack configured, it should automatically compile into the correct folder when building your project


### HTML (using CSS classes)
`<span class="va-icon va-icon-channel_video"></span>`

### HTML (using ligatures)
`<span class="va-icon">va_channel_video</span>`



## Glyphs
List of available glyphs can be found on the [home page](http://icons.videoamp.design/)


## Contact
[VideoAmp Front End](mailto:frontend@videoamp.com)


## License
Copyright (c) 2017 VideoAmp and [other contributors](https://github.com/VideoAmp/videoamp-icons/graphs/contributors).
Licensed under the MIT License