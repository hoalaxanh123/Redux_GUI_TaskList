import * as types from "./../constants/ActionTypes";

var defaulList = [
  {
    id: 1,
    name: "A Học",
    status: false
  },
  {
    id: 2,
    name: "B Ngủ",
    status: true
  },
  {
    id: 3,
    name: "C Làm việc công ty",
    status: false
  },
  {
    id: 4,
    name: "D Làm việc nhà",
    status: true
  }
];
var listInStorge;

if (
  localStorage.getItem("taskList") &&
  localStorage.getItem("taskList").length !== 0
) {
  listInStorge = JSON.parse(localStorage.getItem("taskList"));
} else {
  localStorage.removeItem("taskList");
  localStorage.setItem("taskList", JSON.stringify(defaulList));
  listInStorge = JSON.parse(localStorage.getItem("taskList"));
}
let ResetList = () => {
  localStorage.removeItem("taskList");
  localStorage.setItem("taskList", JSON.stringify(defaulList));
  listInStorge = JSON.parse(localStorage.getItem("taskList"));
  return listInStorge;
};
let MakeSomeID = () => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds() +
    today.getMilliseconds();
  var dateTime = date + " " + time;
  return dateTime;
};

let DeleteID = (state, id) => {
  var index2 = state.findIndex(x => x.id === id);
  console.log("old: ", state);
  state.splice(index2, 1);
  console.log("new: ", state);
  localStorage.setItem("taskList", JSON.stringify(state));
  return state;
};

let ChangeStatus = (state, id) => {
  var index = state.findIndex(x => x.id === id);
  state[index] = {
    ...state[index],
    status: !state[index].status
  };
  localStorage.setItem("taskList", JSON.stringify(state));
  return state;
};
let UpdateTask = (state, action) => {
  console.log("AC:", action);
  var index = state.findIndex(x => x.id === action.task.id);
  let newJob = {
    id: action.task.id,
    name: action.task.name,
    status: action.task.status
  };
  alert(
    "Update:\n " +
      state[index].name +
      " - " +
      state[index].status +
      " ==> " +
      newJob.name +
      " - " +
      newJob.status
  );
  state[index] = newJob;
  localStorage.setItem("taskList", JSON.stringify(state));
  return state;
};
let AddNewTask = (state, action) => {
  let newJob = {
    id: MakeSomeID(),
    name: action.task.name,
    status: action.task.status === "1" ? true : false
  };
  state.push(newJob);
  localStorage.setItem("taskList", JSON.stringify(state));
  alert("Added a new job:\n\n" + newJob.name + " - " + newJob.status);
  return state;
};
// let FilterName = state => {
//   return state;
// };
var initialState = listInStorge;
var myPreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_GETALL:
      return state;
    case types.ADD_TASK:
      AddNewTask(state, action);
      return [...state];
    case types.CHANGE_STATUS:
      state = ChangeStatus(state, action.id);
      return [...state];
    case types.DELETE_TASK:
      state = DeleteID(state, action.id);
      return [...state];
    case types.RESET_LIST:
      state = ResetList();
      return [...state];
    case types.UPDATE_TASK:
      state = UpdateTask(state, action);
      return [...state];
    case types.SET_TASKLIST:
      state = action.tasks;
      return [...state];
    // case types.FIND_BY_KEYWORD:
    //   alert("filter by name");
    //   state = FilterName(state);
    //   return [...state];
    default:
      return state;
  }
};

export default myPreducer;
