const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style(){
    return gulp.src('./scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        // stream, changes to all browsers
        .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }        
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html', browserSync.reload);
    gulp.watch('./js/**/*.js', browserSync.reload);

}

exports.style = style;
exports.watch = watch;