var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
    gulp.src('assets/sass/*')
        .pipe(sass({includePaths: ['assets/sass']}))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["assets/css/*.css", "assets/js/*.js", "app/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('serve', ['sass', 'browser-sync'], function () {
    gulp.watch("assets/sass/*/*.scss", ['sass']);
});