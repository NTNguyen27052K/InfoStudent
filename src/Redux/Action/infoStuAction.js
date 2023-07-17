import {
  ADD_TO_LISTSTU,
  DELETE_TO_LISTSTU,
  EDIT_TO_LISTSTU,
  FIND_TO_LISTSTU,
  READ_ONLY,
  SEARCH_TO_LISTSTU,
} from "../Type/infoStuType";

export const addStuToListAction = (item) => {
  return {
    type: ADD_TO_LISTSTU,
    payload: item,
  };
};
export const deleteStuToListAction = (item) => {
  return {
    type: DELETE_TO_LISTSTU,
    payload: item,
  };
};
export const editStuToListAction = (item) => {
  return {
    type: EDIT_TO_LISTSTU,
    payload: item,
  };
};
export const findStuToListAction = (item) => {
  return {
    type: FIND_TO_LISTSTU,
    payload: item,
  };
};
export const searchStuToListAction = (item) => {
  return {
    type: SEARCH_TO_LISTSTU,
    payload: item,
  };
};
export const readOnly = (item) => {
  return {
    type: READ_ONLY,
    payload: item,
  };
};
