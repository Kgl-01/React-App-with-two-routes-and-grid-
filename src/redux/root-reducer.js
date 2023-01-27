import { combineReducers } from "redux";
import { dataReducer } from "./data-redux/data-reducer";

export default combineReducers({
  data: dataReducer,
});
