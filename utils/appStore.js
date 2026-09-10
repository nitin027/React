import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    reducer:{
        abcnitin:cartReducer
    }
})

export default appStore