import React, { Component } from "react";
import StarRating from "./StarRating";
import RangeInput from "./RangeInput";
import { connect } from "react-redux";
import { getNextQuestion } from "../actions";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Quiz extends Component {
  renderAnswerOptions(answer) {
    return <AnswerOption option={answer} key={answer.content} />;
  }
  handleAnswerSelected() {
    const nextQuestionIndex = this.props.quiz.questionIndex + 1;
    this.props.getNextQuestion(nextQuestionIndex);
  }
  renderAnswer() {
    const { questionIndex } = this.props.quiz;
    const { question, type } = this.props.questions[questionIndex];
    console.log();
    if (type === "StarRating") return <StarRating />;
    else {
      return <RangeInput />;
    }
  }
  render() {
    const { questionIndex } = this.props.quiz;
    const { question, answers } = this.props.questions[questionIndex];
    return (
      <ReactCSSTransitionGroup
        className="container-fluid"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div className="quiz">
          <div className="question">{question}</div>
          {this.renderAnswer()}
          <button
            className="mighty__button"
            onClick={this.handleAnswerSelected.bind(this)}
          >
            <span>Next Question</span>
          </button>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
function mapStateToProps(state) {
  return {
    questions: state.questions,
    quiz: state.quiz
  };
}
export default connect(mapStateToProps, { getNextQuestion })(Quiz);
