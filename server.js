var express = require('express')
var app = express();

app.get('/', function (req, res) {
  res.send('hello world');
})


app.get('/:id', function (req, res) {
  res.send('hello world'+req.params.id);
})


app.post("/", function (req, res) {
  res.send('hello post');
})
