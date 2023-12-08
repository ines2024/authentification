import axios from "axios"
import { GETCURRENT, LOGIN, LOGOUT, REGISTER } from "../Actiontype/Actiontype"
import { alerterror } from "./Erroraction"
export const register=(data,navigate)=>async(dispatch)=>{
    try {
        const res=await axios
        .post("/user/Register",data)
        .then((res)=>dispatch({type:REGISTER,payload:res.data}))
        navigate("/Profile")
    } catch (error) {
    error.response.data.errors.forEach(e=> {
        dispatch(alerterror(e.msg))
    });
    }
}
export const login=(data,navigate)=>async(dispatch)=>{
    try {
        const res=await axios
        .post("/user/login",data)
        .then(res=>dispatch({type:LOGIN,payload:res.data}))
        navigate('/Profile')
    } catch (error) {
        error.response.data.errors.forEach(e=> {
            dispatch(alerterror(e.msg))
        });
    }
}
export const getcurrent=()=>async(dispatch)=>{
    const config={
        headers:{token:localStorage.getItem("token")}
    }
    try {
       const res=await axios.get("/user/getcurrent",config) 
.then(res=>dispatch({type:GETCURRENT,payload:res.data}))
    } catch (error) {
        console.log(error)
    }
}
export const logout=(navigate)=>{
localStorage.removeItem("token")
navigate("/Login")
return{
    type:LOGOUT   
}
}