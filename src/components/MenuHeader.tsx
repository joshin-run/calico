import React from 'react';
import header from '../assets/header-background.png';

function MenuHeader() {
    return (
      <div className="Header">
        <img src={header} className="header-background" alt="header background" />
      </div>
    );
  }

export default MenuHeader;
