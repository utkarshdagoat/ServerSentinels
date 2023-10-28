import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react'

import {userApi} from '../services/user'
import userReducer from '../features/userSlice'
import { mangaApi } from "../services/manga";

export const store = configureStore({
    reducer:{
        [userApi.reducerPath]:userApi.reducer,
        user:userReducer,
        [mangaApi.reducerPath]:mangaApi.reducer
    },
    ///@ts-ignore
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:false
        }).concat([userApi.middleware , mangaApi.middleware])
})

setupListeners(store.dispatch)


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>