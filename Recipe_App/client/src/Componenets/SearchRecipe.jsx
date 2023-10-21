import React from "react";
import { Button } from "react-bootstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";
const SearchRecipe = ({ food }) => {
  return (
    <div className="mar">
      <div className="dab">
        <div className="yourpic">
          <img src={food.img} className="patti" />
        </div>
        <div className="titlename">
          <Button className="start1" as={Link} to={`/makepage/${food.id}`}>
            {food.desc}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchRecipe;
