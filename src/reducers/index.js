import { combineReducers } from "redux";
import quiz from "./quiz";
import questions from "./questions";
const rootReducer = combineReducers({
  quiz,
  questions
});

export default rootReducer;
