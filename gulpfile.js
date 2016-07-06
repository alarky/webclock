'use strict';

var gulp = require("gulp");
var del = require("del");
var browserify = require("browserify");
var source = require("vinyl-source-stream");

var dest = "../webclock.pages";

gulp.task("clean", function(callback) {
    del(dest, callback);
});

gulp.task("html", function() {
    return gulp.src("src/**/*.html")
        .pipe(gulp.dest(dest));
});

gulp.task("js", function() {
    return browserify("src/js/script.js")
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest(dest));
});

gulp.task("css", function() {
    return gulp.src("src/css/**/*.css")
        .pipe(gulp.dest(dest));
});

gulp.task("build", ["html", "js", "css"]);

gulp.task("watch", function() {
    gulp.watch("src/css/**", ["css"]);
    gulp.watch("src/js/**", ["js"]);
    gulp.watch("src/**/*.html", ["html"]);
});