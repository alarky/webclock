'use strict';

var gulp = require("gulp");
var del = require("del");
var browserify = require("browserify");
var source = require("vinyl-source-stream");

gulp.task("clean", function(callback) {
    del("dist", callback);
});

gulp.task("html", function() {
    del("dist/**/*.html");
    return gulp.src("src/**/*.html")
        .pipe(gulp.dest("dist"));
});

gulp.task("js", function() {
    return browserify("src/js/script.js")
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist"));
});

gulp.task("css", function() {
    del("dist/css");
    return gulp.src("src/css/**/*.css")
        .pipe(gulp.dest("dist/css"));
});

gulp.task("build", ["html", "js", "css"]);

gulp.task("watch", function() {
    gulp.watch("src/css/**", ["css"]);
    gulp.watch("src/js/**", ["js"]);
    gulp.watch("src/**/*.html", ["html"]);
});