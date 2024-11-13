import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './LandingPage.css'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <div className='landing-page'>
        <h1>Welcome to Todo's</h1>
        <h1>Manage your daily Tasks in a easy way </h1>
        
        <Link to='/login' className='lbtn1'> 
        <button className='lbtn'>Get Started  </button>
        </Link>
       
        
    </div>
  )
}

export default Landingpage
