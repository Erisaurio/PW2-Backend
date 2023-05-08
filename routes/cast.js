const express = require("express");
const router = express.Router();

const { validatorCreateCast, validatorGetCast,validatorEditCast } = require("../validators/cast");
const {getCasts, getCast,createCast,updateCast,deleteCast,getsomeCasts} = require("../controllers/Cast");

// http://localhost:3001/api/cast

router.get("/",getCasts);

router.get("/Some10", getsomeCasts);

//router.get("/:id/var:2/var3",getEditorial)
router.get("/:id",validatorGetCast, getCast);

router.post("/", validatorCreateCast, createCast);

router.put("/:id", validatorGetCast, validatorEditCast, updateCast);

router.delete("/:id",validatorGetCast, deleteCast);

module.exports = router