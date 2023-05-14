const express = require("express");
const router = express.Router();

const { validatorCreatePlataforma, validatorGetPlataforma } = require("../validators/plataforma");
const {getPlataformas, getPlataforma,createPlataforma,updatePlataforma,deletePlataforma} = require("../controllers/Plataforma");

const authMiddleware  = require("../middleware/session");  

// http://localhost:3001/api/plataforma

router.get("/",getPlataformas);


router.get("/:id",validatorGetPlataforma, getPlataforma)

router.post("/", validatorCreatePlataforma, authMiddleware,createPlataforma);

router.put("/:id", validatorCreatePlataforma, validatorGetPlataforma, authMiddleware, updatePlataforma)

router.delete("/:id",validatorGetPlataforma, authMiddleware, deletePlataforma)

module.exports = router