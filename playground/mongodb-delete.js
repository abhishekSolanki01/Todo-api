const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo-app', (err, db) => {
  if (err){
    return console.log("Unable to connect to server");
  }
  console.log("db server connected");

  // db.collection('todos').findOneAndDelete({completed:false}).then((doc) => {
  //   console.log(doc)
  // });

  db.collection("Users").deleteMany({name:'mike'}).then((res) => {
    console.log(res);
  });

  db.collection("Users").findOneAndDelete({_id: ObjectId('5b2393176b376c03b119c6ee')}).then((res) => {
    console.log(res);
  });

  db.close();
});
