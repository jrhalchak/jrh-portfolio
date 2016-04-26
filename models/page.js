import mongoose from 'mongoose';

let pageSchema = new mongoose.Schema({
  title: String,
  body: String,
  pageType: String
});

export default mongoose.model('page', pageSchema);
