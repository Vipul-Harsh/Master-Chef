import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LetsMake from "./Componenets/LetsMake";
import RecipeList from "./Componenets/RecipeList";
import AddRecipe from "./Componenets/AddRecipe";
import LoginRegister from "./Componenets/LoginRegister";
import DashBoard from "./Componenets/DashBoard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null); // Add state to store user data
const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Check for user authentication data in localStorage
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
      // If authentication data exists, set isLoggedIn to true
      setIsLoggedIn(true);
    }

    // Initialize favorites state from local storage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <LoginRegister onLogin={() => setIsLoggedIn(true)} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="/makepage/:id" element={<LetsMake />} />
        <Route exact path="/categories/:category" element={<RecipeList />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/signup" element={<LoginRegister />} />
        <Route
          path="/dashbord"
          element={<DashBoard userData={userData} favorites={favorites} />} // Pass userData as a prop
        />
<Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
