import * as types from "./../constants/ActionTypes";


var initialState = "";
var myPreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_KEYWORD:
      console.log("key: " + action);
      state = action.keyword;
      return state;
    default:
      return state;
  }
};

export default myPreducer;
