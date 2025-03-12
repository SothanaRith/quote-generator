import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeQuote } from "../redux/quoteSlice";
import "../styles/Favorites.scss";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.quotes);

  return (
    <div className="favorites-container">
      {favorites.length === 0 ? (
        <p className="no-quotes">No favorite quotes yet.</p>
      ) : (
        <div className="quotes-grid">
          {favorites.map((quote) => (
            <div key={quote._id} className="quote-card">
              <div className="card-header">
                <div className="author-icon">{quote.author[0]}</div>
                <div className="author-info">
                  <p className="author-name">{quote.author}</p>
                  <small>{new Date(quote.dateAdded).toDateString()}</small>
                </div>
                <button className="save-btn" onClick={() => dispatch(removeQuote(quote._id))}>
                  Remove
                </button>
              </div>
              <p className="quote-text">"{quote.content}"</p>
              <div className="quote-footer">
                <span className="quote-tags">{quote.tags.join(", ")}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
