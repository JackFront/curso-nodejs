module.exports = (app) => {

    app.get('/noticias', (req, res) => {

        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'portal_noticias'
        })

        connection.query('SELECT * FROM noticias', (error, result) => {
            res.render("noticias/noticias", {
                noticias: result
            })
        })
    })
}