const express=require("express")
const connectdb = require("./Configuration/Config")
const userRouter = require("./Router/Userrouter")
const app=express()
const port=5000
app.use(express.json())
connectdb()
app.use("/user",userRouter)
app.listen(port,console.log("server is running"))
