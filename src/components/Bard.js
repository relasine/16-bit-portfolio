import React from "react";
import "../css/Bard.css";

const Bard = props => {
  return <div onClick={props.dialogue} className="bard" />;
};

export default Bard;
