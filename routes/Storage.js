const express = require("express");
const router = express.Router();

const { uploadMiddleware,uploadMiddlewareUserImg,uploadMiddlewareMoveImg, uploadMiddlewareCastImg } = require("../utils/handleStorage");
const { validatorGetUsers } = require("../validators/users");
const { validatorGetPelicualid } = require("../validators/Peliculas");
const { validatorGetCast } = require("../validators/cast");

const { updateUserImg, updateMovieImg, updateCastImg } = require("../controllers/Storage");


// single, multi
router.put("/Movies/:id", validatorGetPelicualid, uploadMiddlewareMoveImg.single("myfile"), updateMovieImg)

router.put("/users/:id", validatorGetUsers, uploadMiddlewareUserImg.single("myfile"), updateUserImg)

router.put("/Cast/:id", validatorGetCast, uploadMiddlewareCastImg.single("myfile"), updateCastImg)

module.exports = router;