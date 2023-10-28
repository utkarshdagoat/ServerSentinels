import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


interface mangaCreate {
    name:string,
    description:string,
    cover:string,
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
        })
    })
})


export const {useCreateMangaQuery} = mangaApi