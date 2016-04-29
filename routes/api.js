import express from 'express';
import helpers from '../utils/passport/helpers';
import providers from '../utils/providers';

const router = express.Router();

/* GET users listing. */
router.get('/entries', function(req, res, next) {
  providers.entry.getEntryList((err, results)=> {
    if(err) console.log(err);

    res.json(results);
  });
});

export default router;
