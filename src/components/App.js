import React, { Component } from "react";

import Header from "./Header";
import Intro from "./Intro";
import Projects from "./Projects";
import ContactSocial from "./ContactSocial";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Projects />
        <ContactSocial />
      </div>
    );
  }
}

export default App;
