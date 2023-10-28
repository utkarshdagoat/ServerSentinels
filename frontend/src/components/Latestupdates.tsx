import { useState, useEffect, useRef } from "react";
import {Card, CardBody, CardFooter, Image, Spacer, Button} from "@nextui-org/react";
import {Flame} from "lucide-react"
import IMAGES from "../images/images";
export default function Latestupdates() {
type direction = "prev" | "next"
  const list = [
    {
      title: "One punch Man",
      img: IMAGES.opm,
      latest: "Chapter 220",
    },
    {
      title: "Demon Slayer",
      img: IMAGES.demon,
      latest: "Chapter 134",
    },
    {
      title: "Naruto",
      img: IMAGES.naruto,
      latest: "Chapter 102",
    },
    {
      title: "Soul Eater",
      img: IMAGES.soul,
      latest: "Chapter 48",
    },
    {
      title: "One Piece",
      img: IMAGES.onepiece,
      latest: "Chapter 1023",
    },
    {
      title: "Rurouni Kenshin",
      img: IMAGES.rurouni,
      latest: "Chapter 86",
    },
  ];

  
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);
  
    const movePrev = () => {
        if(scrollablDivRef.current){
            scrollablDivRef.current.scrollLeft -= scrollablDivRef.current.offsetWidth/4
        }
    };
  
    const moveNext = () => {
        if(scrollablDivRef.current){
            scrollablDivRef.current.scrollLeft += scrollablDivRef.current.offsetWidth/4
        }
    };
    
    const isDisabled = (direction:direction) => {
      if (direction === 'prev') {
        return currentIndex <= 0;
      }
  
      if (direction === 'next' && carousel.current !== null) {
        return (
          carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
        );
      }
  
      return false;
    };

    const scrollablDivRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
      if (carousel !== null && carousel.current !== null) {
        carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
      }
    }, [currentIndex]);
  
    useEffect(() => {
      maxScrollWidth.current = carousel.current
        ? carousel.current?.scrollWidth - carousel.current.offsetWidth
        : 0;
        if(carousel.current)
        console.log(carousel?.current.offsetWidth)
    }, [currentIndex]);
  

  return (
    <div className="carousel mt-6 mb-1 mx-auto flex-col pl-3">
        <div className="flex">
        <h2 className="text-3xl leading-8 font-semibold mb-6 mt-4 text-white inline-block float-left flex items-center">
            <>Latest Updates</>🔥
        </h2>
        </div>
        <div className="relative overflow-hidden">
            <div className="flex justify-between absolute top left w-full h-full">
                <button
                    onClick={movePrev}
                    className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                    /* disabled={isDisabled('prev')} */
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-20 -ml-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                    </svg>
                    <span className="sr-only text-white">Prev</span>
                </button>
                <button
                    onClick={moveNext}
                    className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                    /* disabled={isDisabled('next')} */
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-20 -ml-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                        />
                    </svg>
                    <span className="sr-only text-white">Next</span>
                </button>
            </div>
            <div
                ref={carousel}
                className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
            >
            <div className="flex overflow-x-auto scroll-smooth scrollbar-hide pb-10" ref={scrollablDivRef}>
                <div className="flex space-x-5   " >
                {list.map((item, index) => (
                    <Card isFooterBlurred className="w-[320px] h-[270px] col-span-12 sm:col-span-5 ">
                    <Image
                      removeWrapper
                      alt="Card example background"
                      className="z-0 w-full h-full "
                      src={item.img}
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                      <div>
                        <p className="text-black text-base font-semibold">{item.latest}</p>
                      </div>
                      <Button className="text-tiny" color="primary" radius="full" size="sm">
                        Read Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
                </div>
            </div>
            </div>
        </div>
    </div>
    );
};



