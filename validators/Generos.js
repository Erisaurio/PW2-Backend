const { check } = require("express-validator");
const validateResults  = require("../utils/handleValidator");


const validatorGenero = [
    check("Genero")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    

];

const validatorGenroUniq = [
    check("Genero")
    .custom(
        value => {
            return 
        }
    ),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorGeneroid = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


module.exports = {validatorGenero, validatorGeneroid}