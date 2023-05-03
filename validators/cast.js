const { check } = require("express-validator");
const validateResults  = require("../utils/handleValidator");


const validatorCreateCast = [
    check("name")
    .exists()
    .notEmpty(),
    check("photo")
    .exists(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorGetCast = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

module.exports = {validatorCreateCast, validatorGetCast}