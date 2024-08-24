const express = require('express');
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.listen(80);

const mariadb = require('mysql');

const conn = mariadb.createConnection(
  {
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '0000',
    database: 'webui'
  }
)

conn.connect((err) => {
  if (err) {
    console.error('MariaDB 연결 실패: ', err.stack);
    return;
  }
  console.log('MariaDB에 연결되었습니다. 연결 ID:', conn.threadId);
});

app.get('/', function (req, res) {
  res.sendfile(`studentPage.html`);
});

app.get('/studentRegister', function (req, res) {
  res.sendfile(`studentRegistration.html`);
});

app.get('/studentList', function (req, res) {
  conn.query('SELECT * FROM student', function (err, results) {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/registerStudent', function (req, res) {
  console.log(req.body);
  console.log(req.body.name);
  let name = req.body.name;
  let studentNumber = req.body.studentNumber;
  let residentRegistrationNumber = req.body.residentRegistrationNumber;
  let address = req.body.address;
  conn.query(`INSERT INTO student(name, studentNumber, residentRegistrationNumber, address) VALUES ('${name}','${studentNumber}','${residentRegistrationNumber}','${address}')`);
  res.redirect('/');
});

app.delete('/deleteStudent/:no', function (req, res) {
  console.log(req.params.no);
  let studentNo = req.params.no;
  conn.query(`DELETE FROM student WHERE no=${studentNo}`);
  res.send('삭제');
});

app.get('/studentListEach/:no', function (req, res) {
  console.log(req.params.no);
  let studentNo = req.params.no;
  conn.query(`SELECT * FROM student WHERE no=${studentNo}`, function (err, results) {
    if (err) {
      console.error(err);
    }
    res.json(results[0]);
  });
});

app.get('/studentUpdate', function (req, res) {
  res.sendfile(`studentUpdate.html`);
});
