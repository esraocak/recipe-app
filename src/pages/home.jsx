import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Header from '../components/header';
import "./home.css"

const Home = () => {
  const APP_ID = "9f75fe10";
  const APP_KEY = "62542a120a7a2a6ae24fa67940c01808";
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState("");
  const[recipe,setRecipes] = useState ("");
  


  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`

  const getData= async () =>{
    const {data :{hits}} = await axios (url)
    console.log(hits)
    setRecipes(hits);
  }
  

  return (
    <div>
     <Header setQuery ={setQuery}
             setMeal = {setMeal}
             setRecipes={setRecipes}
             getData={getData}
      />
    </div>
  )
}

export default Home