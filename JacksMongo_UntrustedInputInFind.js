//function FindNumber( x ) {
  //  return x;
//}

//use jacksMongoDbTest;
//db.createCollection("jacksCollection"); 

//db.jacksCollection.find({value:FindNumber(x)});

//app.post('/', function (req, res) { db.users.find({username: req.body.username, password: req.body.password}, function (err, users) { 
//  var a = req.body.username
//  }); 
//});

var xhr= window.XMLHttpRequest? new XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHttp');
function (xhr) { db.users.find({username: xhr.body.username, password: xhr.body.password}