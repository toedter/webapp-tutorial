module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            jasmine: {
                unit: {
                    src: ['src/main/**/*.js'],
                    options: {
                        specs: 'src/test/**/*Spec.js',
                        vendor: [
                            'bower_components/angular/*min.js',
                            'bower_components/angular-mocks/angular-mocks.js'
                        ],
                        keepRunner: true
                    }
                }
            },
            typescript: {
                base: {
                    src: ['src/main/**/*.ts', 'src/test/**/*.ts'],
                    options: {
                        target: 'es5',
                        sourceMap: true
                    }
                }
            }
        }
    )

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['typescript:base', 'jasmine']);
}
