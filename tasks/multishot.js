/*
 * grunt-multishot
 * https://github.com/firstandthird/grunt-multishot
 */

var fs = require('fs');
var Screenshot = require('multishot').Screenshot;
var ProgressBar = require('progress');

module.exports = function(grunt) {
  grunt.registerMultiTask('multishot', 'Create screenshots for multiple urls.', function() {
    var done = this.async();
    var urls = [];
    var options = {};

    if(this.data.url) {
      urls = this.data.url;
      if(typeof urls === "string") {
        urls = [urls];
      }
    } else if(this.data.file) {
      urls = fs.readFileSync(this.data.file, 'utf8');

      if(!urls) {
        grunt.log.error('Error reading file');
        process.exit(1);
      }

      urls = urls.split('\n');
    }

    var bar = new ProgressBar(' Rendering images [:bar] :percent :etas', {
      complete: '=',
      incomplete: ' ',
      width: 50,
      total: urls.length + 1
    });

    options.output = this.data.output;
    options.temp = this.data.temp;
    options.template = this.data.template;
    options.styles = this.data.styles;
    options.prefix = this.data.prefix;
    options.additional = {
      width: this.data.screenWidth,
      height: this.data.screenHeight,
      agent: this.data.userAgent
    };

    var shot = new Screenshot(urls, options);

    shot.on('progress', function() {
      bar.tick();
    });

    shot.on('complete', function(file) {
      grunt.log.writeln(' ');
      grunt.log.writeln('File saved to: ' + file);
      done();
    });

    shot.on('err', function(err) {
      grunt.log.error(err);
      done();
    });

    shot.start();
  });
};
