const mongoose=require("mongoose")
const connectdb=async()=>{
    try {
       await mongoose.connect("mongodb+srv://ineslahbib7:0gT4KEVJe1pRr7sM@cluster0.bc3zmxu.mongodb.net/?retryWrites=true&w=majority")
        console.log("db is connected")
    } catch (error) {
        console.log("db is not connected")
    }
}
module.exports=connectdb
