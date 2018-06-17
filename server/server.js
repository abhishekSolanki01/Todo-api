const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/user');

const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  // console.log(req.body);

  var newTodo = new Todo(req.body);

  newTodo.save().then((docs) => {
    res.send(docs);
  }, (e) => {
    res.status(400).send(e);

  });
});



app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    res.status(404).send();
  };

  Todo.findById(id).then((todo) => {
      if(!todo){
        res.status(402).send();
      }
      res.send({todo});
    },(e) => {
      res.status(404).send();
    });
});



app.delete('/todos/:id', (req, res)=>{
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send(todo);
  }).catch((e) => {
    res.status(404).send();
  });
});


app.patch('/todos/:id', (req,res) => {
  var id = req.params.id;

  var body = _.pick(req.body,['text', 'completed']);

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  }else{
    body.completedAt = null;
    body.completed = false;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo)=>{
    if(!todo){
      return res.status(400).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });

});


app.listen(port, () => {
  console.log(`Started on port ${port}`);
});




module.exports = {app};
