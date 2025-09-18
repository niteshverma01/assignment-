import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">TaskFlow</h1>
        <p className="header-subtitle">Organize your life, one task at a time</p>
      </div>
      <div className="header-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </header>
  );
};

export default Header;