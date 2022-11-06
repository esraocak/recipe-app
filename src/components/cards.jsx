import React from 'react'
import { useNavigate } from 'react-router-dom';
import defaultImage from "../assets/default-image.jpg";
import "./cards.css"


export const Cards = ({recipe}) => {
  const navigate = useNavigate();
  return (
    <div className="container3"> 
      {recipe.map(({recipe}, index) => {
      return (
        <div className='container4' key={index}>
          <div className='div-1'>
            <h2>{recipe.label} </h2> 
          </div>
          <div className='div-2'>
            <img src={recipe.image ||defaultImage } alt="" />
          </div>
          <div className='div-3'>
           <button
            onClick={() =>
            navigate("details",{state:recipe, replace:false})}
            >View More</button>
          </div>
        </div>
      );
    })}</div>
  )
}
