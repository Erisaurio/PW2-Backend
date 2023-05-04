const express = require("express");
const router = express.Router();

const { validatorRegisetItem, validatorLoginT } = require("../validators/auth");
const { createItem, LoginT} = require("../controllers/auth");


router.post("/register", validatorRegisetItem, createItem);

router.post("/Login", validatorLoginT, LoginT);

module.exports = router