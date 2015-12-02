//function addNumbers( x , y ) {
  //  return x + y;
//}

//use jacksMongoDbTest;
//db.createCollection("jacksCollection"); 

//db.jacksCollection.insert({id:"addNumbers", value:addNumbers(x, y)});

use jacksMongoDbTest;
db.createCollection("jacksCollection"); 

var mydocuments;

function get_data(name, category){
	mydocuments = [{
		name_atr: name,
		cat_atr: category
	}];
}

db.jacksCollection.insert(mydocuments);


