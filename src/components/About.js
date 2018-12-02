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
          <h4 className="about-text">Page Info</h4>
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
              <a
                href="http://finalbossblues.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jason Perry
              </a>
              , aka 'Final Boss Blues'
            </p>
            <p className={`${this.state.fighterTwo} fighter-two-dialogue`}>
              You can find my traditional portfolio page{" "}
              <a
                className="page-info-link"
                target="_blank"
                rel="noopener noreferrer"
                href="http://relasine.github.io/portfolio"
              >
                here.
              </a>
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
