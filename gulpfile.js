const { src, dest} = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('delete');
// import cache from 'gulp-cache';
const cache = require('gulp-cache');

// exports.default = function() {
//     console.log('-------- default ---------');
//     return src('./src/samples/*.js')
//         .pipe(babel())
//         .pipe( src('./vendor/*.js') )
//         .pipe( dest('./output') )
//         .pipe( uglify() )
//         .pipe( rename({
//             extname: '.min.js'
//         }))
//         .pipe(dest('./output/minified'))
// }

exports.default = function(cb) {
    console.log('-------- default task ---------');
    cb();
}

exports.clear = function(cb) {
    console.log('-------- clear ---------');
    cache.clearAll();  
    cb();  
}

// del all .js files except
// ./vendor and gulpfile.js
exports.cleanTest = function() {
    console.log('-------- cleanTest ---------');
    return new Promise((resolve) => {
        del([  '**/*.js',  '!gulpfile.js',  '!./vendor/*.js'  ], function(){
            console.log('cleanTest() done');
        });
        resolve();
    })
}

exports.clean = function() {
    console.log('-------- clean ---------');
    return new Promise((resolve) => {
        del(['./dist'], function(){
            console.log('./dist deleted');
        });
        resolve();
    });
}

