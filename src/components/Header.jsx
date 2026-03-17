import React from 'react';

export default function Header({ isDarkMode, toggleDarkMode, readCount }) {
  return (
    <header className="app-header">
      <div className="header-title-group">
        <h1>Headlines</h1>

        {/* Read count badge */}
        {readCount > 0 && (
          <div className="stats-pill">
            Read: {readCount}
          </div>
        )}
      </div>
      
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  );
}