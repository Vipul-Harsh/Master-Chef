import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "./NavBar.css";
import { useSelector, useDispatch } from "react-redux";
import FavoriteCard from "./FavoriteCard";
import { Button } from "react-bootstrap";

const DashBoard = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    const favoritesFromLocalStorage = JSON.parse(
      localStorage.getItem("favorites")
    );

    if (favoritesFromLocalStorage) {
      dispatch({ type: "SET_FAVORITES", favorites: favoritesFromLocalStorage });
    }
  }, [dispatch]);
  const addToFavorites = (fav) => {
    dispatch({ type: "ADD_TO_FAVORITES", fav });

    const updatedFavorites = [...favorites, fav];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  const removeFromFavorites = (favId) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", favId });

    const updatedFavorites = favorites.filter((fav) => fav.id !== favId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  return (
    <>
      <NavBar />
      <div className="screen">
        <div className="part1">
          <div className="p1">
            <div className="prog">
              <div className="round"></div>
            </div>
            <div className="prog1">
              <div className="na1">
                <button className="but">My Whishlist</button>
              </div>
            </div>
          </div>
        </div>
        <div className="part2">
          <div className="wish">
            <h1 className="l">MY WISHLIST</h1>
          </div>
          <div className="wishlist">
            <div className="favorites-section">
              {favorites.map((fav) => (
                <FavoriteCard key={fav.id} fav={fav} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
