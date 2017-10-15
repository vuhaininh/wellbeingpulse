import React, { Component } from "react";
import "../styles/main.scss";
import Quiz from "./Quiz";
import Header from "./Header";
import Footer from "./Footer";
import Intro from "./Intro";
import { connect } from "react-redux";
import mighty_bear from "../images/mighty_bear.png";
import bird_and_bear from "../images/bird_and_bear.png";
import { getNextQuestion } from "../actions";
class App extends Component {
  renderContent() {
    const { questionIndex } = this.props.quiz;
    switch (questionIndex) {
      case -1:
        return <Intro handleStart = {this.props.getNextQuestion} />;
      default:
        return <Quiz />;
    }
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container--main container-fluid">
          {this.renderContent()}
        </div>
        <Footer />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    questions: state.questions,
    quiz: state.quiz
  };
}

export default connect(mapStateToProps, { getNextQuestion })(App);
