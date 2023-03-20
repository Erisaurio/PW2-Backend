const { check } = require("express-validator");
const validateResults  = require("../utils/handleValidator");


const validatorCreateCountries = [  
    check("Id_pais")
    .exists()
    .notEmpty(),
    check("País")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    

];

const validatorGetCountries = [
    check("Id_pais")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


module.exports = {validatorCreateCountries, validatorGetCountries}