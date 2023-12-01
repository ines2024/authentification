import { Alert } from 'react-bootstrap'
import React from 'react'
import { useSelector } from 'react-redux'

function Alerterror() {
    const errors=useSelector(state=>state.errorreducer)
    console.log(errors)
  return (
    <div>
     {errors.map(e=>
     <Alert variant="danger">
        {e.msg}  
     </Alert>  )}   

    </div>
  )
}

export default Alerterror