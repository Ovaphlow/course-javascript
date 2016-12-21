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

app.get('/test', function (req, res) {
  res.send({message: 'OK'});
});

app.listen(80);
