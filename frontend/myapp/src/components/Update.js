import React from 'react'
import './todo.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Url1 } from './url'

function Update() {
    const { id } = useParams();
    const [todo, setTodo] = React.useState("");
    //update the title with todo
    const updateTodo = async (e) => {
        try {
            const response = await axios.put(`${Url1}update/${id}`, { title: todo });
            console.log(response.data);
            window.location.href = "/todo"
            } catch (error) {
                console.log(error);
                }
                }



  return (
    <div className='card2'>
      <input onChange={(e)=>setTodo(e.target.value)} type='text' placeholder="enter the updated task name"/>
      <button onClick={updateTodo} className='lbtn'>Update</button>
    </div>
  )
}

export default Update
