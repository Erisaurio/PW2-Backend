const express = require("express");
const router = express.Router();

const { validatorCreateCountries, validatorGetCountries } = require("../validators/Country");
const {getAllCountries, getCountry, createCountry, UpdateCountry, DeleteCountry} = require("../controllers/Country");

// http://localhost:3001/api/editorial

router.get("/",getAllCountries);

//router.get("/:id/var:2/var3",getEditorial)
router.get("/:id",validatorGetCountries, getCountry)

router.post("/", validatorCreateCountries, createCountry);

router.put("/:id", validatorGetCountries, validatorCreateCountries, UpdateCountry)

router.delete("/:id",validatorGetCountries, DeleteCountry)

module.exports = router