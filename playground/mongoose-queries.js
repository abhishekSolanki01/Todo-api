const{ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

var id = '5b23d7d241c9041005417112';

if(!ObjectID.isValid(id)){
  console.log("Id not valid");
}


User.findById(id).then((user) => {
  if(!user){
    return console.log('ID not found');
  }
  console.log(`user by ID ${user}`);
}, (e) => {
  console.log(e);
});
