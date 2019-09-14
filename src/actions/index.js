import * as types from "./../constants/ActionTypes";

export const LIST_GETALL = () => {
  return {
    type: types.LIST_GETALL
  };
};
export const addTask = task => {
  return {
    type: types.ADD_TASK,
    task
  };
};
export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM
  };
};
export const editAble = () => {
  return {
    type: types.EDITABLE
  };
};
export const SetEditAble = () => {
  return {
    type: types.SETEDITABLE
  };
};
export const UnSetEditAble = () => {
  return {
    type: types.UNSETEDITABLE
  };
};
export const setEditingTask = task => {
  return {
    type: types.EDITING_TASK,
    task
  };
};
export const updatingTask = task => {
  return {
    type: types.UPDATE_TASK,
    task
  };
};
export const openForm = () => {
  return {
    type: types.OPEN_FORM
  };
};
export const closeForm = () => {
  return {
    type: types.CLOSE_FORM
  };
};
export const setFilterName = name => {
  return {
    type: types.SET_FILTER,
    filter: name
  };
};
export const changeStatus = id => {
  return {
    type: types.CHANGE_STATUS,
    id
  };
};
export const deleteTask = id => {
  return {
    type: types.DELETE_TASK,
    id
  };
};
export const setKeyWord = keyword => {
  return {
    type: types.SET_KEYWORD,
    keyword
  };
};
export const setTaskList = tasks => {
  return {
    type: types.SET_TASKLIST,
    tasks
  };
};
export const setSortCondition = condition => {
  return {
    type: types.SET_SORT,
    condition
  };
};
export const resetTask = id => {
  return {
    type: types.RESET_LIST,
    id
  };
};
