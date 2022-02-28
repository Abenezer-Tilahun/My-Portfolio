var gulp = require('gulp');
var bs = require('browser-sync').create();


gulp.task('browser-sync', function () {
    bs.init({
        server: {
            baseDir: "./"
        },
        port: 5000,
        reloadOnRestart: true
    });
});

gulp.task('watch', function () {
    gulp.watch('./**/*', gulp.series(bs.reload));
});

gulp.task(
    'default',
    gulp.series(gulp.parallel('browser-sync', 'watch'))
);