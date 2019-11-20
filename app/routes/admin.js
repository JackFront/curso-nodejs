module.exports = (app) => {
    app.get('/form_inclusao_noticia', (req, res) => {
        res.render("admin/form_add_noticia", {
            validacao: {},
            noticia: {}
        })
    })
    app.post('/noticias/salvar', (req, res) => {
        var noticia = req.body;

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatório').notEmpty()
        req.assert('noticia', 'Noticia é obrigatório').notEmpty();

        var erros = req.validationErrors()

        if (erros) {
            res.render("admin/form_add_noticia", {
                validacao: erros,
                noticia: noticia
            })
            return;
        }
        var connection = app.config.dbConnection()
        var noticiaModel = new app.app.models.noticiasModel(connection);

        noticiaModel.salvarNoticia(noticia, (error, result) => {
            res.redirect('/noticias');
        })
    })
}