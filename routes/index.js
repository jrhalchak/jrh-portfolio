import express from 'express';
import passport from 'passport';
import local from 'passport-local';
import helpers from '../utils/passport/helpers';
import providers from '../utils/providers';

const router = express.Router(),
  localStrategy = local.Strategy;

const viewModel = {
  title: 'JR Halchak Portfolio',
  loginMessage: ''
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', viewModel);
});

router.get('/login', helpers.sendUserToApp, function(req, res, next) {
    // Redirect to login/home if
    res.render('login', viewModel);
});

// Post to Login
router.post('/login', passport.authenticate('login', {
    successRedirect: '/admin',
    failureRedirect: '/login'
}));

export default router;
