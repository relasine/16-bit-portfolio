import React from "react";
import darkworld1 from "../css/images/darkworld1.png";
import darkworld2 from "../css/images/darkworld2.png";
import deck1 from "../css/images/deck1.png";
import deck2 from "../css/images/deck2.png";
import grass from "../css/images/grass.png";
import house from "../css/images/house.png";
import itemshop from "../css/images/itemshop.png";
import sidewalk from "../css/images/sidewalk.png";
import socialBoard from "../css/images/social-board.png";
import tavern from "../css/images/tavern.png";

const Preload = () => {
  return (
    <div className="preload">
      <h1>text</h1>
      <img src={darkworld1} alt="darkworld1" />
      <img src={darkworld2} alt="darkworld2" />
      <img src={deck1} alt="deck1" />
      <img src={deck2} alt="deck2" />
      <img src={grass} alt="grass" />
      <img src={house} alt="house" />
      <img src={itemshop} alt="itemshop" />
      <img src={sidewalk} alt="sidewalk" />
      <img src={socialBoard} alt="social-board" />
      <img src={tavern} alt="tavern" />
    </div>
  );
};

export default Preload;
