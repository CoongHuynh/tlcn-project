import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import securitySlice from "./slices/sidebarSlice"
const store = configureStore({
    reducer: combineReducers({
        sidebar: sidebarReducer,
        security: securitySlice,
    })
});

export default store;