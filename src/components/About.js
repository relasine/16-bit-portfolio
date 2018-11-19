import React, { Component } from "react";
import "../css/About.css";

import FighterOne from "./FighterOne";
import FighterTwo from "./FighterTwo";
import FighterThree from "./FighterThree";
import SpellOne from "./SpellOne";
import CastTwo from "./CastTwo";

class About extends Component {
  constructor() {
    super();

    this.state = {
      fighterOne: false,
      fighterTwo: false,
      fighterThree: false
    };
  }

  fighterOne = () => {
    this.setState({
      fighterOne: !this.state.fighterOne,
      fighterTwo: false,
      fighterThree: false
    });
  };

  fighterTwo = () => {
    this.setState({
      fighterOne: false,
      fighterTwo: !this.state.fighterTwo,
      fighterThree: false
    });
  };

  fighterThree = () => {
    this.setState({
      fighterOne: false,
      fighterTwo: false,
      fighterThree: !this.state.fighterThree
    });
  };

  render() {
    return (
      <section className="about">
        <div className="about-row">
          <h4 className="about-text">About</h4>
          <article className="about-scene-column">
            <div className="about-scene">
              <FighterOne dialogue={this.fighterOne} />
              <FighterTwo dialogue={this.fighterTwo} />
              <FighterThree dialogue={this.fighterThree} />
              <SpellOne />
              <CastTwo />
            </div>
            <p className={`${this.state.fighterOne} fighter-one-dialogue`}>
              Art assets are licensed by{" "}
              <a href="http://finalbossblues.com/" target="_black">
                Jason Perry
              </a>
              , aka 'Final Boss Blues'
            </p>
            <p className={`${this.state.fighterTwo} fighter-two-dialogue`}>
              Thank you for coming to my lovely tea party.
            </p>
            <p className={`${this.state.fighterThree} fighter-three-dialogue`}>
              This page was built in React. All animations created using CSS.
            </p>
          </article>
        </div>
      </section>
    );
  }
}

export default About;
