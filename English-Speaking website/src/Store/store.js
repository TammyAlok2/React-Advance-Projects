import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "../redux/slice/CartSlice";

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    }
});