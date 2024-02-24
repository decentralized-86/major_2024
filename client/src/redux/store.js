import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
import userControlsReducers from "./reducer/userControlsReducers";

export default configureStore({
  reducer: {
    auth: authReducer,
    userControls: userControlsReducers,
  },
});
