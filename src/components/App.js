import React, { Component } from "react";

import Header from "./Header";
import Intro from "./Intro";
import Projects from "./Projects";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Projects />
      </div>
    );
  }
}

export default App;
