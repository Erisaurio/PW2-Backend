const express = require("express");
const router = express.Router();


const { getAllGenerosReporte} = require("../controllers/RepGeneroPleis");

// http://localhost:3001/api/editorial

router.get("/",getAllGenerosReporte);



module.exports = router