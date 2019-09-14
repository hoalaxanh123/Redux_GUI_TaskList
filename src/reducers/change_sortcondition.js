import * as types from "./../constants/ActionTypes";

var initialState = { prop: "name", type: 1, typeSort: "0" };
var myPreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SORT:
      console.log("SORT: ", action);
      state = action.condition;
      return state;
    default:
      return state;
  }
};

export default myPreducer;
