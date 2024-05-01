var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/', function (req, res){
  res.send("root")
});

app.get('/main2', function(req, res){
  res.sendfile("main2.html");
});

app.get('/main3', function(req, res){
  res.sendfile("main3.html");
});

