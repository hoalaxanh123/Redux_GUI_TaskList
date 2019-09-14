import * as types from "./../constants/ActionTypes";

var initialState = {};
var myPreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDITING_TASK:
      return action.task;
    default:
      return state;
  }
};

export default myPreducer;
