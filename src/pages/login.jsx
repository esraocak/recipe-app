import React from 'react'
import meal from "../assets/meal.svg"
import "./login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  
  const userInfo={
    username:"admin"
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user",JSON.stringify(userInfo))
    navigate(-1)
  }

  return (
    <div className='container'> 
    <div className='inner-container'>
      <img className='image' src={meal} alt="" />
      <h1>RECIPE</h1>
      <div>
        <form className='form' onSubmit={handleSubmit}>
          <input type="email" name="name" id="name" placeholder='Enter your e-mail' required />
          <input type= "password" name="password" id="password" placeholder='Enter your password' required />
          <button type="submit"> LOGIN </button>
        </form>
      </div>
      

    </div>
   
    </div>
  )
}

export default Login