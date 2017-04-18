'use strict';

const gulp = require('gulp');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function () {
    return gulp.src('styles/scss/_pswp.scss')
        .pipe(scss({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ['last 4 versions', 'Chrome <= 20','Firefox <= 20', 'Opera <= 20', 'Explorer <= 20', 'ie 6-8']
        }))
        .pipe(gulp.dest('styles/css'));
});

gulp.task('scss:watch', function () {
    gulp.watch('styles/scss/*.scss', ['css']);
});