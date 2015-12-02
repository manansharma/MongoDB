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

function (req, res) { db.users.find({username: req.body.username, password: req.body.password}