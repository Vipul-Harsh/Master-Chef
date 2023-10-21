import React, { useState } from "react";
import FoodLogo from "../Assets/FoodLogo.png";
import "./NavBar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchModal from "./SearchModal";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="head">
        <div className="logo">
          <span>
            <img src={FoodLogo} alt="My_icon" className="leg" />
          </span>
        </div>
        <nav className="navbar">
          <div className="list">
            <span className="links">
               <Link to="/home" className="o">Categories</Link>
            </span>
            <span className="links">
               <Link to="/add-recipe" className="o">Recipes</Link>
            </span>
            <span className="links">
             <Link to="/dashbord" className="o">DashBoard</Link>
            </span>
            <span className="links">
             
 <Link to="/signup" className="o">Logout</Link>
            </span>
            <span className="links">
              <a href="#" className="o" onClick={openModal}>
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{
                    color: "white",
                    height: "20px",
                  }}
                />
              </a>
            </span>
          </div>
        </nav>
      </div>

      {isModalOpen && <SearchModal show={isModalOpen} onHide={closeModal} />}
    </div>
  );
};

export default NavBar;
