import React, { Component } from "react";
import "../css/Onboarding.css";

import RDM from "./RDM";

class Onboarding extends Component {
  constructor() {
    super();

    this.state = {
      dialogueActive: false
    };
  }

  rdmDialogue = () => {
    this.setState({
      dialogueActive: true
    });
    setTimeout(this.props.finishOnboarding, 3000);
  };

  render() {
    return (
      <main className="onboarding-page">
        <h1>Kevin Simpson - Front End Developer</h1>
        <section className="onboarding-row">
          <h3 className="onboarding-text">
            To learn more, click on the characters
          </h3>
          <section className="onboarding-scene-column">
            <article className="onboarding-scene">
              <RDM
                dialogue={this.rdmDialogue}
                active={this.state.dialogueActive}
              />
            </article>
            <p className={`onboarding-dialogue ${this.state.dialogueActive}`}>
              You did it!
            </p>
          </section>
        </section>
      </main>
    );
  }
}

export default Onboarding;
