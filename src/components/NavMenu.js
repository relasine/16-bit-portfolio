import React from "react";
import "../css/NavMenu.css";

const NavMenu = props => {
  return (
    <nav className={`nav-menu ${props.menuDeployed}`}>
      <ul>
        <li>
          <a href="#intro-link">about</a>
        </li>
        <li>
          <a href="#projects-link">projects</a>
        </li>
        <li>
          <a href="#social-link">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
