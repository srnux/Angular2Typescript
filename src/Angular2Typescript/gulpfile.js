/// <binding ProjectOpened='ts-compile' />
var gulp = require("gulp"),
    ts = require("gulp-typescript"),
    clean = require("gulp-clean"),
    merge = require("merge"),
    fs = require("fs"),
    jshint= require("gulp-jshint");

var project = {
    wwwroot: "./wwwroot/"
};

var paths = {
    npm: "./node_modules/",
    lib: project.wwwroot + "lib/",
    tsSource: "./scripts/**/*.ts",
    tsOutput: project.wwwroot ,
    tsDef: "./scripts/definitions/"
};

var tsProject = ts.createProject("./scripts/tsconfig.json", { typescript: require("typescript") });

gulp.task("ts-compile", function () {
    console.log(tsProject);

    var tsResult = gulp.src(paths.tsSource)
                    .pipe(ts(tsProject));

    return merge([
        tsResult.dts.pipe(gulp.dest(paths.tsDef)),
        tsResult.js.pipe(gulp.dest(paths.tsOutput))
    ]);
});

gulp.task("watch", ["ts-compile"], function () {
    gulp.watch(paths.tsDef, ["ts-compile"]);
});

gulp.task("clean", function() {
    gulp.src(paths.lib).pipe(clean());
});


gulp.task("copy", function () {
    var libs = [
        paths.npm + "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
        paths.npm + "angular2/bundles/angular2.dev.js",
        paths.npm + "angular2/bundles/angular2-polyfills.js",
        paths.npm + "rxjs/bundles/rx.js",
        paths.npm + "systemjs/dist/system.js", 
        paths.npm + "es6-shim/es6-shim.js"
    ];

    gulp.src(libs).pipe(gulp.dest(paths.lib));
});

//gulp.task("copy", function () {
//    var bower = {
//        "bootstrap": ["bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}"],
//        //"angular2": ["angular2/bundles/angular2.min.js","angular2/bundles/angular2.dev.js", "angular2/bundles/angular2-polyfills.js"],
//        "angular2": ["angular2/bundles/*.js", "angular2/bundles/angular2.dev.js", "angular2/bundles/angular2-polyfills.js"],
//        "Rx": ["rxjs/bundles/rx.js"],
//        "SystemJs": ["systemjs/dist/system.js", "systemjs/dist/system.src.js"],
//        "ES6Shim": ["es6-shim/es6-shim.js"]

//    };

//    for (var destinationDir in bower) {
//        console.log(bower[destinationDir]);
//        var sourceArray = bower[destinationDir];
//        for (var src in sourceArray) {
//            console.log(src + " " + sourceArray[src]);
            
//            gulp.src(paths.npm + sourceArray[src])
//                .pipe(gulp.dest(paths.lib + destinationDir));
//        }
//    }
//});