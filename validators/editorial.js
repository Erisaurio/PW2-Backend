const { check } = require("express-validator");
const validateResults  = require("../utils/handleValidator");


const validatorCreateEditorial = [
    check("name")
    .exists()
    .notEmpty(),
    check("description")
    .exists(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorGetEditorial = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

module.exports = {validatorCreateEditorial, validatorGetEditorial}