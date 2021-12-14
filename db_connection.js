const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'us-cdbr-east-04.cleardb.com',
  user: 'b3c19bde0098f7',
  password: '811d1ee5',
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

connection.query('use  heroku_8b1f2a27d4def71');
/*
connection.query('select * from Room' , (err, res) => {
  console.log(res)
});
*/
var test;
connection.query('Select picNorth, linkNorth FROM Room where id= "5"' , (err, res) => {
  console.log(res)
});
connection.query('Select picEast, linkEast FROM Room where id= "5"' , (err, res) => {
//  console.log(res[0].linkEast);
  var test = res[0].linkEast;
  console.log(test);
});
connection.query('Select picSouth FROM Room where id= "5"' , (err, res) => {
  console.log(res[0].picSouth);
//  JSONObject jsonObj = new JSONObject(res);
  //var json = JSON.parse(res[0]);
//  console.log(json.picSouth);
});
connection.query('Select * from Room' , (err, res) => {
  console.log(res)
});
