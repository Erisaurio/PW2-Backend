const express = require("express");
const router = express.Router();

const {validatorGenero, validatorGeneroid} = require("../validators/Generos");
const { getAllGeneros, getGenero, createGenero, UpdateGenero, DeleteGenero} = require("../controllers/Generos");

// http://localhost:3001/api/editorial

router.get("/",getAllGeneros);

//router.get("/:id/var:2/var3",getEditorial)
router.get("/:id",validatorGeneroid, getGenero)

router.post("/", validatorGenero, createGenero);

router.put("/:id", validatorGeneroid, validatorGenero, UpdateGenero)

router.delete("/:id",validatorGeneroid, DeleteGenero)

module.exports = router