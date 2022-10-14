import { configureStore } from "@reduxjs/toolkit";
import reducer  from "../redux/slices/slice.js";
import loader from "../redux/slices/loaderSlice"

export const store = configureStore({
    reducer: {
        coreReducer: reducer,
        load: loader,
    },
});