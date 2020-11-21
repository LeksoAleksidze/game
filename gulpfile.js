'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleancss = require('gulp-cleancss');

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleancss({keepBreaks: false}))
    .pipe(gulp.dest('css'));
});
 
gulp.task('watch', function () {
  gulp.watch('scss/*.scss', gulp.parallel('sass'));
});