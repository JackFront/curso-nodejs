var mysql = require('mysql');

var conMySQL = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    })
}
module.exports = () => {
    return conMySQL;
}