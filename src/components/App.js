import React, { Component } from "react";

import Loading from "./Loading";
import Onboarding from "./Onboarding";
import Header from "./Header";
import Intro from "./Intro";
import Projects from "./Projects";
import ContactSocial from "./ContactSocial";
import About from "./About";
import Preload from "./Preload";
import "../css/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      onboarding: false,
      main: false
    };
  }

  componentDidMount() {
    setTimeout(this.finishLoading, 4000);
  }

  finishLoading = () => {
    this.setState({
      loading: false,
      onboarding: true
    });
  };

  finishOnboarding = () => {
    this.setState({
      onboarding: false,
      main: true
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.loading && <Loading />}
        {this.state.onboarding && (
          <Onboarding finishOnboarding={this.finishOnboarding} />
        )}
        {this.state.main && (
          <main className="main-screen">
            <Header />
            <Intro />
            <Projects />
            <ContactSocial />
            <About />
          </main>
        )}
        <Preload />
      </div>
    );
  }
}

export default App;
