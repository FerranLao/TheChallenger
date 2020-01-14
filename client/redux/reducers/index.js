import { combineReducers } from "redux";
import authReducers from "./authReducer";
import infoReducer from "./infoReducer";

const reducers = {
  auth: authReducers,
  info: infoReducer
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  //   switch (action.type) {
  //     case "LOG_OUT":
  //       state = {};
  //       break;
  //     default:
  //       break;
  //   }
  return appReducer(state, action);
};
export default rootReducer;
