module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            meta: {
                package: grunt.file.readJSON('package.json'),
                src: {
                    main: 'src/main',
                    test: 'src/test'
                }
            },
            jasmine: {
                unit: {
                    src: ['src/main/**/*.js'],
                    options: {
                        specs: 'src/test/**/*Spec.js',
                        vendor: ['bower_components/jquery/*min.js',
                            'bower_components/angular/*min.js',
                            'bower_components/angular-resource/*min.js',
                            'bower_components/angular-mocks/*.js',
                            'bower_components/bootstrap/*min.js',
                            'bower_components/atmosphere/*min.js'],
                        keepRunner: true
                    }
                }
            },
            typescript: {
                base: {
                    src: ['src/main/**/*.ts', 'src/test/**/*.ts', 'src/integTest/**/*.ts'],
                    options: {
                        target: 'es5',
                        sourceMap: true
                    }
                },
                dist: {
                    src: ['src/main/ts/**/*.ts'],
                    dest: 'dist/js/webapp-tutorial.js',
                    options: {
                        module: 'commonjs',
                        target: 'es5',
                        declaration: true
                    }
                }
            }
        }
    )

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['typescript:base', 'jasmine']);
 }
