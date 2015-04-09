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
                    // make sure Application.js is loaded before others
                    src: ['src/main/**/Application.js', 'src/main/**/*.js'],
                    options: {
                        specs: 'src/test/**/*Spec.js',
                        vendor: [
                            'bower_components/angular/*min.js',
                            'bower_components/angular-resource/*min.js',
                            'bower_components/angular-mocks/*.js'
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
