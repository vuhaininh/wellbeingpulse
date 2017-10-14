import React from "react";
import bird_and_bear from "../images/bird_and_bear.png";
export default function(props) {
  return (
    <div className="intro">
      <h2 className="title">Hi, how are you doing?</h2>
      <img
        className="intro__img img-fluid img-responsive"
        src={bird_and_bear}
        alt="Mightifier"
      />
      <br />
      <div className="guidelines">
        Before mightifying starts, let’s answer some questions. I’d like to know
        how do you feel about school and class spirit. <br />Cheers, Mighty Bear
        & Brave Bird
      </div>
      <br />
      <button className="mighty__button">
        <span>Let's Start!</span>
      </button>
      <br />
    </div>
  );
}
