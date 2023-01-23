var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'12345678',
    database:'loginDB'
});

conn.connect(
    console.log('database successful')
);
module.exports = conn;