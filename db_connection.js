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
