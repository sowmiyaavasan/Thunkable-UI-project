import { combineReducers } from "redux";
import projectsReducer from "../actions/projectReducer";

// Creating highlevel root reducer
const rootReducer = combineReducers({
  projects: projectsReducer,
});

export default rootReducer;
