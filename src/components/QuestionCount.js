import React, { Component } from "react";

class QuestionCount extends Component {
  render() {
    const { index, total } = this.props;
    return (
      <div className="questionCount">
        Question {index + 1} / {total}
      </div>
    );
  }
}

export default QuestionCount;
