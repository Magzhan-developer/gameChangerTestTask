import {combineReducers, configureStore} from "@reduxjs/toolkit";
import reducers from "./reducers.ts";

export const store = configureStore({reducer : combineReducers({reducers})});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;