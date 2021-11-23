import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../helpers/basketSlice";

//GLOBAL STORE
export const store = configureStore({
    reducer: {
        basket: basketReducer,
    },
});