const express = require("express");
const router = express.Router();

const { validatorCreatePlataforma, validatorGetPlataforma } = require("../validators/plataforma");
const {getPlataformas, getPlataforma,createPlataforma,updatePlataforma,deletePlataforma} = require("../controllers/Plataforma");

// http://localhost:3001/api/plataforma

router.get("/",getPlataformas);


router.get("/:id",validatorGetPlataforma, getPlataforma)

router.post("/", validatorCreatePlataforma, createPlataforma);

router.put("/:id", validatorCreatePlataforma, validatorGetPlataforma, updatePlataforma)

router.delete("/:id",validatorGetPlataforma, deletePlataforma)

module.exports = router