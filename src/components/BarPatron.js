import React from "react";

import "../css/BarPatron.css";

const BarPatron = props => {
  return <div onClick={props.dialogue} className="bar-patron" />;
};

export default BarPatron;
