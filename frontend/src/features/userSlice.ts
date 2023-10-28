import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../services/user";
import { user } from "@nextui-org/react";


interface userState {
    username:string | null,
    password:string | null,
    profile_picture:string | null,
    loggendIn:boolean
}

const initialState : userState =  {
    username:null,
    password:null,
    loggendIn:false,
    profile_picture:null

}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder.addMatcher(userApi.endpoints.signUp.matchFulfilled, (state , {payload})=>{
            state.username = payload.username
            state.profile_picture = payload.profile_picture
            state.password = payload.password
            state.loggendIn = true
        }),
        builder.addMatcher(userApi.endpoints.logout.matchFulfilled , (state)=>{
            state = initialState
        })
        builder.addMatcher(userApi.endpoints.login.matchFulfilled , (state , payload)=>{
            state = initialState
        })
    },
})

export default userSlice.reducer