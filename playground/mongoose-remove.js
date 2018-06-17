const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {Todo} = require('./../server/models/todos');

//Todo.remove({});---remove all
//Todo.findOneAndRemove().then((docs) =>{})
//findByIdAndRemove()
