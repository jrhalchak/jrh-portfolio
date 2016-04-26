import providers from '../providers';
import login from './login';

export default (passport) => {
  // Passport needs to be able to serialize and deserialize users to support persistent login sessions
  passport.serializeUser((user, done) => {
    console.log('serializing user: ' + user.username);
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    providers.user.readById(id, (err, user) => {
      console.log('deserializing user: ' + user.username);
      done(err, user);
    });
  });

  // Setting up Passport Strategies for Login and SignUp/Registration
  login(passport);
};
