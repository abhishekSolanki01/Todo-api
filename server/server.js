var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

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







app.listen(port, () => {
  console.log(`Started on port ${port}`);
});




module.exports = {app};
