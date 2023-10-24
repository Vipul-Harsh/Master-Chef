import React, { useState } from "react";
import NavBar from "./NavBar";
import "./NavBar.css";
import axios from "axios";
const AddRecipe = () => {
  const [recipeData, setRecipeData] = useState({
    name: "",
    ingredients: "",
    directions: "",
    category: "",
    image: null,
  });
  const handleSubmit =  (e) => {
    e.preventDefault();
    const { name, ingredients, directions, category } = recipeData;
    if (name && ingredients && directions && category ){
      axios.post("http://localhost:8080/add", recipeData).then((res) => {
         
        console.log("successful");
        }).catch((error) => {
         
          alert("Registration failed. Please try again.");
        });
  } else {
      alert("Invalid registration data.");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    setRecipeData({ ...recipeData, image: imageFile });
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
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="select"
          />

          <button type="submit" className="start2" onClick={handleSubmit}>
            Submit Recipe
          </button>
        </form>
      </div>
    </>
  );
};

export default AddRecipe;
