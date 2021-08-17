const Redux = require("redux");

const { INCREMENT, DECREMENT } = require("./action-type");

const dt = new Date();

const initialState = {
  year: dt.getFullYear(),
  month: dt.getMonth() + 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      if (state.month === 12) return { year: state.year + 1, month: 1 };
      return { ...state, month: state.month + 1 };
      break;
    case DECREMENT:
      if (state.month === 1) return { year: state.year - 1, month: 12 };
      return { ...state, month: state.month - 1 };
      break;
    default:
      return state;
      break;
  }
};

let store = Redux.createStore(reducer);
export default store;
