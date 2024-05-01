var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/', function (req, res){
  res.send("root")
});

app.get('/main', function(req,res){
  res.sendfile("main.html");
});

app.get('/main2', function(req, res){
  res.sendfile("main2.html");
});

app.get('/main3', function(req, res){
  res.sendfile("main3.html");
});

app.get('/qs', function(req, res){
  console.log(req.query);
  res.send(`your querystring is a: ${req.query.a}, b: ${req.query.b}, c : ${req.query.c}`);
});

app.get('/main4', function(req, res){
  res.sendfile("main4.html");
});

app.get('/main5', function(req, res){
  console.log(req.query);
  res.sendfile("main5.html");
});

app.get('/qsplus', function(req, res){
  console.log(req.query);
  let num1 = Number(req.query.num1);
  let num2 = Number(req.query.num2);
  let num3 = Number(req.query.num3);
  console.log(num1, num2, num3);
  let result = num1 + num2 + num3;
  res.send({result : result});

  // res.send(num1 + num2 + num3);

  // res.send("res");
});

app.get('/qsplus2', function(req, res){
  console.log(req.query);
  var numPlus = Number(req.query.num1)+Number(req.query.num2)+Number(req.query.num3);
  res.send(`${req.query.num1} + ${req.query.num2} + ${req.query.num3} = ${numPlus}`);
});



app.get('/main6', function(req, res){
  res.sendfile("main6.html");
});

app.get('/main7', function(req, res){
  res.sendfile("main7.html");
});


app.get('/qsplus3', function(req, res){
  console.log(req.query);

  // if(itemPrice>=500000){
  //   res.send("item7");
  // } else if(itemPrice>=100000){
  //   res.send("item6");
  // }else if(itemPrice>=50000){
  //   res.send("item5");
  // }else if(itemPrice>=30000){
  //   res.send("item4");
  // }else if(itemPrice>=10000){
  //   res.send("item3");
  // }else if(itemPrice>=5000){
  //   res.send("item2");
  // }else if(itemPrice>=1000){
  //   res.send("item1");
  // } else {
  //   res.send("구입불가");
  // }

  res.send(req.query.name);


});
