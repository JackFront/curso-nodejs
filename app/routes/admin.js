module.exports = (app) => {
    app.get('/form_inclusao_noticia', (req, res) => {
        res.render("admin/form_add_noticia")
    })
    app.post('/noticias/salvar', (req, res) => {
        var noticia = req.body;

        var connection = app.config.dbConnection()
        var noticiaModel = new app.app.models.noticiasModel(connection);

        noticiaModel.salvarNoticia(noticia, (error, result) => {
            res.redirect('/noticias');
        })
    })
}