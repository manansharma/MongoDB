//function FindNumber( x ) {
  //  return x;
//}

//use jacksMongoDbTest;
//db.createCollection("jacksCollection"); 

//db.jacksCollection.find({value:FindNumber(x)});

var express = require('express'); 
var session = require('express-session'); 
var csrf = require('csurf'); 
 
var app = express(); 

app.post('/', function (req, res) { db.users.find({username: req.body.username, password: req.body.password}, function (err, users) { 
  var a = req.body.username 
  }); 
});

//var xhr= window.XMLHttpRequest? new XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHttp');
//function (xhr) { db.users.find({username: xhr.body.username, password: xhr.body.password}

