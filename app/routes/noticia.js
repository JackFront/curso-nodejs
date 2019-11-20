module.exports = (app) => {
    app.get('/noticia', (req, res) => {

        var connection = app.config.dbConnection()
        connection.query('SELECT * FROM noticias WHERE id_noticias = 2', (error, result) => {
            res.render("noticias/noticia", {
                noticia: result
            })
        })
    })
}