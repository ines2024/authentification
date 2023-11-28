const express=require("express")
const { register, login } = require("../Controller/Usercontroller")
const { registervalidation, validation, loginvalidation } = require("../Middleware/Validation")
var userRouter=express.Router()
userRouter.post("/Register",registervalidation,validation,register)

userRouter.post("/login",loginvalidation,validation,login)

module.exports=userRouter
