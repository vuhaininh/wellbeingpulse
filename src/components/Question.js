import React, { Component } from "react";

class Question extends Component {
  render() {
    return <div className="question">{this.props.content}</div>;
  }
}
export default Question;
