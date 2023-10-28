import Landing from "./landing";
import Carousel from "../components/Carousel";
import MangaCarousel from '../components/mangaCarousel';
import Footer from '../components/Footer';

import { useAppSelector } from '../hooks/redux';
import { userApi } from '../services/user';
import { useEffect } from "react";
import { useGetMangasQuery, useGetMyMangaQuery } from "../services/manga";
function Homepage() {
  const LoggedIn = useAppSelector((state)=>state.user.LoggedIn)
  console.log(LoggedIn)
  const [trigger , {data , error , isLoading}] = userApi.endpoints.check_login.useLazyQuery()
  useEffect(()=>{
      if(!LoggedIn){
          trigger()
      }
  } , [data])

  const MangaRes = useGetMangasQuery()
  const myMangaRes= useGetMyMangaQuery()

  return (
     <div className="bg-gradient-to-r  from-purple-950 to-black">
      <Landing />
      <Carousel />{
      MangaRes.data &&
      <MangaCarousel data={MangaRes.data} canCreate={false} Title="Latest Uploads" emoji="🔥"/>
      }
      {myMangaRes.data &&
        <MangaCarousel data={myMangaRes.data} canCreate={true} Title="My Uploads" emoji="🔥" />
      }
      <Footer />
    </div> 
    
  );
}

export default Homepage;