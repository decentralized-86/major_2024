import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
import userControlsReducers from "./reducer/userControlsReducers";
import jobActionReducers from "./reducer/jobActionReducers";
import trainingActionReducers from "./reducer/trainingActionReducers";

export default configureStore({
  reducer: {
    auth: authReducer,
    userControls: userControlsReducers,
    jobActions: jobActionReducers,
    trainingActions: trainingActionReducers,
  },
});
