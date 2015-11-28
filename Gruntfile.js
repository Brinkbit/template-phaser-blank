'use strict';

module.exports = function initGrunt( grunt ) {
    require( 'load-grunt-tasks' )( grunt );

    grunt.initConfig({

        pkg: grunt.file.readJSON( 'package.json' ),

        eslint: {
            target: [ 'src/**/*.js', 'test/**/*.js', 'Gruntfile.js' ]
        }

    });
};
