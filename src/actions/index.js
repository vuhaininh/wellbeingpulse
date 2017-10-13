import { GET_NEXT_QUESTION } from "../constants/actionTypes";
export function getNextQuestion(index) {
  return {
    type: GET_NEXT_QUESTION,
    payload: index
  };
}
