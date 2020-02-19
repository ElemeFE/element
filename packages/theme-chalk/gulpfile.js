'use strict';

const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
  return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      // Replace Autoprefixer browsers option to Browserslist config.
      // Use browserslist key in package.json or .browserslistrc file.
      // Using browsers option can cause errors. Browserslist config 
      // can be used for Babel, Autoprefixer, postcss-normalize and other tools.
      // If you really need to use option, rename it to overrideBrowserslist.
      // Learn more at:
      // https://github.com/browserslist/browserslist#readme
      // https://twitter.com/browserslist
      overrideBrowserslist: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./lib'));
}

function copyfont() {
  return src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/fonts'));
}

exports.build = series(compile, copyfont);
