import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote, saveQuote } from "../redux/quoteSlice";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Home.scss";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const dispatch = useDispatch();
  const { currentQuote, loading, error } = useSelector((state) => state.quotes);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const handleSaveQuote = () => {
    dispatch(saveQuote());
    setShowMessage(true);

    // Show toast notification
    toast.success("❤️ Quote saved successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

    // Hide animated message after 3 seconds
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {loading && <LoadingSpinner />}
      {error && <p className="error">Error: {error}</p>}
      
      {!loading && !error && currentQuote && (
        <motion.div 
          className="quote-card"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="quote-header">
            <div className="author-icon">{currentQuote.author[0]}</div>
            <div className="author-info">
              <p className="author-name">{currentQuote.author}</p>
              <small>{new Date(currentQuote.dateAdded).toDateString()}</small>
            </div>
          </div>
          
          <p className="quote-text">"{currentQuote.content}"</p>

          <div className="quote-footer">
            <span className="quote-tags">{currentQuote.tags.join(", ")}</span>
          </div>

          <button className="apply-btn" onClick={handleSaveQuote}>❤️ Save Quote</button>
        </motion.div>
      )}

      <br />
      {/* Animated Save Message */}
      {showMessage && (
        <motion.div 
          className="success-message"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          ❤️ Quote saved successfully!
        </motion.div>
      )}

      <br />
      <motion.button 
        className="generate-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => dispatch(fetchQuote())}
      >
        🔄 Generate Quote
      </motion.button>
    </motion.div>
  );
};

export default Home;
