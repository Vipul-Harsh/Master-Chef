import React, { useState } from "react";
import NavBar from "./NavBar";
import "./NavBar.css";
import { useSelector } from "react-redux";
import FavoriteCard from "./FavoriteCard";

const DashBoard = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <>
      <NavBar />
      <div className="screen">
        <div className="part1">
          <div className="p1">
            <div className="prog">
              <div className="round"></div>
              <div className="na"></div>
            </div>
            <div className="prog1">
              <div className="na1"></div>
            </div>
          </div>
        </div>
        <div className="part2">
          <div className="wish"><h1 className="l">MY WISHLIST</h1></div>
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
