import React, { Component } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
class RangeInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 10
    };
  }

  formatLabel(value) {
    if (value === 0) return "Not At All";
    else if (value === 20) return "All the time";
    else return value;
  }
  render() {
    return (
      <div className="range-input">
        <InputRange
          maxValue={20}
          minValue={0}
          value={this.state.value}
          formatLabel={this.formatLabel}
          onChange={value => this.setState({ value })}
        />
      </div>
    );
  }
}
export default RangeInput;
