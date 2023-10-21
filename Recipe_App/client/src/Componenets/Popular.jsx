import React, { useState } from "react";

import recipe from "./Recipie";
import "./NavBar.css";
import PopularRecipies from "./PopularRecipies";
import Leaf from "../Assets/leaf.png";
import Leafy from "../Assets/leafy (2).png";
import ham from "../Assets/hamburger-with-meat-cheese_1308-30898_1_-removebg-preview.png";
import pump from "../Assets/fresh-pumpkin-white-b_1308-39708_1_-removebg-preview.png";
import cap from "../Assets/broccoli-sticker-white-background_1308-62448_3_-removebg-preview.png";
const Popular = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
 const handleCategoryClick = (e, category) => {
  e.preventDefault();
  setSelectedCategory(category); 

 
  if (category === "ALL") {
    setSelectedCategory(null);
  }
};

  return (
    <div>
      <div className="bold">
        <h1>...... POPULAR & TRENDING RECIPIES ......</h1>
        <div className="browse">
          <div className="items_br">
            <a href="#" onClick={(e) => handleCategoryClick(e, "North Recipe")}>
              <h2>NORTH RECIPIE</h2>
            </a>
          </div>
          <div className="items_br">
            <a href="#" onClick={(e) => handleCategoryClick(e, "South Recipe")}>
              <h2>SOUTH RECIPE</h2>
            </a>
          </div>
          <div className="items_br">
            <a href="#" onClick={(e) => handleCategoryClick(e, "Dessert")}>
              <h2>DESERT</h2>
            </a>
          </div>
          <div className="items_br">
            <a href="#" onClick={(e) => handleCategoryClick(e, "Breakfast")}>
              <h2>BREAKFAST</h2>
            </a>
          </div>
          <div className="items_br">
            <a href="#" onClick={(e) => handleCategoryClick(e, "ALL")}>
              <h2>ALL</h2>
            </a>
          </div>
        </div>
      </div>
      <div className="leaf12">
        <img src={Leaf} className="patti" />
      </div>
      <div className="leaf14">
        <img src={Leafy} className="patti" />
      </div>
      <div className="leaf15">
        <img src={ham} className="patti" />
      </div>
      <div className="leaf16">
        <img src={pump} className="patti" />
      </div>
      <div className="cover">
        {recipe
          .filter((food) =>
            selectedCategory ? food.category === selectedCategory : true
          )
          .map((food) => (
            <PopularRecipies key={food.id} food={food} />
          ))}
      </div>
    </div>
  );
};

export default Popular;
