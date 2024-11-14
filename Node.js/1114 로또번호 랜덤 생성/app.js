const express = require('express');
const bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.listen(80);

app.get('/', function (req, res) {
  res.sendfile(`main.html`);
});