const models = {
   usersModel: require('./nosql/users'),
   editorialModel: require('./nosql/editorial'),
   Tabla1aM: require('./nosql/Tabla1aM'),
   GenerosModel: require('./nosql/Generos'),
   PeliculasModel: require('./nosql/Peliculas'),
   
   CriticaModel: require('./nosql/Crítica'),
   ComentarioModel: require('./nosql/Comentario'),

   castModel: require('./nosql/cast'),
   plataformaModel: require('./nosql/plataforma'),

}

module.exports = models