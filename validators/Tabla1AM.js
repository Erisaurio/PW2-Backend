const { check } = require("express-validator");
const validateResults  = require("../utils/handleValidator");


const validatorCreateTabla = [
    check("name")
    .exists()
    .notEmpty(),
    check("criticos")
    .isMongoId(), 
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    

];

const validatorGettabla = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


module.exports = {validatorCreateTabla, validatorGettabla}