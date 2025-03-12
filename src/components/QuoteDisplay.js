// src/components/QuoteDisplay.js
import React from 'react';

const QuoteDisplay = ({ quote }) => {
  if (!quote) return <p>No quote available. Click "Generate Quote"!</p>;

  return (
    <div className="quote-display">
      <blockquote>
        <p>"{quote.content}"</p>
        <footer>— {quote.author}</footer>
      </blockquote>
    </div>
  );
};

export default QuoteDisplay;
