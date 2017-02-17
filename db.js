var mysql=require('mysql');

var connection=mysql.createPool({
host:'localhost',
     user:'root',
    password:'',
    database:'demo'
  
});
//connection.connect();
module.exports=connection;