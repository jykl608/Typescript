const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const beautify = require('gulp-beautify');

exports.default = function() {
    return src('src/samples/scripts.js')
        .pipe(babel())
        .pipe(src('vendor/*.js'))
        .pipe(uglify())
        .pipe(dest('output'))
        .pipe(beautify.js())
        .pipe(dest('output/source'));
}