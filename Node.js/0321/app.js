var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/test', function(req, res) {
  res.send("Hello World");
});

app.get('/', function(req, res) {
  res.sendfile("main.html");
});

app.get('/test2', function(req, res) {
  res.send("test2");
});

app.get('/testhtml', function (req, res) {
  res.sendfile("test2");
});

app.get('/input2', function (req, res){
  res.sendfile("input2.html");
});

app.get('/main', function(req, res){
  res.sendfile("main.html");
});

app.get('/main2', function(req, res){
  res.sendfile("main2.html");
});

app.get('/input3', function(req, res){
  res.sendfile("input3.html");
});

app.get('/for1', function(req, res){
  res.sendfile("for1.html");
});

app.get('/for2', function(req, res){
  res.sendfile("for2.html");
});

app.get('/main3', function(req, res){
  res.sendfile("main3.html");
});
