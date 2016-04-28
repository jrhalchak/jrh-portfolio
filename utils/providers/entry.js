import mongoose from 'mongoose';
import Entry from '../../models/entry';

export default {
  getEntryList: (callback)=> {
    Entry.find({}, (err, results)=>{
      if(err) console.log(`Error: ${err}`);
      callback(err, results);
    });
  },
  getEntryById: (id, callback)=> {
    Entry.findOne({ _id: id }, (err, result)=> {
      if(err) console.log(`Error: ${err}`);
      callback(err, result);
    });
  }
};
