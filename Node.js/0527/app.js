const express = require('express');
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.listen(80);

const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost'
  , port: 3306
  , user: 'root'
  , password: '0000'
  , database: 'webui'
});

app.get('/', function (req, res) {
  res.sendfile(`newsListPage.html`);
});

app.get('/newsListPage', function (req, res) {
  res.sendfile(`newsListPage.html`);
});

app.get('/newsWritePage', function (req, res) {
  res.sendfile(`newsWritePage.html`);
});

app.get('/newsUpdatePage', function (req, res) {
  res.sendfile(`newsUpdatePage.html`);
});

app.get('/getAllNewsInfo', function (req, res) {
  let selectQuery = `select * from news;`
  connection.query(selectQuery,
    function (err, rows, fields) {
      if (err) {
        res.send(err);
        throw err;
      }
      else {
        res.send(rows);
      }
    }
  )
});

app.get('/getSingleNewsInfo', function (req, res) {
  let selectQuery = `select * from news where no=${req.query.no};`
  connection.query(selectQuery,
    function (err, rows, fields) {
      if (err) {
        res.send(err);
        throw err;
      }
      else {
        res.send(rows);
      }
    }
  )
});

app.post('/writeNews', function (req, res) {
  let insertQuery = `INSERT INTO news (title, content) VALUES ('${req.body.title}', '${req.body.content}');`
  connection.query(insertQuery,
    function (err, rows, fields) {
      if (err) {
        res.send(err);
        throw err;
      }
      else {
        res.send(rows);
      }
    }
  )
});

app.put('/updateNews', function (req, res) {
  let updateQuery = `UPDATE news set title='${req.body.title}', content='${req.body.content}' where no=${req.body.no};`
  connection.query(updateQuery,
    function (err, rows, fields) {
      if (err) {
        res.send(err);
        throw err;
      }
      else {
        res.send(rows);
      }
    }
  )
});

app.delete('/deleteSingleNews', function (req, res) {
  let deleteQuery = `DELETE from news where no = ${req.body.no};`
  connection.query(deleteQuery,
    function (err, rows, fields) {
      if (err) {
        res.send(rows);
        throw err;
      }
      else {
        res.send(rows);
      }
    }
  )
});
