const express = require("express");
const router = express.Router();

const { validatorCreateUsers, validatorGetUsers } = require("../validators/users");
const {getAllUser, getUser, createUser, UpdateUser, DeleteUser} = require("../controllers/Users");

// http://localhost:3001/api/editorial

router.get("/",getAllUser);

//router.get("/:id/var:2/var3",getEditorial)
router.get("/:id",validatorGetUsers, getUser)

router.post("/", validatorCreateUsers, createUser);

router.put("/:id", validatorGetUsers, validatorCreateUsers, UpdateUser)

router.delete("/:id",validatorGetUsers, DeleteUser)

module.exports = router