module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-mocha-test');

	grunt.initConfig({
		mochaTest: {
			test: {
				options: {
          timeout: 15000,
					reporter: 'spec'
				},
				src: ['test/**/*.js']
			}
		}
	});

	grunt.registerTask('test', [ 'mochaTest']);
};
