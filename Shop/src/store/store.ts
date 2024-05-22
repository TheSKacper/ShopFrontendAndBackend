import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../reducer/loginSlice";
import shoppingSlice from "../reducer/shoppingSlice";



export const store = configureStore({
    reducer:{
        login:loginSlice,
        shop:shoppingSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch