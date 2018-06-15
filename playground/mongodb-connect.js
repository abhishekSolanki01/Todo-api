const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Todo-app', (err, db) => {
  if(err){
    return console.log("Unable to connect db");
  }
  console.log('mongo server connected');

  // db.collection('todos').insertOne({
  //   text:'tasks to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log("error in connection ");
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


  db.collection('Users').insertOne({name:'abhishek',age:21,location:'dwarka'}, (err, res) => {
    if(err){
      return console.log("unable to insert todo");
    }
    console.log(JSON.stringify(res.ops, undefined,2));
  });

  db.close();
});
