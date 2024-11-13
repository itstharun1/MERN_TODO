import React from 'react'
import Cookies from 'js-cookie'
import { useState } from 'react';
import './todo.css'
import { Url1 } from './url';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';

function Todo() {
    const [records,setRecords]=useState([]);
    const userId = Cookies.get('userId');
    
    const [todo,setTodo] = useState({
        title: '',
        status1: 'pending',
        userId:userId
      });
      


      const handleSubmit = async() => {
        if(todo.title===""){
          alert("Please Enter a TAsk");
        }else{
          const url = `${Url1}todo`
          const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
            }
            const response = await fetch(url, options)
            const data = await response.json()
           
            
        }
        
   


    
       
      };

      const datafec=async()=>{
        const url1=`${Url1}alltodos`
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({userId:userId})
            }
            const response = await fetch(url1, options)
            const data = await response.json()
            setRecords(data)
            
      }
     datafec()
// use the useeffect






const name =Cookies.get('name');

const token = Cookies.get('token')
if(!token){
  window.location.href = "/login"
}

// delete function
const deleteTodo = async (todoId) => {
  const response = await fetch(`${Url1}delete/${todoId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      },
      });
      const data = await response.json();
      console.log(data)
};

const updateBtn=(id)=>{
  window.location.href = `update/${id}`
  
}
const handleProfile=()=>{
  const id1=Cookies.get('userId')
  window.location.href = `updatep/${id1}`

  
}
const name1 = Cookies.get('name')
const email = Cookies.get('email')


  return (
    <div className='todo-main'>
        <div className='todo-card ll'>
            <img alt='logo' className='plogo' src='https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png'/>
            <h3>Name : {name1}</h3>
            <h2>Email : {email} </h2>
            <button className='lbtn' onClick={handleProfile}>Update Profile</button>
        </div>
        <div className='todo-card'>
            <h1 className='textsize'>Hey Hai {name} Lets Make a Task and Complete It</h1>
            <input onChange={(e)=>{setTodo((prev)=>{return {...prev,title:e.target.value}})}} type='text' placeholder='Enter the task'/>
            <button onClick={handleSubmit} className='lbtn'>Add</button>
            <div className='todo-list'>
                {records.map((item,index)=>(
                    <div className='todo-item'>
                        <div>
                        <h2>{item.title}</h2>
                        <p>{item.status1}</p>
                        </div>
                        <div>
                            
                        <button className='lbtn' onClick={()=>{updateBtn(item._id)}}>update</button>                            
                            <button className='lbtn' onClick={()=>{deleteTodo(item._id)}}>Delete</button>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    </div>
  )
}

export default Todo
