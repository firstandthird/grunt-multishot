module.exports = function(grunt) {

  grunt.initConfig({
    multishot: {
      default: {
        temp: '/tmp/multishot/',
        output: '/tmp/multishot/',
        url: ['http://google.com', 'http://yahoo.com']
      },
      prefix: {
        temp: '/tmp/multishot/prefix/',
        output: '/tmp/multishot/prefix/',
        prefix: 'test-prefix',
        url: ['http://google.com', 'http://yahoo.com']
      },
      groups: {
        temp: '/tmp/multishot/groups/',
        output: '/tmp/multishot/groups/',
        url: [
          {
            group: 'Google',
            url: 'http://google.com'
          },
          {
            group: 'Yahoo',
            url: 'http://yahoo.com'
          }
        ]
      },
      styles: {
        temp: '/tmp/multishot/styles/',
        output: '/tmp/multishot/styles/',
        styles: {
          background: 'pink',
          custom: '.url { text-decoration: underline; }'
        },
        url: ['http://google.com', 'http://yahoo.com']
      },
      userAgent: {
        temp: '/tmp/multishot/agent/',
        output: '/tmp/multishot/agent/',
        screenWidth: 320,
        screenHeight: 480,
        userAgent: 'iPhone',
        url: ['http://google.com', 'http://yahoo.com']
      }
    }
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['multishot']);
};
