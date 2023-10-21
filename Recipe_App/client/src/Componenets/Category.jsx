import React from "react";
import "./NavBar.css";
import leaf from "../Assets/leaf.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const Category = ({ food }) => {
  return (
    <>
      <Link to={`/categories/${food.desc}`}>
        <Card
          style={{
            width: "18rem",
            height: "18rem",
            border: "none",
            boxShadow: "10px 10px 10px rgba(255, 166, 0, 0.438)",
          }}
          id="crt"
        >
          <Card.Img variant="top" src={food.img} className="image" />
          <Card.Body className="card_body">
            <Card.Title className="text">{food.desc}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default Category;
