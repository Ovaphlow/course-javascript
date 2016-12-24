var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

app.use(express.static('webapp'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', function (req, res) {
  res.send('1123');
});

app.get('/test', function (request, response) {
  let data = {id: 1, nickname: '刘浪'}
  response.send(data)
})

app.get('/test-list', function (req, res) {
  let data = [
    {id: 1, name: 'name1', title: 'title1'}
    , {id: 2, name: 'name2', title: 'title2'}
    , {id: 3, name: 'name3', title: 'title3'}
    , {id: 4, name: 'name', title: 'title4'}
  ]
  res.send(data);
});

app.listen(80);
