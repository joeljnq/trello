import React from "react";
import trelloLogo from './assets/trelloLogo.png'
import  './assets/css/navBar.css'
import arrowDown from './assets/arrow-down.svg'
const NavBar: React.FC = () => {
  return (
    <nav>
      <img src={trelloLogo} alt="logo-trello" id="logo" />
      <ul id="ul-wrapper">
        <li>Funciones <img src={arrowDown} className="arrowDown" alt="arrow-down"/> </li>
        <li>Soluciones <img src={arrowDown} className="arrowDown" alt="arrow-down"/></li>
        <li>Planes <img src={arrowDown} className="arrowDown" alt="arrow-down"/></li>
        <li>Precios <img src={arrowDown} className="arrowDown" alt="arrow-down"/></li>
        <li>Recursos <img src={arrowDown} className="arrowDown" alt="arrow-down"/></li>
      </ul>
      <button>Log in</button>
    </nav>
  );
};

export default NavBar;
