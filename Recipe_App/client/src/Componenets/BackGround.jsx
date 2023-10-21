import React, { useState } from "react";
import "./NavBar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchModal from "./SearchModal";

const BackGround = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="sky">
      <div className="slide_move">
        <div className="gg">
          <div className="het">
            <div className="logs">
              <h1>FIND DELICIOUS INDIAN RECIPES</h1>
            </div>
            <div id="a">
              <h3>
                FROM PASTA TO PIZZA, FROM NORTH INDIAN TO SOUTH INDIAN, YOU FIND
                IT ALL HERE
              </h3>
            </div>

            <div id="search" onClick={openModal}>
              <div className="dd">
                <input type="search" id="bb" />
              </div>
              <div className="tt">
                <FontAwesomeIcon icon={faSearch} id="ico" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <SearchModal show={isModalOpen} onHide={closeModal} />}
    </div>
  );
};

export default BackGround;
