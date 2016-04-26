import mongoose from 'mongoose';

let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    email: String,
    createdDate: Date
  });

export default mongoose.model('user', userSchema);
