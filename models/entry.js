import mongoose from 'mongoose';

let entrySchema = new mongoose.Schema({
  title: String,
  body: String,
  imageUrl: String,
  link: String,
  codeLink: String
});

export default mongoose.model('entry', entrySchema);
