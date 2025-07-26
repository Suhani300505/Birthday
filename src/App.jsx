import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Wish from "./Components/BirthdayWish";
import Love from "./Components/Love";
import Cake from "./Components/Cake";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cake />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/love" element={<Love />} />
      </Routes>
    </Router>
  );
}

export default App;
