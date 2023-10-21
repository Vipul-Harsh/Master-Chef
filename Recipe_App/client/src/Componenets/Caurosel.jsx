import React from "react";
import Carousel from "react-bootstrap/Carousel";
import first from "../Assets/first.png";
import second from "../Assets/second.png";
import third from "../Assets/Orange Flowers 25th Wedding Anniversary Card (2).png";
import chef from "../Assets/Untitled_design-removebg-preview.png";
import { Button } from "react-bootstrap";
const Caurosel = () => {
  return (
    <>
      <div className="hedu">
        <h1>...... EXITEING OFFERS ......</h1>
      </div>
      <div className="ced">
        <div className="caro">
          <div id="fe">
            <div className="logs">
              <h1 style={{ backgroundColor: "white", width: "80%" ,marginTop:"70px"}}>
               LEARN THE ART OF BECOMING A CHEF FROM OUR CHEF THROUGH 1:1 SESSION
              </h1>
            </div>
            <div id="a">
              <h3 style={{ backgroundColor: "white", width: "80%",marginTop:"70px" }}>
                EVERYONE CAN BE A MASTER CHEF IN THERE OWN KITCHEN NOW !
              </h3>
            </div>
            <div id="butm">
              <Button className="start1" style={{marginTop:"50px"}}>Learn More</Button>
            </div>
          </div>
          <div id="he">
            <img src={chef} className="i" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Caurosel;
