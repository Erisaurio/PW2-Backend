const express = require("express");
const router = express.Router();

const { validatorCreateEditorial, validatorGetEditorial } = require("../validators/editorial");
const {getEditoriales, getEditorial,createEditorial,UpdateEditorial,DeleteEditorial} = require("../controllers/Editorial");

// http://localhost:3001/api/editorial

router.get("/",getEditoriales);

//router.get("/:id/var:2/var3",getEditorial)
router.get("/:id",validatorGetEditorial, getEditorial)

router.post("/", validatorCreateEditorial, createEditorial);

router.put("/:id", validatorGetEditorial, validatorCreateEditorial, UpdateEditorial)

router.delete("/:id",validatorGetEditorial, DeleteEditorial)

module.exports = router