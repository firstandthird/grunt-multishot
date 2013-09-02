module.exports = function(grunt) {

  grunt.initConfig({
    multishot: {
      default: {
        temp: '/tmp/multishot/',
        output: '/tmp/multishot/',
        url: ['http://google.com', 'http://yahoo.com', 'http://facebook.com', 'http://digg.com', 'http://amazon.com']
        // file: './node_modules/multishot/example/urls.txt'
      }
    }
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['multishot']);
};
