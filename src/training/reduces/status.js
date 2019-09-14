//2.Initial state (create a new state)
var initialState = false;

//Create Reducer
//3.Receive action and state ==> process ==> return a new state
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_STATUS":
      state = !state;
      break;
    default:
      break;
  }
  return state;
};
export default myReducer;
