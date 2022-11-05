import React from 'react'
import "./header.css"

const Header = ({setQuery,setMeal,recipes,getData}) => {

  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const handleSubmit = (e) => {
    e.preventDefault();
    getData()
  }
  return (
    <div className='container2'>
      <h1 className='h1'> RECIPE APP</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search Meal' onChange={(e)=>setQuery (e.target.value)}   />
        <button type='submit'>SEARCH </button>
        <select name="mealType" id="mealType" onChange={(e) => setMeal(e.target.value)}>
          {mealType.map((meal, index) => {
            return (
              <option key={index} value={meal}>
                {meal}
              </option>
            );
          })}
        </select>
      </form>
      
    </div>
  )
}

export default Header