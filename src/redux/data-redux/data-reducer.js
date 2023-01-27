import actionTypes from "./data.action.types";

const INITIAL_STATE = {
  dataFetcher: "",
};
export const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return {
        ...state,
        dataFetcher: action.payload,
      };

    default:
      return state;
  }
};
