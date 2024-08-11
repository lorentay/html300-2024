const {
    src,
    dest,
    parallel,
    series,
    watch,
    task
} = require('gulp');
const browserSync = require('browser-sync');
const server = browserSync.create();
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');


// Directories to watch.
// If watch & reload isn't working as expected, check that files you want watched can be found in these paths.
const paths = {
    scss: {src: './css/**/*.scss', dest: './css'},
    data: {src: './data/', dest: './data/'},
    js: {src: './*.js', dest: '.'},
    html: {src: './*.html', dest: '.'}
};



// Compile SCSS into CSS
task('sass', function() {
    return src('./css/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./css'))
        .on('end', function() {
            console.log('CSS file should be updated with sourcemaps.');
        });
});


// BrowserSync configuration
task('browserSync', function() {
    browserSync.init({
        server: './',
        notify: false
    });
})

// Watch for changes in scss, html, and js files, reloading page in browser when change is found.
task('watchFiles', function() {
    watch(paths.scss.src, parallel('sass')).on('change', browserSync.reload);
    watch(paths.html.src).on('change', browserSync.reload);
    watch(paths.js.src).on('change', browserSync.reload);
});

const watching = parallel('watchFiles', 'browserSync')

exports.default = watching