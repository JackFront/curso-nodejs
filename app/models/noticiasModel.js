module.exports = function () {

    this.getNoticias = (connection, callback) => {
        connection.query('SELECT * FROM noticias', callback)
    };

    this.getNoticia = (connection, callback) => {
        connection.query('SELECT * FROM noticias WHERE id_noticias = 2', callback)
    }

    this.salvarNoticia = (noticia, connection, callback) => {
        connection.query('insert into noticias set ?', noticia, callback)
    }

    return this;
}