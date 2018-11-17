import React from "react";
import "../css/Hamburger.css";

const Hamburger = props => {
  return (
    <div
      onClick={props.handleHamburgerClick}
      className={`hamburger ${props.menuDeployed}`}
    >
      <div className="hamburger-top" />
      <div className="hamburger-middle" />
      <div className="hamburger-bottom" />
    </div>
  );
};

export default Hamburger;
