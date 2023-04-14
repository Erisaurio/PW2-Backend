const { check } = require("express-validator");
const validateResults  = require("../utils/handleValidator");


const validatorCreateComentario = [
    check("name")
    .exists()
    .notEmpty(),
    check("Comentario")
    .exists()
    .notEmpty(),
    check("movieid")
    .isMongoId()
    .notEmpty(),
    check("Usuarioid")
    .isMongoId()
    .notEmpty(),
    check("movieidtxt")
    .exists()
    .notEmpty(),
    check("Usuarioidtxt")
    .exists()
    .notEmpty(),
    check("UsuarioPic")
    .exists(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    

];

const validatorGetComentario = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorGetComentarioPeli = [
    
    check("movieid")
    .isMongoId()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }   
];

const validatorGetComentarioUser = [
    
    check("Usuarioid")
    .isMongoId()
    .notEmpty(), 
    (req, res, next) => {
        return validateResults(req, res, next)
    } 
];

module.exports = { validatorCreateComentario, validatorGetComentario, validatorGetComentarioPeli, validatorGetComentarioUser }