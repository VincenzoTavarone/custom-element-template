let gulp = require('gulp');
let concat = require('gulp-concat');
let del = require('del');

gulp.task('default', () => {
    return gulp.src([
        './dist/*/main.*.js'
    ]).pipe(concat('rename_me.js')).
        pipe(gulp.dest('./dist-production'));
});

gulp.task('delete', () => {
    return del([
        './dist/**',
        './dist-production/**'
    ]);
})