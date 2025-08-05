import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaves: [],
  currentLeave: null,
  isLoading: false,
  error: null,
};

const leaveSlice = createSlice({
  name: "leave",
  initialState,
  reducers: {
    fetchLeavesStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchLeavesSuccess: (state, action) => {
      state.isLoading = false;
      state.leaves = action.payload;
      state.error = null;
    },
    fetchLeavesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addLeave: (state, action) => {
      state.leaves.push(action.payload);
    },
    updateLeave: (state, action) => {
      const index = state.leaves.findIndex(
        (leave) => leave.id === action.payload.id
      );
      if (index !== -1) {
        state.leaves[index] = action.payload;
      }
    },
    deleteLeave: (state, action) => {
      state.leaves = state.leaves.filter(
        (leave) => leave.id !== action.payload
      );
    },
    setCurrentLeave: (state, action) => {
      state.currentLeave = action.payload;
    },
    approveLeave: (state, action) => {
      const index = state.leaves.findIndex(
        (leave) => leave.id === action.payload
      );
      if (index !== -1) {
        state.leaves[index].status = "approved";
      }
    },
    rejectLeave: (state, action) => {
      const index = state.leaves.findIndex(
        (leave) => leave.id === action.payload
      );
      if (index !== -1) {
        state.leaves[index].status = "rejected";
      }
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  fetchLeavesStart,
  fetchLeavesSuccess,
  fetchLeavesFailure,
  addLeave,
  updateLeave,
  deleteLeave,
  setCurrentLeave,
  approveLeave,
  rejectLeave,
  clearError,
} = leaveSlice.actions;

export default leaveSlice.reducer;
