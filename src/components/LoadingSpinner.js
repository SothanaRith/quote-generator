import React from "react";
import { motion } from "framer-motion";
import "../styles/LoadingSpinner.css"; // Make sure you have this SCSS file

const LoadingSpinner = () => {
  return (
    <motion.div 
      className="loading-spinner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    >
      <svg
  className="animate-spin h-8 w-8 text-blue-500"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
>
  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
  <path
    className="opacity-75"
    fill="currentColor"
    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
  ></path>
</svg>

    </motion.div>
  );
};

export default LoadingSpinner;

