import MangaScroller from './MangaScroller';
import Homepage from './Homepage';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { mangaApi, useGetMangaDetailQuery } from '../services/manga';
import { useEffect } from 'react';
function Scroller() {

  const {manga_uid , chapter_cid} = useParams()
  const [triggerMangaFetch , res ] = mangaApi.endpoints.getMangaDetail.useLazyQuery()

  useEffect(()=>{
    if(manga_uid) triggerMangaFetch(manga_uid)
  } , [])

  return (
    <div className="bg-gradient-to-r  from-purple-950 to-black">
     {
      res.data && chapter_cid &&
      <MangaScroller  Manga={res.data} chapter={chapter_cid}/>
      }
      <Footer />
    </div>
     
    
  );
}

export default Scroller;