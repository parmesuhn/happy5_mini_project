import React from 'react';
import logohappy from './Logo-Square.png';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
          <img src={logohappy} alt="Logo" className="logo-img" />
        </div>
    </div>
  );
};

export default Sidebar;
