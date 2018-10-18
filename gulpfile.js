var gulp = require("gulp");
var filesToMove = ["./build/index.html", "./build/favicon/**/*.*"];

gulp.task("default", ["move"], function() {
  console.log("Moving files from build folder");
});

gulp.task("move", function() {
  gulp.src(filesToMove, { base: "./" }).pipe(gulp.dest("./"));
});
