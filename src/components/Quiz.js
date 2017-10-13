import React, { Component } from "react";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import AnswerOption from "./AnswerOption";
import { connect } from "react-redux";
import { getNextQuestion } from "../actions";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
    const totalQuestions = this.props.questions.length;
    return (
      <div className="quiz">
        <QuestionCount index = {questionIndex} total={totalQuestions} />
        <Question content={question} />
        <ul className="answerOptions">
          {answers.map(this.renderAnswerOptions)}
        </ul>
        <button onClick={this.handleAnswerSelected.bind(this)}>Next</button>
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
export default connect(mapStateToProps, { getNextQuestion })(Quiz);
