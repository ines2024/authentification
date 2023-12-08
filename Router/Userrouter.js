const express=require("express")
const { register, login, updateuser } = require("../Controller/Usercontroller")
const { registervalidation, validation, loginvalidation } = require("../Middleware/Validation")
const { Isauth } = require("../Middleware/Isauth")
const { sendEmail } = require("../Controller/Nodemailer")
var userRouter=express.Router()
userRouter.post("/Register",registervalidation,validation,register)
userRouter.put('/update/:id',updateuser)
userRouter.post("/login",loginvalidation,validation,login)
userRouter.get("/getcurrent",Isauth,(req,res)=>{
    res.send(req.user)
})
userRouter.post('/email',sendEmail)
module.exports=userRouter
