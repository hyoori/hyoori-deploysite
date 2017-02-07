// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            sass: {
                files: 'src/sass/*.sass',
                tasks: ['sass','autoprefixer']
            },
            pug: {
                files: 'src/pug/*.pug',
                tasks: ['pug']
            }
        },

        pug: {
          compile: {
            options: {
              data: {
                debug: false
              }
            },
            files: [{
                expand: true,
                cwd: 'src/pug/',     // Parent folder of original CSS templates
                src: '*.pug',             // Collects all `*.css` files within the parent folder (and its subfolders)
                dest: 'build/',         // Stores the collected `*.css` files in your `src/css/` folder
                ext: '.html'
              }]
          }
        },

        sass: {
            dev: {
                files: {
                    'build/css/style.css': 'src/sass/style.sass'
                }
            }
        },

        autoprefixer: {
            options: {
              browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            your_target: {
                files: 'build/css/*.css'
            },
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'build/css/*.css',
                        'build/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './build',
                    notify: false,
                    port: 7000
                }
            }
        }


    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};