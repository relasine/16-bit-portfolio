import React from "react";
import "../css/StandingPatron.css";

const StandingPatron = props => {
  return (
    <div
      onClick={props.dialogue}
      className={`standing-patron ${props.active}`}
    />
  );
};

export default StandingPatron;
