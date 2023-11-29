import React, { useState } from 'react'
import "./Register.css"
import { useDispatch } from 'react-redux'
import { register } from '../Redux/Action/Action'
import {useNavigate} from 'react-router-dom'
function Register() {
const [name,setName] =useState("")  
const [password,setPassword] =useState("")  
const [email,setEmail] =useState("")  
const [phone,setPhone] =useState(0)  
const data={name,email,password,phone}
console.log(data)
const dispatch=useDispatch()
const navigate=useNavigate()
const Registration=()=>{
    dispatch(register({name,email,password,phone},navigate))
}
  return (
    <div>


  
  <div className="testbox">
    <h1>Registration</h1>
    
      <hr />
      <div className="accounttype">
        <input
          type="radio"
          defaultValue="None"
          id="radioOne"
          name="account"
          defaultChecked=""
        />
        <label htmlFor="radioOne" className="radio" chec="">
          Personal
        </label>
        <input type="radio" defaultValue="None" id="radioTwo" name="account" />
        <label htmlFor="radioTwo" className="radio">
          Company
        </label>
      </div>
      <hr />
      <label id="icon" htmlFor="name">
        <i className="icon-envelope " />
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Email"
        required=""
        onChange={(e)=>setEmail(e.target.value)}
      />
      <label id="icon" htmlFor="name">
        <i className="icon-user" />
      </label>
      <input onChange={(e)=>setName(e.target.value)} type="text" name="name" id="name" placeholder="Name" required="" />
      <label id="icon" htmlFor="name">
        <i className="icon-shield" />
      </label>
      <input
        type="password"
        name="name"
        id="name"
        placeholder="Password"
        required=""
        onChange={(e)=>setPassword(e.target.value)}
      />

<label id="icon" htmlFor="name">
        <i className="icon-phone" />
      </label>
      <input
        type="number"
        name="name"
        id="name"
        placeholder="phone"
        required=""
        onChange={(e)=>setPhone(e.target.value)}
      />
      <div className="gender">
        <input
          type="radio"
          defaultValue="None"
          id="male"
          name="gender"
          defaultChecked=""
        />
        <label htmlFor="male" className="radio" chec="">
          Male
        </label>
        <input type="radio" defaultValue="None" id="female" name="gender" />
        <label htmlFor="female" className="radio">
          Female
        </label>
      </div>
      <p>
        By clicking Register, you agree on our{" "}
        <a href="#">terms and condition</a>.
      </p>
      <button className="button" onClick={Registration}>
        Register
      </button>
    
  </div>



    </div>
  )
}

export default Register