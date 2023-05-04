const { check } = require("express-validator");
const validateResults  = require("../utils/handleValidator");


const validatorCreateCritica = [
    check("name")
    .exists()
    .notEmpty(),
    check("Calificacion")
    .exists()
    .notEmpty(),
    check("Comentario")
    .exists()
    .notEmpty(),
    check("movieid")
    .isMongoId()
    .notEmpty(),
    check("usuarioid")
    .isMongoId()
    .notEmpty(),
    check("UsuarioPic")
    .exists(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    

];

const validatorGetCriticaid = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorGetCriticaPeli = [
    
    check("movieid")
    .isMongoId()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }   
];

const validatorGetCriticaUser = [

    check("Usuarioid")
    .isMongoId()
    .notEmpty(), 
    (req, res, next) => {
        return validateResults(req, res, next)
    } 
];

module.exports = { validatorCreateCritica, validatorGetCriticaid, validatorGetCriticaPeli, validatorGetCriticaUser  }