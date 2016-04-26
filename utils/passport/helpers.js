export default {
  isAuthenticated: function(req, res, next) {
    if(req.isAuthenticated()){
      return next();
    } else {
        res.redirect('/login');
    }
  },
  sendUserToApp: function(req, res, next) {
    if(!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/admin');
    }
  }
};
