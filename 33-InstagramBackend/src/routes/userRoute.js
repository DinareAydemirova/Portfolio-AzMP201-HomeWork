const express = require("express")
const router = express.Router()
const UserController=require("./../controllers/userController")


router.get("/users", UserController.getAllUser)
router.post("/users", UserController.postUser)
router.get("/users/:id", UserController.getUserById)
router.get("/users/:id", UserController.deleteUser)
router.patch("/users/:id", UserController.patchUser)
router.put("/users/:id", UserController.putUser)






module.exports=router