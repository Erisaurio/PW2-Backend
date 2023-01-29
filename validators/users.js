const { check } = require("express-validator");
const validateResults  = require("../utils/handleValidator");


const validatorCreateUsers = [
    check("name")
    .exists()
    .notEmpty(),
    check("email")
    .exists()
    .notEmpty(),
    check("password")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    

];

const validatorGetUsers = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


module.exports = {validatorCreateUsers, validatorGetUsers}