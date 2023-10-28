import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { userAuthState } from "./user";

interface mangaCreate {
    name:string,
    description:string,
    cover:string,
    creator:string
}

export interface manga {
    user:userAuthState,
    name:string,
    description:string,
    cover:string,
    created_at:string,
    creator:string,
    latest_chapter:number
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
        }),
        getMyManga : builder.query<manga[] , void>({
            query:()=>'manga/manga/mine'
        })
    })
})


export const {useCreateMangaQuery , useGetMangasQuery , useGetMyMangaQuery} = mangaApi