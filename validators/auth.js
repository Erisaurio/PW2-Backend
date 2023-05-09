const { check } = require("express-validator");
const validateResults  = require("../utils/handleValidator");


const validatorRegisetItem = [
    check("name")
    .exists()
    .notEmpty(),
    check("password")
    .exists()
    .notEmpty(),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorLoginT = [
    check("password")
    .exists()
    .notEmpty(),
    check("email")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

module.exports = {validatorRegisetItem, validatorLoginT}