import express from 'express';
import passport from 'passport';
import local from 'passport-local';
import helpers from '../utils/passport/helpers';
import providers from '../utils/providers';

const router = express.Router(),
  localStrategy = local.Strategy;

const viewModel = {
  title: '',
  pageList: [],
  page: null,
  loginMessage: null,
  isIndex: false
};

router.get('/*', (req, res, next)=>{
  grabPages(()=> next());
});

/* GET home page. */
router.get('/', (req, res) => {
  viewModel.page = null;
  viewModel.isIndex = true;
  viewModel.title = 'JR Halchak Portfolio';
  res.render('index', viewModel);
});

router.get('/login', helpers.sendUserToApp, (req, res) => {
  viewModel.page = null;
  viewModel.isIndex = false;
  // Redirect to login/home if
  res.render('login', viewModel);
});

// Post to Login
router.post('/login', passport.authenticate('login', {
  successRedirect: '/admin',
  failureRedirect: '/login'
}));

router.get('/signout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/page/:pageTitle', (req, res)=>{
  viewModel.isIndex = false;
  providers.page.getPageByTitle(req.params.pageTitle, (err, result)=> {
    if(err) console.log(err);
    if(!result) {
      res.status(404).send('Not found!');
      return;
    }
    viewModel.title = result.title;
    viewModel.page = result;
    res.render('page', viewModel);
  });
});

function grabPages(callback) {
  providers.page.getPageList((err, pages)=> {
    if(err) console.log(`Error ${err}`);

    viewModel.pageList = pages;
    callback();
  });
}

export default router;
