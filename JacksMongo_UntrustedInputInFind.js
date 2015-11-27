function FindNumber( x ) {
    return x;
}

use jacksMongoDbTest;
db.createCollection("jacksCollection"); 

db.jacksCollection.find({value:FindNumber(x)});
