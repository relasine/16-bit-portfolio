import React from "react";

import "../css/RDM.css";

const RDM = props => {
  return <div className={`rdm ${props.active}`} onClick={props.dialogue} />;
};

export default RDM;
