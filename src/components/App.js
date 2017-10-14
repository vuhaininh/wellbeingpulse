import React, { Component } from "react";
import "../styles/main.scss";
import Quiz from "./Quiz";
import Header from "./Header";
import Footer from "./Footer";
import Intro from "./Intro";
import { connect } from "react-redux";
import mighty_bear from "../images/mighty_bear.png";
import bird_and_bear from "../images/bird_and_bear.png";
class App extends Component {
  render() {
    const { questionIndex } = this.props.quiz;
    const totalQuestions = this.props.questions.length;
    return (
      <div className="app">
        <Header index={questionIndex} total={totalQuestions} />
        <div className="container--main container-fluid">
          <Intro />
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

export default connect(mapStateToProps)(App);
