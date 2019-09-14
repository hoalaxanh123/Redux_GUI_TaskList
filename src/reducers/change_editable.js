import * as types from "../constants/ActionTypes";

var initialState = false;
var myPreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDITABLE:
      return !state;
    case types.SETEDITABLE:
      return true;
    case types.UNSETEDITABLE:
      return false;
    default:
      return state;
  }
};

export default myPreducer;
