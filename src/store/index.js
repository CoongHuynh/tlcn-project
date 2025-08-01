import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import timesheetReducer from './slices/timesheetSlice'
import leaveReducer from './slices/leaveSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    timesheet: timesheetReducer,
    leave: leaveReducer,
  },
})

export default store 