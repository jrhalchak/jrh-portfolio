import local from 'passport-local';
import db from 'db';
import bCrypt from 'bCrypt';

const LocalStrategy = local.Strategy;

export default (passport) => {
  passport.use('login',
    new LocalStrategy(
      {
        passReqToCallback: true
      },
      (req, user, pass, done)=> {
        
      }
    )
  );
};
