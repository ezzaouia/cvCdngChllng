'use strict'

const
  gulp = require('gulp'),
  browserify = require('gulp-browserify')

// browserify() index.js and put it in ./bin directory 
gulp.task('browserify', function () {
  return gulp
    .src('./index.js')
    .pipe(browserify())
    .pipe(gulp.dest('./bin'))
})

// watch for any change in any *.js file if so, run browserify
gulp.task('watch', function () {
  gulp.watch(['./*.js'], ['browserify'])
})