var connection = require('../../config/dbConnection')();
module.exports = (app) => {

    app.get('/noticias', (req, res) => {



        connection.query('SELECT * FROM noticias', (error, result) => {
            res.render("noticias/noticias", {
                noticias: result
            })
        })
    })
}