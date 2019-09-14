var initialState = {
  by: "name",
  value: "1"
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SORT":
      var { by, value } = action.sort;
      return {
        by,
        value
      };
    default:
      break;
  }
  return state;
};
export default myReducer;
