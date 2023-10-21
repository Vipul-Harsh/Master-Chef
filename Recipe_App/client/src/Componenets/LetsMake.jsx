import React from "react";
import NavBar from "./NavBar"
import { useParams } from "react-router-dom";
import direction from "./Directions"; // Import your detailed recipe data
import "./MakePage.css"; // Import your CSS file

const LetsMake = () => {
  const { id } = useParams();
  const recipe = direction.find((item) => item.id === parseInt(id)); // Find the recipe by ID

  if (!recipe) {
    return <div className="recipe-not-found">Recipe not found</div>;
  }

  return (
<>
<NavBar />
    <div className="lets-make-container">
      <div className="recipe_img">
        <img src={recipe.img} className="patti" />
      </div>
      <div className="letsmake">
        <h1 className="recipe-title">{recipe.desc}</h1>
        <p className="recipe-info">Time: {recipe.time}</p>
        <p className="recipe-info">Serves: {recipe.serv}</p>

        <div className="recipe-section1">
          <h2 className="recipe-section-title">Ingredients:</h2>
          <ol className="recipe-list1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="recipe-item">
                {ingredient}
              </li>
            ))}
          </ol>
        </div>

        <div className="recipe-section2">
          <h2 className="recipe-section-title">Directions:</h2>
          <ol className="recipe-list">
            {recipe.directions.map((step, index) => (
              <li key={index} className="recipe-item">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
</>
  );
};

export default LetsMake;
