module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['Gruntfile.js', 'js/sample.js']
        },

        uglify: {
            build: {
                files: [{
                    'dist/js/sample.min.js': 'js/sample.js'
                }],
                options: {
                    mangle: true,
                    beautify: false,
                    sourceMap: true,
                    compress: true
                }
            }
        },

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'scss',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }],
                sourcemap: true,
                compass: true,
            }
        },


        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['jshint', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        }

    });

    // grunt.loadNpmTasks('grunt-bower');
    // grunt.loadNpmTasks('grunt-bower-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-compass');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-watch');


    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'watch']);

};