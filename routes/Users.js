const express = require("express");
const router = express.Router();

const { validatorCreateUsers, validatorGetUsers, validatorLogin } = require("../validators/users");
const {getAllUser, getUser, createUser, UpdateUser, DeleteUser, Login,
    getAllUser1a1, Login1a1} = require("../controllers/Users");

//router.get("/:id/var:2/var3",getEditorial)
// http://localhost:3001/api/editorial

router.get("/",getAllUser);

router.get("/:id",validatorGetUsers, getUser)

router.get("/:email/:password",validatorLogin, Login)

router.post("/", validatorCreateUsers, createUser);

router.put("/:id", validatorGetUsers, validatorCreateUsers, UpdateUser)

router.delete("/:id",validatorGetUsers, DeleteUser)

/// relaciones 1 a 1 

//router.get("/",getAllUser1a1);

//router.get("/:email/:password",validatorLogin, Login1a1)

module.exports = router