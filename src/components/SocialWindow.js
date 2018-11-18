import React from "react";
import "../css/SocialWindow.css";

const SocialWindow = props => {
  return (
    <article className={`social-window ${props.activeWindow}`}>
      <p onClick={props.handleWindowClick} className="close-social">
        x
      </p>
      <section className="contact-wrapper">
        <div className="social-pair-container">
          <a href="#">
            <img src="./twitter-icon.png" alt="twitter" />
            twitter
          </a>
        </div>
        <div className="social-pair-container">
          <a href="#">
            <img src="./github-icon.png" alt="github" />
            github
          </a>
        </div>
        <div className="social-pair-container">
          <a href="#">
            <img src="./instagram-icon.png" alt="instagram" />
            instagram
          </a>
        </div>
        <div className="social-pair-container">
          <a href="#">
            <img src="./mail-icon.png" alt="mail" />
            email
          </a>
        </div>
      </section>
    </article>
  );
};

export default SocialWindow;
