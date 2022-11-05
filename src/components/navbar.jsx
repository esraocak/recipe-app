import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='nav-left'> 
          <Link to="/"><i>Linda's</i> <span>Recipe</span></Link>
        </div>
        <div className='nav-right'>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="register">Register</Link>
          <Link to="Logout">Logout</Link>
        </div>

    </nav>
  
  )
}

export default Navbar