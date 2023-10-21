import React from 'react';
import snacks from './CategoryRecipe';
import NavBar from './NavBar';
import CardRecipe from "./CardRecipe"
const RecipeList = ({ match }) => {
  const category = match.params.category;
const filteredRecipes = snacks.filter(recipe => recipe.category === category);
  return (
	<div>
	  <NavBar/>
<div>
	    <div className='cover'>
	  {filteredRecipes.map(food=> (
        <CardRecipe key={food.id} food={food} />
      ))}
	</div>
	</div>
	</div>
  );
}

export default RecipeList;
