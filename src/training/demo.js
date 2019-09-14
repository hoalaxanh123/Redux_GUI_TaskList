import { createStore } from "redux";
import { status, sort } from "./actions/index";
import myReducer from "./reduces/index";
//1 --> 2 --> 4 --> 5 --> 6 --> 3 -->7
//1.Create a action
// let action = { type: "Toggle_status" };

//4.Create store
const store = createStore(myReducer);

//5 Show status before process
console.log("Default: ", store.getState());

//6.Run action  ==> myReducer
store.dispatch(status());

//7 Show status after process
console.log("Toggle_status: ", store.getState());

//8. Tạo action mới
// let actionSort = {
//   type: "Sort",
//   status: true,
//   sort: {
//     by: "id",
//     value: "-1"
//   }
// };

//9. Thực thi action
store.dispatch(
  sort({
    by: "id",
    value: "-1"
  })
);

//10.Xuất lên console
console.log("Sort: ", store.getState());
