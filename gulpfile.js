const currentVersion = "1.5.0";

const moment = require("moment");
const runSequence = require("run-sequence");
const gulp = require("gulp");
const sass = require('gulp-dart-sass');
const replace = require("gulp-replace");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const minifyCSS = require("gulp-minify-css");
const connect = require("gulp-connect");
const newer = require("gulp-newer");
const htmlmin = require("gulp-htmlmin");
const header = require("gulp-header");

// build Scut
const distBanner =
  "/*\n* Scut, a collection of Sass utilities\n* to ease and " +
  "improve our implementations of common style-code patterns.\n* v" +
  currentVersion +
  "\n* Docs at http://davidtheclark.github.io/scut\n*/\n\n";

function build(cb) {
  gulp
    .src([
      // when order matters
      "src/layout/_clearfix.scss",
      "src/layout/_list-unstyled.scss",
      "src/layout/_list-floated.scss",
      "src/layout/_positioning-coords.scss",
      "src/functions/_strip-unit.scss",

      // the rest of them
      "src/**/*.scss",
    ])
    .pipe(concat("_scut.scss"))
    .pipe(header(distBanner))
    .pipe(gulp.dest("./dist/"));
  cb();
}

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.build = build;

exports.default = defaultTask;
