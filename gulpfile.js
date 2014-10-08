var gulp = require('gulp'),
    sass = require('gulp-sass');
    /*minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat');*/

/* Convert scss to css */
gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

/* concat css files
gulp.task('concat-css', function() {
    gulp.src('./assets/css/*.css')
        .pipe(concat('ah.css'))
        .pipe(gulp.dest('./assets/tmp'))
});*/

/* minimize css
gulp.task('minify-css', function() {
    gulp.src('./assets/tmp/ah.css')
        .pipe(minifyCSS({keepBreaks:false}))
        .pipe(gulp.dest('./public/'))
});*/

gulp.task('default', [
    'sass'
    /*'concat-css',
    'minify-css'*/
]);