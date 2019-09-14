import * as types from "./../constants/ActionTypes";

var initialState = false;
var myPreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_STATUS:
      alert("Change status");
      return state;
    default:
      return state;
  }
};

export default myPreducer;
