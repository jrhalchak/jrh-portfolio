import passport from 'passport';
import local from 'passport-local';
import db from '../../db';
import bCrypt from 'bcrypt-nodejs';
import providers from '../providers';
import user from '../../models/user';

const LocalStrategy = local.Strategy;

export default (passport) => {
  passport.use('login',
    new LocalStrategy(
      {
        passReqToCallback: true
      },
      (req, username, pass, done)=> {
        console.log(`user: ${username} - pass: ${pass}`);
        console.log(user);
        
        user.findOne({ $or: [{username: username}, {email: username}]}, (err, result)=>{
          if(!result) return done(null, false,{ loginMessage: 'No user found.' });

          if(bCrypt.compareSync(pass, result.password)) {
            return done(null, result);
          } else {
             return done(null, false, { loginMessage: 'Username or password is invalid.' });
          }
        });
      }
    )
  );
};
