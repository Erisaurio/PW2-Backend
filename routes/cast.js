const express = require("express");
const router = express.Router();

const { validatorCreateCast, validatorGetCast } = require("../validators/cast");
const {getCasts, getCast,createCast,updateCast,deleteCast} = require("../controllers/Cast");

// http://localhost:3001/api/cast

router.get("/",getCasts);

//router.get("/:id/var:2/var3",getEditorial)
router.get("/:id",validatorGetCast, getCast);

router.post("/", validatorCreateCast, createCast);

router.put("/:id", validatorGetCast, validatorCreateCast, updateCast);

router.delete("/:id",validatorGetCast, deleteCast);

module.exports = router