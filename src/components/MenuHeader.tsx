import React from 'react';
import logo from '../assets/Calico-logo-icon.png';
import '../styles/MenuHeader.css';

function MenuHeader() {
    return (
      <div className="MenuHeader">
        <div className="wrapper">
          <img src={logo} className="calico-logo-icon" alt="calico logo" />
        </div>
      </div>
    );
  }
  
  export default MenuHeader;
  