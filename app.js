const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/tecnologia', (req, res) => {
    res.render("secao/tecnologia")
})

app.get('/', (req, res) => {
    res.send("<html><body>Portal de notícias</body></html>")
})



app.listen(3000, () => {
    console.log("Servidor rodando com Express")
})