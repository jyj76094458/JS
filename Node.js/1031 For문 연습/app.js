const express = require('express');
const bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.listen(80);

app.get('/', function (req, res) {
  res.sendfile(`main.html`);
});

app.get('/main2', function (req, res) {
  res.sendfile(`main2.html`);
});

app.get('/main3', function (req, res) {
  res.sendfile(`main3.html`);
});