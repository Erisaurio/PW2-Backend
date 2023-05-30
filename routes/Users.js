const express = require("express");
const router = express.Router();

const { validatorCreateUsers, validatorGetUsers, validatorLogin, validatorCreateAdmin } = require("../validators/users");
const {getAllUser, getUser, createUser, UpdateUser, DeleteUser, Login,
    getAllUser1a1, Login1a1,getAllAdmin} = require("../controllers/Users");

const authMiddleware  = require("../middleware/session");  

//router.get("/:id/var:2/var3",getEditorial)
// http://localhost:3001/api/editorial

router.get("/",getAllUser);

router.get("/admins/", getAllAdmin);

router.get("/:id",validatorGetUsers, getUser)

router.get("/:email/:password",validatorLogin, Login)

router.post("/", validatorCreateUsers, createUser);

router.post("/admins/", validatorCreateAdmin, authMiddleware, createUser);

router.put("/:id", UpdateUser)

router.delete("/:id",validatorGetUsers, authMiddleware, DeleteUser)

/// relaciones 1 a 1 

//router.get("/",getAllUser1a1);

//router.get("/:email/:password",validatorLogin, Login1a1)

module.exports = router