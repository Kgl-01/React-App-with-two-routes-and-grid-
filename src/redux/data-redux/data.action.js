import actionTypes from "./data.action.types";

export const dataUrl = (url) => ({
  type: actionTypes.SET_DATA,
  payload: url,
});
