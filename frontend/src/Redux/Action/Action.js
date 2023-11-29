import axios from "axios"
import { REGISTER } from "../Actiontype/Actiontype"
export const register=(data,navigate)=>async(dispatch)=>{
    try {
        const res=await axios
        .post("/user/Register",data)
        .then((res)=>dispatch({type:REGISTER,payload:res.data}))
        navigate("/Profile")
    } catch (error) {
        console.log(error)
    }
}