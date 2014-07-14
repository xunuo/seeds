var gulp = require('gulp');
var jsdoc = require("gulp-jsdoc");

var opts = {
	showPrivate: true,
	monospaceLinks: true,
	cleverLinks: true,
	outputSourceFiles: true
};

var tpl = {
    path: '/Users/snow/Desktop/testdoc/jsdoc/node_modules/gulp-jsdoc/node_modules/jsdoc/templates/new',
    systemName      : 'snow test jsdoc',
    footer          : 'Generated with gulp',
    copyright       : 'Copyright WebItUp 2014',
    navType         : 'vertical',
    theme           : 'journal',
    linenums        : true,
    collapseSymbols : false,
    inverseNav      : false
 };


gulp.task('doc-inked', function() {

  gulp.src([
    'README.md',
    'index.js',
    'lib/**/*.js',
    'src/*.js'
  ])
  // Then parse
  .pipe(jsdoc.parser({
    name: 'testJSDOC',
    description: 'hello it is me',
    version: '1.0.1',
    licenses: 'APACHE'
  }))
  // Then generate the documentation and
  .pipe(jsdoc.generator('./doc/jsdoc-inked', tpl, opts));

});


gulp.task('default', function () {

  gulp.run('doc-inked');

  gulp.watch([
      './src/*',
      ], function(event) {
      gulp.run('doc-inked');
  });

});


gulp.start('default');