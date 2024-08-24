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

app.get('/main4', function(req, res){
  res.sendfile("main4.html");
});

app.get('/main5', function(req, res){
  res.sendfile("main5.html");
});

app.get('/main6', function(req, res){
  res.sendfile("main6.html");
});

app.get('/main7', function(req, res){
  res.sendfile("main7.html");
});