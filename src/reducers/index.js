import { combineReducers } from "redux";
import List_GettAll from "./List_GetAll";
import toggle_form from "./toggle_form";
import editable from "./change_editable";
import editing_task from "./editing_task";
import change_filter from "./change_filter";
import change_keyword from "./change_keyword";
import change_sortcondition from "./change_sortcondition";

const myPreducer = combineReducers({
  List_GettAll,
  toggle_form,
  editable,
  editing_task,
  change_filter,
  change_keyword,
  change_sortcondition
});

export default myPreducer;
