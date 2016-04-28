import gulp from 'gulp';
import babel from 'gulp-babel';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import livereload from 'gulp-livereload';
import nodemon from 'gulp-nodemon';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import Cache from 'gulp-file-cache';
import rename from 'gulp-rename';
import babelify from 'babelify';
import browserify from 'browserify';
import transform from 'vinyl-transform';

const styleEntries = ['./public/main/stylesheets/style.scss', './public/admin/stylesheets/style.scss'],
  scriptEntries = ['./public/main/javascripts/entries/entries.js'];

  //scriptEntries = ['./public/main/javascripts/layout.js'];

// styleWatch = ['./public/*.scss', './public/**/*.scss'],
// scriptWatch = ['./public/*.js', './public/**/*.js'],

gulp.task('scripts', ()=> {
  var br = transform((filename)=> {
    return browserify(filename)
      .transform('babelify', {presets: ['es2015','react']})
      .bundle();
  });

  return gulp.src(scriptEntries)
    .pipe(br)
    .pipe(uglify())
    .pipe(gulp.dest('./public/main'));
});

gulp.task('server', ()=> {
  return nodemon({
    script: './bin/www',
    ext: 'js scss css html ejs',
    tasks: ['scripts']
  });
});

gulp.task('default', ['scripts','server']);
