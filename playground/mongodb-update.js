const {MongoClient, ObjectId} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo-app', (err,db) => {
  if(err){
    return console.log("Unable to connect to mongodb server");
  }
  console.log("connected to mongodb server");

  // db.collection('todos').findOneAndUpdate({
  //     _id: new ObjectId('5b23a35409006650a171c062')
  //   }, {
  //     $set:{
  //       completed: true
  //     }
  //   },{
  //     returnOriginal:false
  //   }).then((result) => {
  //     console.log(result);
  //   });


  db.collection("Users").findOneAndUpdate({
    _id : new ObjectId('5b2392d7aff3f903b0b8b605')
  },{
    $set: {
      name:'abhishek'
    },
    $inc:{
      age: 1
    }
  }, {
    returnOriginal:false
  }).then((res) => {
    console.log(res);
  });


});
