const users=require("../Model/Usermodel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
exports.register=async(req,res)=>{
    const {name,email,password,phone}=req.body
try {
    const find=await users.findOne({email})
    console.log(find)
    if (find){
        res.status(400).send({msg :"user exist"})


    }
    else{
const user=new users(req.body)
const hashpassword=bcrypt.hashSync(password,10)

user.password=hashpassword
const token=jwt.sign({id:user._id},"123456")
await user.save()
res.status(200).send({msg:"register succussfully",user,token})

    }
} catch (error) {
    res.status(500).send(error)
}
}


exports.login=async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await users.findOne({email})
        if (!user){
            res.status(400).send({msg:"user does not exist you need to register"})
        }
        else {
           const hashpassword=bcrypt.compareSync(password,user.password) 
           if (!hashpassword){
res.status(400).send({msg:"wrong password"})
           }
           else {
            const token=jwt.sign({id:user._id},"123456")
            res.status(200).send({msg:"login successfully",user,token})
           }
          
        }
        
    } catch (error) {
        res.status(500).send(error)
    }
}