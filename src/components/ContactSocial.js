import React, { Component } from "react";
import "../css/ContactSocial.css";
import Shopkeep from "./Shopkeep";
import SocialWindow from "./SocialWindow";

class ContactSocial extends Component {
  constructor() {
    super();

    this.state = {
      window: false,
      shopkeep: false
    };
  }

  handleWindowClick = () => {
    this.setState({
      window: !this.state.window,
      shopkeep: false
    });
  };

  closeWindow = () => {
    if (this.state.window) {
      this.setState({
        window: false
      });
    }
  };

  shopkeep = () => {
    this.setState({
      shopkeep: !this.state.shopkeep
    });
  };

  render() {
    return (
      <section className="social-row" id="social-link">
        <h4 className="social-text">Social/Contact Info</h4>
        <section className="contact-social">
          <div className="item-shop" onClick={this.closeWindow}>
            <a
              href="https://drive.google.com/file/d/1nfxG6KQ_npTpnBQuVsvhzCW72d8HM_A1/view?usp=sharing"
              target="_blank"
              className="resume-link"
              rel="noopener noreferrer"
            >
              <div />
            </a>
            <Shopkeep dialogue={this.shopkeep} />
            <div className="window-button" onClick={this.handleWindowClick} />
            <SocialWindow
              activeWindow={this.state.window}
              handleWindowClick={this.handleWindowClick}
            />
          </div>
          <p className={`shop-keep-dialogue ${this.state.shopkeep}`}>
            Contact and social media info is on the table. Résumé is on the
            bookshelf on the right.
          </p>
        </section>
      </section>
    );
  }
}

export default ContactSocial;
