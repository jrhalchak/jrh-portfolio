import express from 'express';
import helpers from '../utils/passport/helpers';

const router = express.Router();

/* GET users listing. */
router.get('/', helpers.isAuthenticated, function(req, res, next) {
  res.send('respond with a resource');
});

export default router;
