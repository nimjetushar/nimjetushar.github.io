var gulp = require("gulp"),
  del = require("del");

var filesToMove = [
  "./build/index.html",
  "./build/favicon/**",
  "./build/static/**",
  "./build/service-worker.js"
];

var fileToDelete = [
  "./index.html",
  "./favicon/**",
  "./static/**",
  "./service-worker.js"
];

gulp.task("default", ["clean", "move"], function() {
  console.log("Moving files from build folder");
});

gulp.task("move", function() {
  gulp.src(filesToMove, { base: "./build" }).pipe(gulp.dest("./"));
});

gulp.task("clean", function() {
  del(fileToDelete, { force: true });
});
