import React, { Component } from "react";
import "../css/Intro.css";

class Intro extends Component {
  constructor() {
    super();
    this.state = {
      char1: false,
      char2: false
    };
  }

  char1 = () => {
    this.setState({
      char1: !this.state.char1,
      char2: false
    });
  };

  char2 = () => {
    this.setState({
      char1: false,
      char2: !this.state.char2
    });
  };

  render() {
    return (
      <section className="intro-row" id="intro-link">
        <h4 className="intro-text">Kevin Simpson</h4>
        <section className="intro-wrapper">
          <div className="house" />
          <div className="grass" />
          <div className="sidewalk" />
          <div className="guy" onClick={this.char1} />
          <div className="guy-two" onClick={this.char2} />
          <p className={`char1-dialogue ${this.state.char1}`}>
            Kevin Simpson is a front-end developer with a love for React, CSS
            transitions and animations, design, and archaic 16-bit role-playing
            games from the early 90's.
          </p>
          <p className={`char2-dialogue ${this.state.char2}`}>
            He is skilled with HTML/CSS, JavaScript, React, React Native, Redux,
            Router, Enzyme/Jest, Responsive UI with Grid and Flexbox, Node.js,
            and Express.
          </p>
        </section>
      </section>
    );
  }
}

export default Intro;
