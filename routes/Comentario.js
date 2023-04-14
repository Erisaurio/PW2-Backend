const express = require("express");
const router = express.Router();

const { validatorCreateComentario, validatorGetComentario, validatorGetComentarioPeli, validatorGetComentarioUser } = require("../validators/Comentario");
const { getComentarios, getComentario, getComentariosUser, getComentariosMovie, createComentario, updateComentario, deleteComentario } = require("../controllers/Comentario");

// http://localhost:3001/api/plataforma

router.get("/",getComentarios);

// router.get("/Comentario/:id", validatorGetComentario ,getComentario);

router.get("/Users/:Usuarioid", validatorGetComentarioUser, getComentariosUser)

router.get("/Movies/:movieid", validatorGetComentarioPeli,  getComentariosMovie)

router.post("/", validatorCreateComentario, createComentario);

router.put("/:id", validatorCreateComentario, validatorGetComentario, updateComentario)

router.delete("/:id", validatorGetComentario, deleteComentario)

module.exports = router