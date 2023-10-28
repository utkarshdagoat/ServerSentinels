import {  createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userState } from "../features/userSlice";
export  interface userAuthState {
    username:string,
    password:string,
    profile_picture:string
}


export  interface userAuthLoginState {
    username:string,
    password:string
}

export const userApi = createApi({
    reducerPath:"userApi",
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:8000/',
        credentials:'include'
    }),
    endpoints : (builder)=>({
        login:builder.query<void,userAuthLoginState>({
            query:(payload)=>({
                url:"auth/login",
                method:"POST",
                body:payload,
                headers:{
                    "Content-Type":"application/json"
                }
            })
        }),
        signUp: builder.query<userAuthState, FormData>({
            query:(data)=>({
                url:'auth/users/',
                method:"POST",
                body:data,
                headers:undefined
            })
        }),
        logout:builder.query<{},void>({
            query:()=>'auth/logout/'
        }),
        check_login:builder.query<userState , void>({
            query:()=>'auth/check_login/'
        })
    }),
})


export const {useLoginQuery , useSignUpQuery} = userApi