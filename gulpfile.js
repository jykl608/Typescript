const { src, dest} = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('delete');

exports.default = function() {
    console.log('-------- default ---------');
    return src('./src/samples/*.js')
        .pipe(babel())
        .pipe( src('./vendor/*.js') )
        .pipe( dest('./output') )
        .pipe( uglify() )
        .pipe( rename({
            extname: '.min.js'
        }))
        .pipe(dest('./output/minified'))
}

// exports.delete = async function() {
//     console.log('-------- delete ---------');
//     del(['./output'], function(){
//         console.log('./output deleted');
//     })
// }
exports.delete = function() {
    console.log('-------- delete ---------');
    return new Promise((resolve) => {
        del(['./output'], function(){
            console.log('./output deleted');
        });
        resolve();
    });
}