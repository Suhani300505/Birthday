import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cake.css"; 

const Cake = () => {
  const navigate = useNavigate();

  const handleBlow = () => {
    const cake = document.getElementById("cake");
    cake.classList.add("blow");

    setTimeout(() => {
      navigate("/home");
    }, 2000); 
  };

  return (
    <div className="cake-container">
      <h1>🎂 Make a Wish and Blow the Cake!</h1>
      <img
        id="cake"
        src="../assets/img/Cake.png"
        alt="Birthday Cake"
        onClick={handleBlow}
        className="cake-img"
      />
      <p>(Click the cake to blow!)</p>
    </div>
  );
};

export default Cake;
