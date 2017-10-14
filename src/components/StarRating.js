import React, { Component } from "react";

class StarRating extends Component {
  render() {
    return (
      <div className="rating-wrapper">
         <input type="radio" className="rating-input" id="rating-input-1-5" name="rating-input-1"/>
         <label htmlFor="rating-input-1-5" className="rating-star"></label>
         <input type="radio" className="rating-input" id="rating-input-1-4" name="rating-input-1"/>
         <label htmlFor="rating-input-1-4" className="rating-star"></label>
         <input type="radio" className="rating-input" id="rating-input-1-3" name="rating-input-1"/>
         <label htmlFor="rating-input-1-3" className="rating-star"></label>
         <input type="radio" className="rating-input" id="rating-input-1-2" name="rating-input-1"/>
         <label htmlFor="rating-input-1-2" className="rating-star"></label>
         <input type="radio" className="rating-input" id="rating-input-1-1" name="rating-input-1"/>
         <label htmlFor="rating-input-1-1" className="rating-star"></label>
      </div>
    );
  }
}
export default StarRating;
