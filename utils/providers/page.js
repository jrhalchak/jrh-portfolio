import mongoose from 'mongoose';
import Page from '../../models/page';

export default {
  getPageList: (callback)=> {
    Page.find({}, (err, results)=>{
      if(err) console.log(`Error: ${err}`);
      callback(err, results);
    });
  },
  getPageByTitle: (title, callback)=> {
    let caseless = new RegExp(`^${title.toLowerCase()}$`, 'i');

    Page.findOne({ title: caseless }, (err, result)=> {
      if(err) console.log(`Error: ${err}`);
      callback(err, result);
    });
  },
  getPageById: (id, callback)=> {
    Page.findOne({ _id: id }, (err, result)=> {
      if(err) console.log(`Error: ${err}`);
      callback(err, result);
    });
  }
};
