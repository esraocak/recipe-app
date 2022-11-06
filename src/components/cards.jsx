import React from 'react'
import { useNavigate } from 'react-router-dom';
import defaultImage from "../assets/default-image.jpg";
export const Cards = ({recipe}) => {
  const navigate = useNavigate();
  return (
    <div> 
      {recipe.map(({recipe}, index) => {
      return (
        <div key={index}>
          <h2>{recipe.label} </h2>
          <img src={recipe.image ||defaultImage } alt="" />
          <button
          onClick={() =>
          navigate("detail",{state:recipe, replace:false})}
          >View More</button>
        </div>
      );
    })}</div>
  )
}
