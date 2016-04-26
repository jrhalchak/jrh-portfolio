import mongoose from 'mongoose';

let entrySchema = new mongoose.Schema({
  title: String,
  body: String,
  imageUrl: String,
  links: [String]
});

export default mongoose.model('entry', entrySchema);
