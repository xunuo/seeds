var gulp = require("gulp");
var jsdoc = require("gulp-jsdoc");

gulp.task('scripts', function() {

	return gulp.src("./js/*.js")
  		.pipe( jsdoc.parser() )
  		.pipe(jsdoc.generator('./destination'))
  		.pipe(gulp.dest('./documentation-output'));

});

gulp.start(['scripts']);