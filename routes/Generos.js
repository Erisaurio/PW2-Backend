const express = require("express");
const router = express.Router();

const {validatorGenero, validatorGeneroid} = require("../validators/Generos");
const { getAllGeneros, getGenero, createGenero, UpdateGenero, DeleteGenero} = require("../controllers/Generos");

const authMiddleware  = require("../middleware/session");
const customHeader  = require("../middleware/customHeader");
// http://localhost:3001/api/editorial

router.get("/",getAllGeneros);

//router.get("/:id/var:2/var3",getEditorial)
router.get("/:id",validatorGeneroid, getGenero)

router.post("/", validatorGenero, authMiddleware, createGenero);

router.put("/:id", validatorGeneroid, validatorGenero, authMiddleware, UpdateGenero)

router.delete("/:id",validatorGeneroid,authMiddleware, DeleteGenero)

module.exports = router