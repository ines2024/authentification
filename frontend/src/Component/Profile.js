import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcurrent } from '../Redux/Action/Action'

function Profile() {
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getcurrent())
  },[])
  const user=useSelector(state=>state.reducer.user)
  console.log(user)
  return (
    <div>
        <h1>Hello {user.name}</h1>
    </div>
  )
}

export default Profile