const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass")(require("sass"));

gulp.task("pug", function () {
  return gulp
    .src(["./src/pug/**/*.pug", "!./src/pug/**/_*.pug"])
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest("./public/"));
});

gulp.task("sass", function () {
  return gulp
    .src(["./src/scss/**/*.scss", "!./src/scss/**/_*.scss"])
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./public/css"));
});
