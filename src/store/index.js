import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import timesheetReducer from "./slices/timesheetSlice";
import leaveReducer from "./slices/leaveSlice";
import sidebarReducer from "./slices/sidebarSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    timesheet: timesheetReducer,
    leave: leaveReducer,
    sidebar: sidebarReducer,
  },
});

export default store;
