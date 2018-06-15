const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo-app', (err, db) => {
  if(err){
    return console.log("Unable to connect to db");
  }
  console.log('connected to mdb server');
  //
  // db.collection('todos').find({_id:new ObjectId("5b2395e709006650a171bcf6")}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('unable to fetch todos',err);
  // });


    // db.collection('todos').find().count().then((count) => {
    //   console.log('todos count',count);
    //   console.log(JSON.stringify(,undefined,2));
    // }, (err) => {
    //   console.log("unable to count");
    // });

    db.collection('Users').find({name:'abhishek'}).toArray().then((doc) => {
      console.log(JSON.stringify(doc,undefined,2));
    },(err) => {
      console.log("unable to fetch",err);
    });

  // db.close();
});
