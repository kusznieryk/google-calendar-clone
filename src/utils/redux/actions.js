const {
  INCREMENT,
  DECREMENT,
  CHANGE,
  ADDEVENT,
  DELETEEVENT,
} = require("./action-type");

export const incAct = () => ({ type: INCREMENT });

export const decAct = () => ({ type: DECREMENT });

export const changeDate = (year, month) => ({
  type: CHANGE,
  month: Number(month),
  year: Number(year),
});

export const addEvent = (year, month, day, title) => {
  let type = ADDEVENT;
  let data = { year, month, day, title };
  return { type, data };
};
export const deleteEvent = (year, month, day, id) => {
  let type = DELETEEVENT;
  let data = { year, month, day, title: " ", id };
  return { type, data };
};
