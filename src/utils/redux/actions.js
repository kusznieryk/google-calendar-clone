const { INCREMENT, DECREMENT } = require("./action-type");

export const incAct = () => ({ type: INCREMENT });

export const decAct = () => ({ type: DECREMENT });
