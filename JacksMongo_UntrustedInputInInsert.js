function addNumbers( x , y ) {
    return x + y;
}

use jacksMongoDbTest;
db.createCollection("jacksCollection"); 

db.jacksCollection.insert({id:"addNumbers", value:addNumbers(x, y)});
