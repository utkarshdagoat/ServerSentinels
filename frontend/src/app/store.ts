import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
    reducer:{},
})

setupListeners(store.dispatch)


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>