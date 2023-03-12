const { check } = require("express-validator");
const validateResults  = require("../utils/handleValidator");


const validatorCreatePlataforma = [
    check("name")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorGetPlataforma = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

module.exports = {validatorCreatePlataforma, validatorGetPlataforma}