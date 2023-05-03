const express = require("express");
const router = express.Router();

const { validatorCreateCritica, validatorGetCriticaid, validatorGetCriticaPeli, validatorGetCriticaUser } = require("../validators/Crítica");
const { getCriticas, getCritica, getCriticasUser, getCriticasMovie, createCritica, updateCritica, deleteCritica } = require("../controllers/Crítica");

// http://localhost:3001/api/plataforma

router.get("/", getCriticas);

//router.get("/Critica/:id", validatorGetCriticaid ,getCritica);

router.get("/Users/:Usuarioid", validatorGetCriticaUser, getCriticasUser)

router.get("/Movies/:movieid", validatorGetCriticaPeli, getCriticasMovie)

router.post("/", validatorCreateCritica, createCritica);

router.put("/:id", validatorCreateCritica, validatorGetCriticaid, updateCritica)

router.delete("/:id",validatorGetCriticaid, deleteCritica)

module.exports = router