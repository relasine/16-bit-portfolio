import React from "react";
import "../css/NavMenu.css";

const NavMenu = props => {
  return (
    <nav className={`nav-menu ${props.menuDeployed}`}>
      <ul>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">projects</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
