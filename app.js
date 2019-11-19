const app = require('./config/server')

app.get('/', (req, res) => {
    res.render("home/index")
})

app.get('/form_inclusao', (req, res) => {
    res.render("admin/form_add_noticia")
})

app.get('/noticias', (req, res) => {
    res.render("noticias/noticias")
})

app.listen(3000, () => {
    console.log("Servidor rodando com Express")
})