import React from 'react';

export default function CategoryFilter({ currentCategory, onCategoryChange }) {
  // Categories supported by NewsAPI top-headlines.
  const categories = ['general', 'technology', 'business', 'sports', 'entertainment', 'science'];

  return (
    <nav className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-pill ${currentCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </nav>
  );
}