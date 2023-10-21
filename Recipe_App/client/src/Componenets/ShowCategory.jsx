import React from 'react';
import data from "./CategoryData";
import Category from "./Category"
import "./NavBar.css"
const ShowCategory = () => {
  return (
<>
<div className='show'>
<h1>...... EXPLORE BY CATEGORIES ......</h1>
</div>
	<div>
	    <div className='cover'>
	  {data.map(food=> (
        <Category key={food.id} food={food} />
      ))}
	</div>
	</div>
</>
  );
}

export default ShowCategory;
