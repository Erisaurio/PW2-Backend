const express = require("express");
const router = express.Router();

const { validatornamePelicual, validatorDataPelicula, validatorGetPelicualid } 
= require("../validators/Peliculas");

const {getAllPeliculas, getPelicula, createPelicula, 
    UpdatePelicula, DeletePelicula, getPeliculasCast, getsomePeliculas} = require("../controllers/Peliculas");

const authMiddleware  = require("../middleware/session");    
// http://localhost:3001/api/editorial

router.get("/",getAllPeliculas);

router.get("/Cast/:id", getPeliculasCast);

router.get("/Some6", getsomePeliculas);

//router.get("/:id/var:2/var3",getEditorial)
router.get("/:Name",validatornamePelicual, getPelicula)

router.post("/", validatorDataPelicula, authMiddleware, createPelicula);

router.put("/:id", validatorGetPelicualid, validatorDataPelicula, authMiddleware, UpdatePelicula)

router.delete("/:id",validatorGetPelicualid, authMiddleware, DeletePelicula)

/// relaciones 1 a M

//router.get("/",getAllPeliculas);

//router.get("/:Name",validatornamePelicual, getPelicula)

module.exports = router