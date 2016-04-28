import express from 'express';
import helpers from '../utils/passport/helpers';
import providers from '../utils/providers';

const router = express.Router(),
  viewModel = {
    pages: [],
    entries: []
  };

/* GET users listing. */
router.get('/', helpers.isAuthenticated, function(req, res, next) {
  providers.page.getPageList((err, result)=> {
    if(err) console.log(err);
    //get entries here
    viewModel.pages = result;
    res.render('admin/index', viewModel);
  });
});

router.get('/page/edit/:id', helpers.isAuthenticated, (req,res,next)=>{
  providers.page.getPageById(req.params.id, (err, result)=> {
    if(err) console.log(err);
    if(!result) {
      res.status(404).send('Not found!');
      return;
    } else {
      viewModel.pages[0] = result;
      res.render('admin/edit_page', viewModel);
    }
  });
});

router.post('/page/edit/:id', helpers.isAuthenticated, (req,res,next)=>{
  providers.page.getPageById(req.params.id, (err, result)=> {
    if(err) console.log(err);
    if(!result) {
      res.status(404).send('Not found!');
      return;
    } else {
      result.title = req.body.page_title || result.title;
      result.body =  req.body.page_body || result.body;
      result.pageType =  req.body.page_type || result.pageType;
      result.pageBgCSS =  req.body.page_bg_css || result.pageBgCSS;
      result.save();
      res.redirect('/admin');
    }
  });
});

export default router;
