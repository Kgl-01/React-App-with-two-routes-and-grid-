import USER_DATA from "../../data/products";

const INITIAL_STATE = {
  data: USER_DATA,
};
export const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
