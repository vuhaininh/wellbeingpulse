import React, { Component } from 'react';
class AnswerOption extends Component {
  render() {
    return (
      <li className="answerOption">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          id={this.props.option.content}
          value={this.props.option.content}
        />
        <label className="radioCustomLabel" htmlFor={this.props.option.content}>
          {this.props.option.content}
        </label>
      </li>
    );
  }
}
export default AnswerOption;
