import React from "react";
import logo from "../images/logo--mightifier.png";
export default function(props) {
  const { index, total } = props;
  return (
    <header className="header--main">
      <div className="site-logo">
        <img className="img-fluid" src={logo} alt="Mightifier" />
      </div>
      <div className="survey-name">Wellbeing Pulse</div>
    </header>
  );
}
