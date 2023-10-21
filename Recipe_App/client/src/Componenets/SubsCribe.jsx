import React from "react";
import "./NavBar.css";
import chef from "../Assets/Untitled_design-removebg-preview.png";
import { Button } from "react-bootstrap";
const SubsCribe = () => {
  return (
    <div>
      <div className="ced">
        <div className="car">
          <div id="hf">
            <div className="logs">
              <h1
                style={{
                  backgroundColor: "white",
                  width: "80%",
                  marginTop: "70px",
                }}
              >
                GET THE LATEST UPDATES NOW ON YOUR DEVICE SUBSCRIBE NOW AT FLAT 50% OFF
              </h1>
            </div>
            <div id="a">
              <h3
                style={{
                  backgroundColor: "white",
                  width: "80%",
                  marginTop: "70px",
                }}
              >
                EVERYONE CAN BE A MASTER CHEF IN THERE OWN KITCHEN NOW !
              </h3>
            </div>
<div className="button">
            <div id="but">
              <input type="email" placeholder="Enter email"></input>
              <Button className="start1">Subscribe</Button>
            </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubsCribe;
