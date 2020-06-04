const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'qf5dic2wzyjf1x5x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'ln37g6793b0hy9ct',
    password: 'xcz90rfn31hp2kms',
    database: 'hoysd9wfb220uupu',
    
});

connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }
      console.log("connected as id " + connection.threadId);
});

module.exports = connection;