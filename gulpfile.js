var gulp = require("gulp");
var del = require("delete");
var ts = require("gulp-typescript");
var tsProject = ts.createProject({
    declaration: true,
    noImplicitAny: true,
    target: "es5"
});

gulp.task("copy-html", function(){
    return gulp.src(['./src/index.html'])
        .pipe(gulp.dest("./dist"))
});

// https://stackoverflow.com/questions/43472778/typescript-exports-is-not-defined
gulp.task("default",  gulp.series( gulp.parallel("copy-html"), function(cb) {
    return gulp.src(['./src/scripts/**/*.ts'])
        .pipe(tsProject())
        .js
        .pipe(gulp.dest("./dist/scripts"))
}));

// gulp.task("task1", function(cb) {
//     console.log('----- task 1 -----');
//     cb();
// });

// gulp.task("default", gulp.series( gulp.parallel("task1"), function(cb){
//     console.log("----- default -----");
//     cb();
// }));

gulp.task("clean", function(cb) {
    // console.log('clean');
    del(['./dist'], function(err, deleted){
        if (err) {
            console.log('Error', err);
        }
        console.log('Deleted', deleted);
    });
    cb();
});
