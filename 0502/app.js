var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
app.use(express.json());

app.get('/mid1', function (req, res){
  res.sendfile("mid1.html")
});

app.get('/mid2', function (req, res){
  res.sendfile("mid2.html")
});

app.get('/mid3', function (req, res){
  res.sendfile("mid3.html")
});

app.get('/mid4', function (req, res){
  res.sendfile("mid4.html")
});

app.get('/qs', function(req, res){

// console로 querystring 확인

  console.log(req.query);

  let height=req.query.height;
  let weight=req.query.weight;
  let result="";

/* 키가 180cm이고 몸무게가 70kg인 사람이 있다면 이 사람의 bmi를 계산하는 공식은 70/(1.8×1.8)입니다.
그리고 이를 계산해보면 약 21.6라는 수치가 나오게 됩니다. 주의해야 할 점은 cm가 아닌 m로 환산하여 계산해야 한다는 것
height를 cm에서 m로 단위 바꾸기 위해 0.01을 곱하였습니다.
*/

  let BMI = (Number(weight)/Number((height*0.01)*(height*0.01))).toFixed(2);

  if(BMI>=30){
    result="비만";
  }else if(BMI>=25){
    result="과체중";
  }else if(BMI>=20){
    result="정상";
  }else if(BMI<20){
    result="저체중";
  }

  res.send(`bmi: ${BMI} / 결과 : ${result}`);

});

app.get('/qs2', function(req, res){

// console로 querystring 확인

  let subSumArray = req.query.subSumArray.map(Number);

  for(let i=0;i<subSumArray.length-1;i++){
    for(let j=1;j<subSumArray.length-i;j++){
      if(subSumArray[j]>subSumArray[j-1]){
        let tmp = subSumArray[j];
        subSumArray[j]=subSumArray[j-1];
        subSumArray[j-1]=tmp;
      }
    }
  }

  console.log(subSumArray);

   let rank = 0;
   let max = subSumArray[0];
   let rankArray = [];
   let result = '';

   for (let i = 0; i < subSumArray.length; i++) {
     rankArray[i]=1;
     if (subSumArray[i] >= max) {
       max = subSumArray[i];
      
     }
     for(let j= 0; j < subSumArray.length; j++){
       if(subSumArray[i]< subSumArray[j]){
         rankArray[i]=rankArray[i]+1;
       }
    }
    rank++;
    result = `석차 : ${rankArray[i]}<br>`;
   }


  console.log(rank);
  console.log(max);
  console.log(rankArray);
  console.log(rankArray[0]);

  // res.send(`석차 : ${rankArray}<br>`);
  res.send(result);




});
