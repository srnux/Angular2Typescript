/// <binding ProjectOpened='ts-compile' />

var gulp = require("gulp"),
    ts = require("gulp-typescript"),
    merge = require("merge"),
    fs = require("fs");
    //project = require("./project.json");

//eval("var project = " + fs.readFileSync("./project.json"));

//var project = require("./project.json");
//var lib = project.wwwroot + "/lib";
var project = {
    wwwroot: "./wwwroot/"
};

var paths = {
    npm: "./node_modules/",
    lib: project.wwwroot + "/lib/",
    tsSource: "./TypeScript/**/*.ts",
    tsOutput: project.wwwroot + "/scripts/",
    tsDef: "./TypeScript/definitions/"
};

var tsProject = ts.createProject({
    declarationFiles: true,
    noExternalResolve: false,
    module: "AMD",
    removeComments: true
});

gulp.task("ts-compile", function () {
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