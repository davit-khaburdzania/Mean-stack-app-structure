module.exports = function (grunt) {
  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['tests/**/*.js']
      }
    },
    
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          'public/styles/css/main.css': 'public/styles/less/main.less'
        }
      }
    },

    watch: {
      less: {
        files: 'public/styles/less/*.less',
        tasks: 'less'
      }
    }
  });

  grunt.registerTask('set_globals', 'sets global variables variable', function () {
    global._ = require('underscore');
    global.mongoose = require('mongoose');
    global.app_path = __dirname;
    global.config = require(app_path + '/helpers/general').get_config();
    global.helper = require(app_path + '/helpers/tests');
    global.Models = require(app_path + '/models')(config.get('TEST_DB'));
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  
  grunt.registerTask('test', ['set_globals', 'mochaTest']);
};
