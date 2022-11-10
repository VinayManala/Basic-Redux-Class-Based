import { INCREMENT, DECREMENT, NEW_COUNTER } from "../actions/";

const counterReducer = (state = [], action) => {
  switch (action.type) {
    case INCREMENT:
      return state.map((counter, i) => {
        if (i === action.payload.index) {
          counter.value += 1;
        }
        return counter;
      });
      break;

    case DECREMENT:
      return state.map((counter, i) => {
        if (i === action.payload.index) {
          counter.value -= 1;
        }
        return counter;
      });
      break;

    case NEW_COUNTER:
      return [...state, { name: action.payload.name, value: 0 }];
    default:
      return state;
  }
};

export default counterReducer;
