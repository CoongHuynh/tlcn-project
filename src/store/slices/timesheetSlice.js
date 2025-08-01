import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  timesheets: [],
  currentTimesheet: null,
  isLoading: false,
  error: null,
}

const timesheetSlice = createSlice({
  name: 'timesheet',
  initialState,
  reducers: {
    fetchTimesheetsStart: (state) => {
      state.isLoading = true
      state.error = null
    },
    fetchTimesheetsSuccess: (state, action) => {
      state.isLoading = false
      state.timesheets = action.payload
      state.error = null
    },
    fetchTimesheetsFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    addTimesheet: (state, action) => {
      state.timesheets.push(action.payload)
    },
    updateTimesheet: (state, action) => {
      const index = state.timesheets.findIndex(ts => ts.id === action.payload.id)
      if (index !== -1) {
        state.timesheets[index] = action.payload
      }
    },
    deleteTimesheet: (state, action) => {
      state.timesheets = state.timesheets.filter(ts => ts.id !== action.payload)
    },
    setCurrentTimesheet: (state, action) => {
      state.currentTimesheet = action.payload
    },
    clearError: (state) => {
      state.error = null
    },
  },
})

export const {
  fetchTimesheetsStart,
  fetchTimesheetsSuccess,
  fetchTimesheetsFailure,
  addTimesheet,
  updateTimesheet,
  deleteTimesheet,
  setCurrentTimesheet,
  clearError,
} = timesheetSlice.actions

export default timesheetSlice.reducer 