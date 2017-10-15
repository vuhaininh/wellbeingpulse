const initialState = [
  {
    question: "How do you feel today?",
    type:"StarRating",
    answer:""
  },
  {
    question: "How did you like coming to school today?",
    type:"StarRating",
    answer:""
  },
  {
    question: "How many friends do you have in your class?",
    type:"Range",
    answer:""
  },
  {
    question: "Have you been bullied recently?",
    type:"Range",
    answer:""
  },
  {
    question: "Have you seen your classmate been bullied recently?",
    type:"Range",
    answer:""
  },
  {
    question: "How friendly is the environment in your class?",
    type:"StarRating",
    answer:""
  },
  {
    question: "Overall, how awesome your class is? ",
    type:"StarRating",
    answer:""
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case "test":
      break;
    default:
      return state;
  }
}
