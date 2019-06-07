const { series } = require('gulp');

function minify(cb) {
    console.log('--- minify() ---');
    cb();
}

function transpile(cb) {
    console.log('--- transpile ---');
    cb();
}

function livereload(cb) {
    console.log('--- livereload ---');
    cb();
}

if (process.env.NODE_ENV === 'production') {
    exports.build = series(transpile, minify);
} else {
    exports.build = series(transpile, livereload);
}

// https://gulpjs.com/docs/en/getting-started/async-completion

// var gulp = require("gulp");
// var browserify = require("browserify");
// var source = require("vinyl-source-stream");
// var tsify = require("tsify");
// var sourcemaps = require("gulp-sourcemaps");
// var buffer = require("vinyl-buffer");
// var paths = {
//     pages: ["src/*.html"]
// }

// gulp.task("copy-html", function(){
//     return gulp.src(paths.pages).pipe(gulp.dest("dist"));
// });

// gulp.task("default", gulp.series( gulp.parallel("copy-html"), function() {
//     return browserify({
//         basedir: '.',
//         debug: true,
//         entries: ['src/main.ts'],
//         cache: {},
//         packageCache: {}
//     })
//     .plugin(tsify)
//     .transform("babelify", {
//         presets: ["es2015"],
//         extensions: [".ts"]
//     })
//     .bundle()
//     .pipe(source("bundle.js"))
//     .pipe(buffer())
//     .pipe(sourcemaps.init({loadMaps: true}))
//     .pipe(sourcemaps.write("./"))
//     .pipe(gulp.dest("dist"));
// }));
