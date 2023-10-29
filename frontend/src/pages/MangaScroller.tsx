import {ChevronDown, ArrowRight, ArrowLeft, ChevronUp} from "lucide-react";
import {Link, button} from "@nextui-org/react";
import { useState,useEffect } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, RadioGroup, Radio,Divider} from "@nextui-org/react";

import MANGA from "../images/manga";
import { manga, mangaApi } from "../services/manga";
import { useNavigate } from "react-router-dom";
export default function MangaScroller({Manga , chapter}:{Manga:manga , chapter:string}){
    const [isVisible, setIsVisible] = useState(false);
    const [triggerImageFetch , Images] = mangaApi.endpoints.getChapterImages.useLazyQuery()

    const [triggerChapters , chaptersData] = mangaApi.endpoints.getChapters.useLazyQuery() 
    useEffect(()=>{
        if(Manga.uid){
        triggerChapters(Manga.uid)
        triggerImageFetch([Manga.uid , chapter])
    }   
    } , [Manga , chapter])
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

      const navigate = useNavigate()

      useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          };
      
          window.addEventListener("scroll", toggleVisibility);
          return () => window.removeEventListener("scroll", toggleVisibility);
        }, []);
      

    return(
        
        <div className="">
            
            <div className="flex-col flex gap-4 text-center items-center pt-4">
                <text className="text-white font-bold text-3xl ">{Manga.name}  Chapter {chapter}</text>
                <text className="text-white font-semibold text-xl">Read the full Manga here <Link href="#" size="lg" onClick={(e)=>navigate(`/manga/${Manga.uid}`)}>{Manga.name}</Link></text>
            </div>
            <div className="flex-row  flow-root mb-4">
                <div className="flex pl-20 ml-20 pt-6 float-left  ">
                {chaptersData.data &&
                    <Dropdown>
                        <DropdownTrigger>
                            <Button 
                                color="default"
                                variant="faded"
                                className="capitalize"
                            >
                                Chapter {chapter} <ChevronDown />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu 
                            aria-label="Dropdown Variants"
                            color="default" 
                            variant="faded"
                        > 
                                {chaptersData.data?.map((chap)=>(
                                    <DropdownItem key={chap.id} onClick={(e)=>navigate(`/manga/${Manga.uid}/chapter/${chap.number}`)}>Chapter {chap.number}</DropdownItem>
                                ))}
                         </DropdownMenu>
                        </Dropdown>}
                        
                        
                </div>
                <div className="flex gap-5 float-right pr-20 mr-20 pt-6">
                    <Button color="primary" variant="ghost">
                        Prev<ArrowLeft/>
                    </Button>
                    <Button color="primary" variant="ghost">
                        Next<ArrowRight/>
                    </Button>     
                </div>
            </div>
            <hr className="w-full "></hr>
            <div className="flex flex-col mt-16 items-center ">
                {Images.data?.map((value:any,index:number)=>(
                    <div className=" mt-0.5 mb-0.5" key={index}>
                    <img src={value.image} alt="There was a image here" className=""/>
                    </div>
                ))}
            </div>
            <div className=" flow-root mb-15 pb-10 ">
                {isVisible && (
                    <div   className=" float-right mr-5 ">
                    <Button color="primary" variant="ghost" onClick={scrollToTop}><ChevronUp/></Button>
                    </div>
                )}
            </div>
            <hr className="w-full mt-1"></hr>
            <div className="flex-row  flow-root mb-4">
                <div className="flex pl-20 ml-20 pt-6 float-left  ">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button 
                                color="default"
                                variant="faded"
                                className="capitalize"
                            >
                                Chapter 10 <ChevronDown />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu 
                            aria-label="Dropdown Variants"
                            color="default" 
                            variant="faded"
                        >
                            <DropdownItem key="1">Chapter 1</DropdownItem>
                            <DropdownItem key="2">Chapter 2</DropdownItem>
                            <DropdownItem key="3">Chapter 3</DropdownItem>
                            <DropdownItem key="4">Chapter 4</DropdownItem>
                            <DropdownItem key="5">Chapter 5</DropdownItem>
                            <DropdownItem key="6">Chapter 6</DropdownItem>
                            <DropdownItem key="7">Chapter 7</DropdownItem>
                            <DropdownItem key="8">Chapter 8</DropdownItem>
                            <DropdownItem key="9">Chapter 9</DropdownItem>
                            <DropdownItem key="10">Chapter 10</DropdownItem>
                            <DropdownItem key="11">Chapter 11</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="flex gap-5 float-right pr-20 mr-20 pt-6 mb-10">
                    <Button color="primary" variant="ghost">
                        Prev<ArrowLeft/>
                    </Button>
                    <Button color="primary" variant="ghost">
                        Next<ArrowRight/>
                    </Button>     
                </div>
            </div>
            
        </div>
        
    )
}