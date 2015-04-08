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
                        vendor: [
                            'bower_components/angular/*min.js',
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
            },
            tsd: {
                refresh: {
                    options: {
                        // execute a command
                        command: 'reinstall',

                        //optional: always get from HEAD
                        latest: true,

                        // specify config file
                        config: 'tsd.json',

                        // experimental: options to pass to tsd.API
                        opts: {
                            // props from tsd.Options
                        }
                    }
                }
            },
            bower: {
                install: {
                    options: {
                        targetDir: './bower_components'
                    }
                }
            }
        }
    )

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-tsd');
    grunt.loadNpmTasks('grunt-bower-task');

    grunt.registerTask('default', ['typescript:base', 'jasmine']);
}
