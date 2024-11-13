
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import { Link } from 'react-router-dom';
import { Url1 } from './url';
import { useState } from 'react';
import Cookies from 'js-cookie'




function SignUp() {
  const [signUpDetails,setSignUpDetails]=useState({
    name:'',
    email: '',
    password: ''
   
  })
  const [confirm,setConfirm]=useState("");

  





  const handleSubmit = async() => {
    if((confirm!==(signUpDetails.password)) || (signUpDetails.name)==="" || signUpDetails.email===""){
      alert("Password does not match or Enter details");
    }else{
      const url = `${Url1}signup`
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signUpDetails)
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        if(data.message === 'User created successfully'){
          alert('User created successfully please login')
          Cookies.set('token', data.token,{expires:1});
          Cookies.set('name', signUpDetails.name,{expires:1});
          Cookies.set('email', signUpDetails.email,{expires:1});
          Cookies.set('userId',data.userId,{expires:1});
          window.location.href = '/todo'
          }
          else{
            alert('User already exits')
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
            <h1>Welcome Please Register</h1>
            <input  onChange={(e)=>{setSignUpDetails((prev)=>{return {...prev,name:e.target.value}})}} placeholder='Enter your name' type='text'/>
            <input onChange={(e)=>{setSignUpDetails((prev)=>{return {...prev,email:e.target.value}})}} placeholder='Enter Email' type='text'/>
            <input onChange={(e)=>{setSignUpDetails((prev)=>{return {...prev,password:e.target.value}})}} placeholder='Enter Password' type='password'/>
            <input onChange={(e)=>setConfirm(e.target.value)}  placeholder='Confirm Password' type='password'/>
            <button onClick={handleSubmit}>Register </button>
            <p>Have an account ! <Link to='/login'>Log In</Link></p>
        </div>      
    </div>
  );
}

export default SignUp;
