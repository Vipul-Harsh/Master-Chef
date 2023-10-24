import React, { useState } from "react";
import "./NavBar.css";
import chef from "../Assets/Untitled_design-removebg-preview.png";
import { Button } from "react-bootstrap";
const SubsCribe = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState("");
  const handleSubscribe = async () => {
    try {
      const response = await fetch("http://localhost:8080/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
       
        setShowPopup(true);
        setEmail("");
      } else {
        setSubscriptionStatus("Subscription failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
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
                GET THE LATEST UPDATES NOW ON YOUR DEVICE SUBSCRIBE NOW AT FLAT
                50% OFF
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
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <Button className="start1" onClick={handleSubscribe}>
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {subscriptionStatus && <p>{subscriptionStatus}</p>}
      {showPopup && (
        <div className="popup">
          <p>You have successfully subscribed!</p>
          <button onClick={() => setShowPopup(false)} className="start1">Close</button>
        </div>
      )}
    </div>
  );
};

export default SubsCribe;
