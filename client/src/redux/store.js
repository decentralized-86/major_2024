import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
import userControlsReducers from "./reducer/userControlsReducers";
import jobActionReducers from "./reducer/jobActionReducers";

export default configureStore({
  reducer: {
    auth: authReducer,
    userControls: userControlsReducers,
    jobActions: jobActionReducers,
  },
});
