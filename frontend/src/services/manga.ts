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
    latest_chapter:number,
    uid:string
}

interface chapterCreate{
    number:number,
    uid:string,
}
interface chapterCreateRes{
    number:number,
    manga:number,
    uid:string,
    id:number,
    created:string
}

interface imagesRes {
    image:string,
    chapter:string,
    relNumber:string
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
        }),
        createChapter:builder.query<chapterCreateRes,chapterCreate>({
            query:(payload)=>({
                url:'chapter/chapter/',
                method:'POST',
                body:payload,
                headers:{
                    "content-type":"application/json"
                }
            })
        }),
        chapterImageUpload: builder.query<any , FormData>({
            query:(payload)=>({
                url:'chapter/images/',
                method:'POST',
                body:payload,
                headers:undefined
            })
        }),
        getMangaDetail : builder.query<manga , string>({
            query:(uid)=>`manga/${uid}`
        }),
        getChapterImages: builder.query<imagesRes[] , string[]>({
            query:(manga) => `chapter/chapter_images/?mangaid=${manga[0]}&cn=${manga[1]}`,
            transformResponse:(response:imagesRes[])=>{
                const data = response.sort((a, b) => parseInt(a.relNumber) - parseInt(b.relNumber))
                return data
            }
        }),
        getChapters:builder.query<chapterCreateRes[] , string>({
            query:(uid)=>`manga/manga/${uid}/chapters/`
        }),
        likeManga : builder.query<manga , string>({
            query:(uid)=>`manga/${uid}/like`
        }),
    })
})


export const {useCreateMangaQuery , useGetMangasQuery , useGetMyMangaQuery , useGetMangaDetailQuery , useGetChapterImagesQuery} = mangaApi