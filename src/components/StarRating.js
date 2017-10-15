import React, { Component } from "react";
import Rater from "./Rater";
class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Please rate by choosing stars from 1 to 5"
    };
  }

  render() {
    return (
      <div className="star-rating">
        <Rater />
        <div className="rating__guide">{this.state.message}</div>
      </div>
    );
  }
}
export default StarRating;
