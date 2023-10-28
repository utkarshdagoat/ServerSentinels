import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../services/user";
import { user } from "@nextui-org/react";


export  interface userAuthState {
    username:string | null,
    password:string | null,
    profile_picture:string | null,
}


export interface userState {
    user:userAuthState
    LoggedIn:boolean
}

const initialState : userState =  {
    user : {
        username:null,
        password:null,
        profile_picture:null
    },
    LoggedIn:false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder.addMatcher(userApi.endpoints.signUp.matchFulfilled, (state , {payload})=>{
            state.user.username = payload.username
            state.user.profile_picture = payload.profile_picture
            state.user.password = payload.password
            state.LoggedIn = true
        }),
        builder.addMatcher(userApi.endpoints.logout.matchFulfilled , (state)=>{
            state = initialState
        })
        builder.addMatcher(userApi.endpoints.login.matchFulfilled , (state , {payload})=>{
            state = initialState
        }),
        builder.addMatcher(userApi.endpoints.check_login.matchFulfilled , (state,{payload})=>{
            state.user = payload.user
            state.LoggedIn = payload.LoggedIn
        })
    },
})

export default userSlice.reducer