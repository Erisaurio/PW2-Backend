const { check } = require("express-validator");
const validateResults  = require("../utils/handleValidator");


const validatornamePelicual = [
    check("Name")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    

];

const validatorGetPelicualid = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorDataPelicula = [
    check("Name")
    .exists()
    .notEmpty(),
    check("Fecha")
    .exists()
    .notEmpty(),
    check("Horas")
    .exists()
    .notEmpty(),
    check("Minutos")
    .exists()
    .notEmpty(),
    check("Generos")
    .exists(),
    check("Cast")
    .exists(),
    check("Sinopsis")
    .exists(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];



module.exports = {validatornamePelicual, validatorDataPelicula,
     validatorGetPelicualid,}