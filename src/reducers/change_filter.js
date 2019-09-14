import * as types from "./../constants/ActionTypes";

var initialState = {};
var myPreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILTER:
      state = action.filter;
      return state;
    default:
      return state;
  }
};

export default myPreducer;
