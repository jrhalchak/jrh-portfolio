import express from 'express';
import stylus from 'stylus';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import partials from 'express-partials';
import passport from 'passport';
import initPassport from './utils/passport/init';
import session from 'express-session';

import routes from './routes/index';
import admin from './routes/admin';
import db from './db';

var app = express();

// view engine setup
app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app
  .use(logger('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, 'public')))
  .use(partials());

initPassport(passport);

app
  .use(session({ secret: process.env.SESSION_SECRET }))
  .use(passport.initialize())
  .use(passport.session());


// Routes
app
  .use('/', routes)
  .use('/admin', admin); // put middleware here


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

export default app;
