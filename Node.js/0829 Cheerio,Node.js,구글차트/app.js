const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const cheerio = require('cheerio');
const app = express();

const axios = require('axios');

app.use(bodyParser.json());
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

app.get('/menu', function (req, res) {
  res.sendfile(`menu.html`);
});

app.get('/getMenu', function (req, res) {

  request('https://www.kopo.ac.kr/kangseo/content.do?menu=262', function (error, response, body) {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
    res.send(body);
  });
});


app.get('/foodMenuList', async (req, res) => {
  const url = 'https://www.kopo.ac.kr/kangseo/content.do?menu=262';

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const foodItems = [];

    // Find all 'td' elements, then find 'span' elements within them
    $('td').each((index, element) => {
      $(element).find('span').each((spanIndex, spanElement) => {
        let text = $(spanElement).text().trim();
        // Remove newline characters and excessive whitespace
        text = text.replace(/\s+/g, ' ');
        if (text) {  // Only add non-empty text
          foodItems.push(text);
        }
      });
    });

    // Send the collected data as JSON
    res.json(foodItems);
  } catch (error) {
    console.error('Error:', error);
    if (!res.headersSent) {  // Check if headers have been sent
      res.status(500).json({ error: 'Error fetching food menu' });
    }
  }
});

app.get('/foodMenu', function (req, res) {
  res.sendfile(`foodMenu.html`);
});
