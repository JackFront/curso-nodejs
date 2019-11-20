module.exports = (app) => {
    app.get('/noticia', (req, res) => {

        var connection = app.config.dbConnection()
        var noticiaModel = new app.app.models.noticiasModel(connection);
        noticiaModel.getNoticia((error, result) => {
            res.render("noticias/noticia", {
                noticia: result
            })
        })
    })
}