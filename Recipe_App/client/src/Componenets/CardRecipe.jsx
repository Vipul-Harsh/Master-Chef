import React from 'react';
import NavBar from './NavBar';
import "./NavBar.css"
import { Button } from 'react-bootstrap';
const CardRecipe = ({food}) => {
  return (
	<div>
	  <NavBar />
 <div className="mar">
      <div className="dab">
        <div className="yourpic">
          <img src={food.name} className="patti" />
        </div>
        <div className="titlename">
          <Button className="start1" >
            Start Making
          </Button>
        </div>
      </div>
    </div>
	</div>
  );
}

export default CardRecipe;
