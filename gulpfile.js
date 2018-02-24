var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");
var zip = require('gulp-zip');
var runSequence = require('run-sequence');
var watch = require('gulp-watch');

gulp.task('run', () => runSequence('prefix', 'zip'));
gulp.task('prefix', () =>
    gulp.src('source/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('source/css/'))
);
gulp.task('zip', () =>
    gulp.src('source/**/**')
        .pipe(zip('archive.zip'))
        .pipe(rename("keksby.zip"))
        .pipe(gulp.dest(''))
);
gulp.task('watch', function() {
  gulp.watch('source/**/**', ['run']);
});
gulp.task('default', ['run', 'watch']);

