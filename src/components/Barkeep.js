import React from "react";
import "../css/Barkeep.css";

const Barkeep = props => {
  return <div onClick={props.dialogue} className="barkeep" />;
};

export default Barkeep;
