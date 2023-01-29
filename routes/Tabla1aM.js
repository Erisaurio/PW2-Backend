const express = require("express");
const router = express.Router();

const {validatorCreateTabla, validatorGettabla } = require("../validators/Tabla1AM");
const {getTablas, getTabla, createTabla, UpdateTabla, DeleteTabla} = require("../controllers/Tabla1aM");

// http://localhost:3001/api/editorial

router.get("/",getTablas);

//router.get("/:id/var:2/var3",getEditorial)
router.get("/:id",validatorGettabla, getTabla)

router.post("/", validatorCreateTabla, createTabla);

router.put("/:id", validatorGettabla, validatorCreateTabla, UpdateTabla)

router.delete("/:id",validatorGettabla, DeleteTabla)

module.exports = router