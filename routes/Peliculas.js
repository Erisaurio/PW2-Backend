const express = require("express");
const router = express.Router();

const { validatornamePelicual, validatorDataPelicula, validatorGetPelicualid } 
= require("../validators/Peliculas");

const {getAllPeliculas, getPelicula, createPelicula, 
    UpdatePelicula, DeletePelicula, getPeliculasCast} = require("../controllers/Peliculas");

// http://localhost:3001/api/editorial

router.get("/",getAllPeliculas);

router.get("/Cast/:id", getPeliculasCast);

//router.get("/:id/var:2/var3",getEditorial)
router.get("/:Name",validatornamePelicual, getPelicula)

router.post("/", validatorDataPelicula, createPelicula);

router.put("/:id", validatorGetPelicualid, validatorDataPelicula, UpdatePelicula)

router.delete("/:id",validatorGetPelicualid, DeletePelicula)

/// relaciones 1 a M

//router.get("/",getAllPeliculas);

//router.get("/:Name",validatornamePelicual, getPelicula)

module.exports = router