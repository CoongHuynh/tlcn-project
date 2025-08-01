import { createSlice } from '@reduxjs/toolkit'

// Mock users với roles
const mockUsers = [
  {
    id: 1,
    email: 'admin@example.com',
    password: 'password123',
    name: 'Admin User',
    role: 'admin',
    avatar: '👨‍💼'
  },
  {
    id: 2,
    email: 'manager@example.com',
    password: 'password123',
    name: 'Manager User',
    role: 'manager',
    avatar: '👩‍💼'
  },
  {
    id: 3,
    email: 'employee@example.com',
    password: 'password123',
    name: 'Employee User',
    role: 'employee',
    avatar: '👨‍💻'
  }
]

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  users: mockUsers
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true
      state.error = null
    },
    loginSuccess: (state, action) => {
      state.isLoading = false
      state.isAuthenticated = true
      state.user = action.payload
      state.error = null
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    loginFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.error = null
    },
    clearError: (state) => {
      state.error = null
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout, clearError, setUser } = authSlice.actions
export default authSlice.reducer 