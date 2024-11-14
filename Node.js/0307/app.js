var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/test', function(req, res) {
  res.send("Hello World");
});

app.get('/test2', function(req, res) {
  res.send("test2");
});

app.get('/testhtml', function (req, res) {
  res.sendfile("test2");
});
