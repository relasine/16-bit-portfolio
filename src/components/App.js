import React, { Component } from "react";

import Header from "./Header";
import Intro from "./Intro";
import Projects from "./Projects";
import ContactSocial from "./ContactSocial";
import About from "./About";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Projects />
        <ContactSocial />
        <About />
      </div>
    );
  }
}

export default App;
