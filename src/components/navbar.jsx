import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"


const Navbar = () => {
  

  return (
    <nav className='nav'>
        <div className='nav-left'> 
          <Link to="/" className='l'><i>Linda's</i> <span>Recipe</span></Link>
        </div>

        <div className='nav-right'>
          <Link to="/" className='l'>Home</Link>
          <Link to="about" className='l'>About</Link>
          <Link to="register" className='l'>Register</Link>
          <Link to="Logout" className='l'>Logout</Link>
        </div>

    </nav>
  
  )
}

export default Navbar