import React from 'react';
import { Button } from "react-bootstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from './redux/actions/favoritesActions.js';

const PopularRecipies = ({ food }) => {
const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const toggleFavorite = (food) => {
    if (favorites.some((item) => item.id === food.id)) {
      dispatch(removeFavorite(food));
    } else {
      dispatch(addFavorite(food));
    }
};
const isFavorite = favorites.some((item) => item.id === food.id);

  return (
    <div>

      <div className="slip">
        <div className="likh">
          <div className="res">{food.desc}</div>
          <div className="time">Time : {food.time}</div>
          <div className="serving">Serve : {food.serv}</div>
         
          <Button as={Link} to={`/makepage/${food.id}`} className="start">
            Start making
          </Button>
        </div>

        <img src={food.img} className="photo" alt={food.desc} />
 
            <FontAwesomeIcon icon={faHeart} className="icona" onClick={() => toggleFavorite(food)}/>
          
      </div>
    </div>
  );
};

export default PopularRecipies;
