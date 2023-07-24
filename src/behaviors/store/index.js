import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";

// Creating a redux store that points to root reducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;
