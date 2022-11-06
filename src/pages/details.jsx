import React from 'react'
import { useLocation } from 'react-router-dom';
import diet from "../assets/diet.svg"
import "./details.css"

const Details = () => {
  const {state}=useLocation();
  return (
    <div className='cnt' >
      <div className='header'>
        <h1>{state?.label} </h1>
        <img src={diet} alt={diet}/>
      </div>
      <div className='detail'>
        <div className='detail-1'>

          <h4>NUTRIENTS</h4>
          
          <p>
            {state.totalNutrients.CA.label} :{' '}
            {Math.round(state.totalNutrients.CA.quantity)}
            {state.totalNutrients.CA.unit}
          </p>
          <p>
            {state.totalNutrients.CHOCDF.label} :{' '}
            {Math.round(state.totalNutrients.CHOCDF.quantity)}
            {state.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {state.totalNutrients.CHOLE.label} :{' '}
            {Math.round(state.totalNutrients.CHOLE.quantity)}
            {state.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {state.totalNutrients.ENERC_KCAL.label} :{' '}
            {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
            {state.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{state.totalWeight}</p>
          <p>Calories: {Math.round(state.calories)}</p>
            {state.digest.slice(0, 4).map((item, index) => (
          <p key={index}>
            {item.label} : {Math.round(item.total)}
          </p>
        ))}
        </div>
        <div className='detai-2'>
          <img src={state.image} alt="default" />
        </div>
        <div className='detail-3'>
          {state?.ingredientLines.map((ingredient,index)=>(
              <div>
                <p>{index+1}-{ingredient} </p>
              </div>
            ))}

        </div>
      </div>
    </div>
  )
}

export default Details