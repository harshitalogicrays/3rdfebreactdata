import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const mystore = configureStore({
    reducer:{
        cart:cartSlice.reducer
    }
})
export default mystore