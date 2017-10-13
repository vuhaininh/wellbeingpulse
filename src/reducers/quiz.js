import { GET_NEXT_QUESTION } from "../constants/actionTypes";

const initialState = {
  questionIndex: 0
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NEXT_QUESTION:
      const newState = { ...state, questionIndex: action.payload };
      return newState;
    default:
      return state;
  }
  return state;
}
