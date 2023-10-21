import React, { useState } from "react";
import NavBar from "./NavBar";
import "./NavBar.css"
const AddRecipe = () => {
  const [recipeData, setRecipeData] = useState({
    name: "",
    ingredients: "",
    directions: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    setRecipeData({ ...recipeData, image: imageFile });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRecipeData({
      name: "",
      ingredients: "",
      directions: "",
      category: "",
      image: null,
    });
  };

  return (
<>
<NavBar />
    <div className="add">

      <h1 className="h">Add Recipe</h1>
      <form onSubmit={handleSubmit} className="add1">
        <input
          type="text"
          name="name"
          value={recipeData.name}
          onChange={handleChange}
          placeholder="Recipe Name"
          required
        />
        <textarea
          name="ingredients"
          value={recipeData.ingredients}
          onChange={handleChange}
          placeholder="Ingredients"
          required
        />
        <textarea
          name="directions"
          value={recipeData.directions}
          onChange={handleChange}
          placeholder="Directions"
          required
        />
        <input
          type="text"
          name="category"
          value={recipeData.category}
          onChange={handleChange}
          placeholder="Category"
          required
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} className="select" />

        <button type="submit" className="start2">Submit Recipe</button>
      </form>
    </div>
</>
  );
};

export default AddRecipe;
