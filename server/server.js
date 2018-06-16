var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./db/models/todos');
var {User} = require('./db/models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  // console.log(req.body);

  var newTodo = new Todo(req.body);

  newTodo.save().then((docs) => {
    res.send(JSON.stringify(docs, undefined, 2));
  }, (e) => {
    res.status(400).send(e);

  });
});

app.listen(3000, () => {
  console.log("Started on port 3000");
});
