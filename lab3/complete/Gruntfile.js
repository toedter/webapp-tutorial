module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            typescript: {
                base: {
                    src: ['src/main/**/*.ts', 'src/test/**/*.ts'],
                    options: {
                        target: 'es5',
                        sourceMap: true
                    }
                }
            },
            jasmine: {
                unit: {
                    src: ['src/main/**/*.js'],
                    options: {
                        specs: 'src/test/**/*.spec.js',
                        keepRunner: true
                    }
                }
            }
        }
    )

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['typescript', 'jasmine']);
 }
