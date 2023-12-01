import React, { useState } from 'react'
import "./Login.css"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../Redux/Action/Action'
function Login() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handlelogin=()=>{
    dispatch(login({email,password},navigate))
  }
  
  return (
    <div>
        <div className="login-box">
  <h2>Login</h2>
  
    <div className="user-box">
      <input type="text" name="" required="" onChange={e=>setEmail(e.target.value)} />
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required=""onChange={e=>setPassword(e.target.value)}/>
      <label>Password</label>
    </div>
    <button onClick={handlelogin}>
      <span />
      <span />
      <span />
      <span />
      Submit 
    </button>
  
</div>

    </div>
  )
}

export default Login