var mysql = require('mysql');
var connection = mysql.createPool({
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'demo'

    host: 'JINAL.db.9340728.c20.hostedresource.net',
    user: 'JINAL',
    password: 'Angular@9797',
    database: 'JINAL'

});


module.exports = connection;