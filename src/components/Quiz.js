import React, { Component } from "react";
import Question from "./Question";
import StarRating from "./StarRating"
import AnswerOption from "./AnswerOption";
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
  render() {
    const { questionIndex } = this.props.quiz;
    const { question, answers } = this.props.questions[questionIndex];
    return (
      <ReactCSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div className="quiz">
          <Question content={question} />
          <StarRating />
          <button onClick={this.handleAnswerSelected.bind(this)}>Next</button>
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
