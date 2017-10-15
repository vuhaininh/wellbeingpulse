import React, { Component } from "react";
import bird_and_bear from "../images/bird_and_bear.png";
class Ending extends Component {
  render() {
    return (
      <div className="ending">
        Thank you! Your answers have been sent to us!<br />
        <img
          className="intro__img img-fluid img-responsive"
          src={bird_and_bear}
          alt="Mightifier"
        />
      </div>
    );
  }
}

export default Ending;
