import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { userAuthState } from "./user";

interface mangaCreate {
    name:string,
    description:string,
    cover:string,
    creator:string
}

interface manga {
    user:userAuthState,
    name:string,
    description:string,
    cover:string,
    created_at:string,
    creator:string
}


export const mangaApi = createApi({
    reducerPath:"mangaApi",
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:8000/',
        credentials:'include'
    }),
    endpoints:(builder)=>({
        createManga:builder.query<any,FormData>({
            query:(payload)=>({
                url:'manga/',
                method:'POST',
                body:payload,
                headers:undefined
            })
        }),
        getMangas : builder.query<manga[] , void>({
            query:()=>({
                url:'manga/',
                method:'GET'
            })
        })
    })
})


export const {useCreateMangaQuery , useGetMangasQuery} = mangaApi