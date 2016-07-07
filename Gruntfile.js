module.exports = function(grunt) {
    require('time-grunt')(grunt);
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: {
                src: ['js/*.js']
            }
        },
        concat: {
            files: {
                src: ['js/*.js'],
                dest: 'js/scripts.js'
            }
        },
        uglify: {
            scripts: {
                src: ['js/*.js'],
                dest: 'js/scripts.min.js'
            }
        },
        cssmin: {
            files: {
                src: ['css/style.css'],
                dest: 'css/style.min.css'
            }
        },
        imagemin: {
            all: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'static/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'assets/img/'
                }]
            }
        },
        'http-server': {
           dev: {
                root: './',
                port: 8282,
                host: "127.0.0.1"
            }
        },
        watch: {
            scss: {
                tasks: ['sass']
            },
            js: {
                tasks: ['jshint']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
    	'http-server'
    ]);
    grunt.registerTask('test', []);

};
