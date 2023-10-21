import React, { useState } from "react";
import styled from "styled-components";
import "./LoginRegister.css";
import NavBar from "./NavBar";
import axios from "axios";
import { useDispatch } from 'react-redux';


const LoginRegister = (props) => {
const dispatch = useDispatch();
  const [alertMessage, setAlertMessage] = useState("");
  const [addclass, setaddclass] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSuccessfulLogin = (userData) => {
    // Save user data in local storage
    localStorage.setItem("userData", JSON.stringify(userData));
    // Call the 'onLogin' function to update the login state
console.log(localStorage);
    props.onLogin();
  };

  const register = (e) => {
    e.preventDefault();
    const { name, email, password, confirmpassword } = user;

    if (name && email && password && password === confirmpassword) {
      axios
        .post("http://localhost:8080/register", user)
        .then((res) => {
          // Assuming the server responds with the user's data
          const userData = res.data.user;
          handleSuccessfulLogin(userData);
        })
        .catch((error) => {
          // Handle registration errors
          setAlertMessage("Registration failed. Please try again.");
        });
    } else {
      setAlertMessage("Invalid registration data.");
    }
  };

  const login = (e) => {
    e.preventDefault();
    const { email, password } = user;

    if (email && password) {
      axios
        .post("http://localhost:8080/login", user)
        .then((res) => {
          // Assuming the server responds with the user's data
          const userData = res.data.user;
          handleSuccessfulLogin(userData);
        })
        .catch((error) => {
          // Handle login errors
          setAlertMessage("Login failed. Please check your credentials.");
        });
    } else {
      setAlertMessage("Invalid login data.");
    }
  };

  return (
    <>
      <div className="fig">
        <div className={`container1 ${addclass}`} id="container1">
          <div className="form-container  sign-up-container">
            <form className="form">
              <h1>Create Account</h1>
              {/* Input fields for registration */}
              <input
                type="text"
                name="name"
                value={user.name}
                placeholder="NAME"
                className="input"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                value={user.email}
                placeholder="EMAIL"
                className="input"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                value={user.password}
                placeholder="PASSWORD"
                className="input"
                onChange={handleChange}
              />
              <input
                type="password"
                name="confirmpassword"
                value={user.confirmpassword}
                placeholder="CONFIRM PASSWORD"
                className="input"
                onChange={handleChange}
              />
              <button type="submit" onClick={register}>
                REGISTER
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className="form">
              <h1>Login</h1>
              {/* Input fields for login */}
              <input
                type="email"
                name="email"
                value={user.email}
                placeholder="EMAIL"
                className="input"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                value={user.password}
                placeholder="PASSWORD"
                className="input"
                onChange={handleChange}
              />
              <button type="submit" onClick={login}>
                LOGIN
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => setaddclass("")}
                >
                  GO TO LOGIN
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <button
                  className="ghost"
                  id="signUp"
                  onClick={() => setaddclass("right-panel-active")}
                >
                  GO TO REGISTER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Display alert message */}
      {alertMessage && <div className="alert">{alertMessage}</div>}
    </>
  );
};

export default LoginRegister;
