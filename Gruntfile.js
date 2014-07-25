module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			options: {
				mangle: false
			},
			dist: {
				files: {
					'dogebutton.min.js': ['src/dogebutton.js']
				}
			}
		},
		less: {
			dist: {
				options: {
					paths: ["src/"],
					compress: true,
					cleancss: true,
				},
				files: {
					"dogebutton.min.css": "src/*.less"
				}
			}
		},
		autoprefixer: {
			dist: {
				src: 'dogebutton.min.css',
				dest: 'dogebutton.min.css'
			}
		},
		compress: {
		  main: {
			options: {
			  archive: 'dogebutton.latest.zip'
			},
			files: [
			  {src: ['*.min.css'], dest: 'dogebutton/', filter: 'isFile'}, // includes files in path
			  {src: ['*.min.js'], dest: 'dogebutton/', filter: 'isFile'}, // includes files in path
			]
		  }
		},		
		watch: {
			dist: {
				files:  ['static/css/less/*.less'],
				tasks: ['less', 'autoprefixer'],
				options: {
					spawn: false
				}
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compress');

	grunt.registerTask('default', ['uglify', 'less:dist', 'autoprefixer']);
}