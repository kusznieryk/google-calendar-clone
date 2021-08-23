const Redux = require("redux");

const { loadState, saveState } = require("../functions/localStorage");

const {
  INCREMENT,
  DECREMENT,
  CHANGE,
  ADDEVENT,
  DELETEEVENT,
} = require("./action-type");

const dt = new Date();
const persistedState = loadState();

const initialDateState = {
  year: dt.getFullYear(),
  month: dt.getMonth() + 1,
};

const currentDateReducer = (
  state = initialDateState,
  { type, year, month }
) => {
  switch (type) {
    case INCREMENT:
      if (state.month === 12) return { year: state.year + 1, month: 1 };
      return { ...state, month: state.month + 1 };
    case DECREMENT:
      if (state.month === 1) return { year: state.year - 1, month: 12 };
      return { ...state, month: state.month - 1 };
    case CHANGE:
      return { year, month };
    default:
      return state;
  }
};

const eventReducer = (
  state = [],
  { type, data: { year, month, day, title, id } = {} }
) => {
  if (type === ADDEVENT) {
    let newState = JSON.stringify(state);
    newState = JSON.parse(newState);
    newState[year] = newState[year] || [];
    newState[year][month] = newState[year][month] || [];
    newState[year][month][day] = newState[year][month][day] || [];
    newState[year][month][day].push({ title });
    console.log(newState);
    return newState;
  }
  if (type === DELETEEVENT) {
    let newState = JSON.stringify(state);
    newState = JSON.parse(newState);
    newState[year][month][day].splice(id, 1);
    return newState;
  }
  return state;
};

const reducer = Redux.combineReducers({
  date: currentDateReducer,
  events: eventReducer,
});
let store = Redux.createStore(reducer, {
  ...persistedState,
  date: initialDateState,
});

store.subscribe(() => {
  saveState(store.getState());
});
export default store;
