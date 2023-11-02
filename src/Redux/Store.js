import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";

export const store= configureStore({
    reducer:{
        counterCartBag:CounterReducer

    }
})

