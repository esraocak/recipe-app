import React from 'react'
import axios from 'axios'
import "./home.css";
import { useEffect, useState } from 'react';
import Header from '../components/header';
import "./home.css"
import { Cards } from '../components/cards';
import home from "../assets/home.svg";

const Home = () => {
  const APP_ID = process.env.REACT_APP_APP_ID
  const APP_KEY = process.env.REACT_APP_APP_KEY
  const [query, setQuery] = useState("egg");
  const [meal, setMeal] = useState("breakfast");
  const[recipe,setRecipes] = useState (null);
  


  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`

  const getData= async () =>{
    if(query){
      try {
        const {data :{hits}} = await axios (url)
        setRecipes(hits);
        console.log(hits)
        
      } catch (error) {
        console.log(error); 
      }
    } else {
      alert ("Fill the Form");
      } 
    };
  

  return (
    <div className='main'>
     <Header setQuery ={setQuery}
             setMeal = {setMeal}
             setRecipes={setRecipes}
             getData={getData}
      />
        <div className='recipe-cards'> 
          {!recipe && (
            <div className='div-img'>
              <img className='img' src={home} alt="" />
            </div>
          )}

          {recipe?.length === 0 && (
            <h1 className='text'>The Food can not be found</h1>
          )}

          {recipe?.length > 0 && <Cards recipe={recipe} />}
        </div>
    </div>
  )
}

export default Home