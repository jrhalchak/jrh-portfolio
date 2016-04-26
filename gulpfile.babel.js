import gulp from 'gulp';
import babel from 'gulp-babel';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import livereload from 'gulp-livereload';
import nodemon from 'gulp-nodemon';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import Cache from 'gulp-file-cache';

const styleEntries = ['./public/main/stylesheets/style.scss', './public/admin/stylesheets/style.scss'],
  scriptEntries = ['./public/main/javascripts/layout.js'];

// styleWatch = ['./public/*.scss', './public/**/*.scss'],
// scriptWatch = ['./public/*.js', './public/**/*.js'],

gulp.task('scripts', ()=> {

});

gulp.task('default', ()=> {
  nodemon({
    script: './bin/www',
    ext: 'js scss css html ejs',
    tasks: []
  });
});
