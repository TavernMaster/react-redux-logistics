import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./reducers/CounterSlice";

export default configureStore({reducer: {counter: CounterSlice}})