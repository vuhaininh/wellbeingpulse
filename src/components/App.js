import React, { Component } from "react";
import "../styles/main.scss";
import Quiz from "./Quiz";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo" alt="logo" />
          <h2>Wellbeing Pulse </h2>
        </div>
        <Quiz />
      </div>
    );
  }
}
