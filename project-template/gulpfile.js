'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const browserify = require('browserify');
const babelify = require("babelify");
const source = require('vinyl-source-stream');
const livereload = require('gulp-livereload');
const rename = require('gulp-rename');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');

// npm i gulp@3.9.1 gulp-sass gulp-livereload @babel/core @babel/preset-env browserify babelify browser-sync vinyl-source-stream gulp-rename vinyl-buffer gulp-imagemin
// npm -g install gulp
// npm -g install gulp-cli
// npm rebuild node-sass
// 10 Node npm install

const path = {
  build: {
    html: 'build/',
    js: 'build/',
    css: 'build/',
    img: 'build/img/',
    root: 'build/',
  },
  src: {
    html: 'src/*.html',
    js: 'src/js/app.js',
    scss: 'src/scss/**/*.scss',
    img: 'src/img/*',
    root: 'src/'
  }
}

gulp.task('build', ['html:build', 'css:build', 'js:build', 'img:build']);

gulp.task('html:build', function () {
  return gulp.src(path.src.html)
    .pipe(gulp.dest(path.build.html));
});

gulp.task('css:build', function () {
  livereload.listen();
  return gulp.src(path.src.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.build.css));
});

gulp.task('js:build', function () {
  return browserify({
      entries: [path.src.js]
    })
    .transform(babelify.configure({
      presets: ["@babel/preset-env"],
      sourceMaps: true,
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(path.build.js))
});

gulp.task('img:build', function () {
  return gulp.src(path.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(path.build.img));
});

gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: path.build.root,
    }
  });
	gulp.watch(['./src/scss/**/*.scss'], ['css:build']).on('change', browserSync.reload);
	gulp.watch(['./src/js/**/*.js'], ['js:build']).on('change', browserSync.reload);
	gulp.watch(['./src/*.html'], ['html:build']).on('change', browserSync.reload);
});

gulp.task("default", ["watch", "build"]);
