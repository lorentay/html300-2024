const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Paths to your SCSS and CSS files
const paths = {
  scss: './scss/**/*.scss',
  css: './styles',
};

// Compile SCSS to CSS
function compileSCSS() {
  return gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.css));
}

// Watch files for changes
function watchFiles() {
  gulp.watch(paths.scss, compileSCSS);
}

// Define Gulp tasks
const build = gulp.series(compileSCSS);
const watch = gulp.series(build, watchFiles);

exports.build = build;
exports.watch = watch;
exports.default = watch;
