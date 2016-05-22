const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('default', ['watch']);

gulp.task('build-css', () => {
  return gulp.src('public/scss/**/*.scss')
    .pipe(sass({ errLogToConsole: true }))
    .pipe(concat('stylesheet.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', () => {
  gulp.watch('source/javascript/**/*.js', ['jshint', 'script-concat']);
  gulp.watch('source/scss/**/*.scss', ['build-css']);
});
