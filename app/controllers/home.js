module.exports.index = (app, req, res) => {
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel(connection)

    noticiasModel.get5UltimasNoticias((err, result) => {
        res.render("home/index", {
            noticias: result
        })

    })

}