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
          <a
            href="https://www.linkedin.com/in/kevinjohnsimpson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./linkedin-icon.png" alt="linkedin" />
            linkedin
          </a>
        </div>
        <div className="social-pair-container">
          <a
            href="https://twitter.com/relasine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./twitter-icon.png" alt="twitter" />
            twitter
          </a>
        </div>
        <div className="social-pair-container">
          <a
            href="https://github.com/relasine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./github-icon.png" alt="github" />
            github
          </a>
        </div>
        <div className="social-pair-container">
          <a
            href="https://www.instagram.com/kevinjohnsimpson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./instagram-icon.png" alt="instagram" />
            instagram
          </a>
        </div>
        <div className="social-pair-container">
          <a href="mailto:simpsonkevinjohn@gmail.com">
            <img src="./mail-icon.png" alt="mail" />
            email
          </a>
        </div>
      </section>
    </article>
  );
};

export default SocialWindow;
