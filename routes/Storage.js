const express = require("express");
const router = express.Router();

const { uploadMiddleware,uploadMiddlewareUserImg,uploadMiddlewareMoveImg } = require("../utils/handleStorage");
const { validatorGetUsers } = require("../validators/users");
const { validatorGetPelicualid } = require("../validators/Peliculas");

const { updateUserImg, updateMovieImg } = require("../controllers/Storage");


// single, multi
router.put("/Movies/:id", validatorGetPelicualid, uploadMiddlewareMoveImg.single("myfile"), updateMovieImg)


router.put("/users/:id", validatorGetUsers, uploadMiddlewareUserImg.single("myfile"), updateUserImg)

module.exports = router;