const {body,validationResult}=require("express-validator")
exports.registervalidation=[
    body("email","wrong format email").isEmail(),
    body("password","minimum length is 8 char").isLength({min:8})

]

exports.loginvalidation=[
    body("email","wrong format email").isEmail(),
    body("password","minimum length is 8 char").isLength({min:8})

]
exports.validation=(req,res,next)=>{
    const errors=validationResult(req)
if (!errors.isEmpty()){
res.status(400).send({errors:errors.array()})
}
next()
}
