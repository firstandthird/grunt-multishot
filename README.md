# grunt-multishot

> grunt plugin to create screenshots for multiple urls

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-multishot --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-multishot');
```

## The "multishot" task

### Dependencies

Multishot makes use of [webkit2png](http://www.paulhammond.org/webkit2png/).

```shell
brew install webkit2png
```

### Overview
In your project's Gruntfile, add a section named `multishot` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  multishot: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Usage Examples

```js
grunt.initConfig({
  multishot: {
    default: {
      temp: '/tmp/multishot/',
      output: '/tmp/multishot/',
      url: ['http://google.com', 'http://yahoo.com', 'http://facebook.com', 'http://digg.com', 'http://amazon.com']
    }
  },
})
```

#### Urls in a file

Urls must be separated by a new line.

```js
grunt.initConfig({
  multishot: {
    default: {
      temp: '/tmp/multishot/',
      output: '/tmp/multishot/',
      file: '/home/user/someurllist.txt'
    }
  },
})
```