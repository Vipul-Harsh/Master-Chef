import React, { useState } from "react";
import NavBar from "./NavBar";
import "./NavBar.css";
import axios from "axios";

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (name && email && subject && message) {
      axios.post("http://localhost:8080/add", formData).then((res) => {
        console.log("Contact form submitted successfully");
      }).catch((error) => {
        alert("Contact form submission failed. Please try again.");
      });
    } else {
      alert("Invalid contact form data. Please fill in all fields.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <NavBar />
      <div className="add">
        <h1 className="h">Contact Us</h1>
        <form onSubmit={handleSubmit} className="add1">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />

          <button type="submit" className="start2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddRecipe;
