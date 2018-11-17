import React from "react";
import "../css/NoddingPatron.css";

const NoddingPatron = props => {
  return <div onClick={props.dialogue} className="nodding-patron" />;
};

export default NoddingPatron;
