import mongoose from 'mongoose';

var dbURI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD + process.env.DB_PATH}`;
console.log(dbURI);

mongoose.connect(dbURI, { keepAlive: 1000, connectTimeoutMS: 30000 });

mongoose.connection
  .on('connected', ()=> console.log(`Mongoose connected ${dbURI}`))
  .on('disconnected', ()=> console.log(`Mongoose disconnected`))
  .on('error', (err)=> console.log(`Mongoose error: ${err}`));

process.on('SIGINT', ()=> {
  mongoose.connection.close(()=> {
    console.log('Mongoose default connection disconneccted through app termination');
    process.exit(0);
  });
});
