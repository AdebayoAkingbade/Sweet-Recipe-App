import React from 'react';
import './RecipeMap.css'

function RecipeMap({recipe}) {
 return (
  <div className='display_recipe' onClick={() => {
     window.open(recipe['recipe']['url'])
  } }>
     <img className='recipe_img' src={recipe['recipe']['image']} />
     <div className='recipe_name'>{recipe['recipe']['label']}</div>
   </div>
 )
}

export default RecipeMap