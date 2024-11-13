import React from 'react'
import './todo.css'
import { useParams } from 'react-router-dom'

import Cookies from 'js-cookie'

function UpdateP() {
    const { id } = useParams();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    //update the name and email
    const update = () => {
        Cookies.set('name', name,{expires:1});
        Cookies.set('email', email,{expires:1});
        window.location.href = `/todo`
    }
                    


  return (
    <div className='card2'>
      <input onChange={(e)=>setName(e.target.value)} type='text' placeholder="enter the updated  name"/>
      <input onChange={(e)=>setEmail(e.target.value)} type='text' placeholder="enter the updated email"/>
      <button onClick={update} className='lbtn'>Update</button>
    </div>
  )
}

export default UpdateP
