import React, { Component } from "react";

import Hamburger from "./Hamburger";
import NavMenu from "./NavMenu";

import "../css/Header.css";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      menuDeployed: false
    };
  }

  handleHamburgerClick = () => {
    this.setState({
      menuDeployed: !this.state.menuDeployed
    });
  };

  render() {
    return (
      <header className="header">
        <Hamburger
          handleHamburgerClick={this.handleHamburgerClick}
          menuDeployed={this.state.menuDeployed}
        />
        <NavMenu menuDeployed={this.state.menuDeployed} />
      </header>
    );
  }
}

export default Header;
