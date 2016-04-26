import mongoose from 'mongoose';
import bCrypt from 'bcrypt-nodejs';
import User from '../../models/user';

export default {
  readById: (id, callback)=> {
    User.findOne({ _id: id }, (err, result)=>{
      if(err) console.log(`Error: ${err}`);
      callback(err, result);
    });
  }
  /*doesUserExist: (userData)=> {
    var { username, email } = userData;

    console.log(username || '', email || '');

    //User.findOne({$or: [{ username: username || ''},{email: email || ''}]}, (err, userResult) => {
    User.find({}, (err, userResult)=>{
      if(err) console.log(`Error finding user: ${err}`);
      console.log(userResult);
    });
  },
  addUser: ()=> {
    var testUser = new User({
      username: 'testing',
      password: bCrypt.hashSync('bacon', bCrypt.genSaltSync(10), null),
      name: 'Testy mctesterson',
      email: 'blah@blah.com',
      createdDate: new Date()
    });

    testUser.save((err)=> {
      if(err) console.log(err);
      console.log('saved user!');
    });
  }*/
};
