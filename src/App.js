import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import "./styles/Navbar.scss"; // Import SCSS file
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="app-container">
      <motion.nav 
        className="navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="nav-link">🏠 Home</Link>
        <Link to="/favorites" className="nav-link">❤️ Favorites</Link>
      </motion.nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;