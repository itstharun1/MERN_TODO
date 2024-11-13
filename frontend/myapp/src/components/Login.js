
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Url1 } from './url';
import Cookies from 'js-cookie'


function Login() {
  const [signUpDetails,setSignUpDetails]=useState({
    email: '',
    password: ''
   
  })

  const handleSubmit = async() => {
    if(( signUpDetails.password==="")  || (signUpDetails.email==="")){
      alert("Please Enter details");
    }else{
      const url = `${Url1}login`
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signUpDetails)
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if(data.message==="Login successfully"){
          alert("Login successfully");
          Cookies.set('token', data.token,{expires:1});
          Cookies.set('name', data.name,{expires:1});
          Cookies.set('userId',data.userId,{expires:1});
          window.location.href = "/todo"
          }
          else{
            alert("Invalid Email or Password");
            }
            
    }

   
  };
  const token = Cookies.get('token')
  
  if(token){
    window.location.href = "/todo"
  }






  return (
    <div className='login-card'>
        <div>
            <img src='https://jonasfitness.com/wp-content/uploads/2022/12/Software-Person-Icon-V2.png' className='logo' alt='logo'/>
        </div>
        <div className='login-form'>
            <h1>Welcome Back</h1>
            <input onChange={(e)=>{setSignUpDetails((prev)=>{return {...prev,email:e.target.value}})}} placeholder='Enter Email' type='text'/>
            <input onChange={(e)=>{setSignUpDetails((prev)=>{return {...prev,password:e.target.value}})}} placeholder='Enter Password' type='password'/>
            <button onClick={handleSubmit}>Log In</button>
            <p>Dont have an account create it! <Link to='/signup'>Register</Link></p>
        </div>      
    </div>
  );
}

export default Login;
