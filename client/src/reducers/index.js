import { combineReducers } from "redux";
import { reducer as reduxReducer } from "redux-form";
import authReducers from "./authReducers";
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: authReducers,
  form: reduxReducer,
  streams: streamReducer,
});
