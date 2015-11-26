use jacksMongoDbTest;
db.createCollection("jacksCollection"); 

db.jacksCollection.insert({
   title: 'MongoDB1', 
   id: 100
});
db.jacksCollection.insert({
   title: 'MongoDB2', 
   id: 101
});
db.jacksCollection.insert({
   title: 'MongoDB3', 
   id: 103
});
db.jacksCollection.insert({
   title: 'MongoDB4', 
   id: 104
});
db.jacksCollection.insert({
   title: 'MongoDB5', 
   id: 105
});
