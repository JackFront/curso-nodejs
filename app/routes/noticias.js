module.exports = (app) => {


    app.get('/noticias', (req, res) => {


        var connection = app.config.dbConnection()
        connection.query('SELECT * FROM noticias', (error, result) => {
            res.render("noticias/noticias", {
                noticias: result
            })
        })
    })
}