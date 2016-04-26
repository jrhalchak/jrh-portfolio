import mongoose from 'mongoose';

const dbURI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD + process.env.DB_PATH}`,
  dbOptions = {
    server: { socketOptions: { keepAlive: 1000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1000, connectTimeoutMS: 30000 } }
  };

mongoose.connect(dbURI, dbOptions);

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
