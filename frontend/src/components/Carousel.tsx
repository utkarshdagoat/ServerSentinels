import IMAGES from "../images/images"
import {Button, Image} from "@nextui-org/react"
import {ArrowLeft, ArrowRight} from "lucide-react"
import { useState } from "react"

export default function Carousel(){

    const images = [
        {
            url:IMAGES.demon,
            title:"Demon slayer",
            description:"Tanjirou Kamado lives with his impoverished family on a remote mountain. As the oldest sibling, he took upon the responsibility of ensuring his family's livelihood after the death of his father. On a cold winter day, he goes down to the local village in order to sell some charcoal. As dusk falls, he is forced to spend the night in the house of a curious man who cautions him of strange creatures that roam the night: malevolent demons who crave human flesh."
        },
        {
            url:IMAGES.naruto,
            title:"Naruto",
            description:"Whenever Naruto Uzumaki proclaims that he will someday become the Hokage—a title bestowed upon the best ninja in the Village Hidden in the Leaves—no one takes him seriously. Since birth, Naruto has been shunned and ridiculed by his fellow villagers. But their contempt isn't because Naruto is loud-mouthed, mischievous, or because of his ineptitude in the ninja arts, but because there is a demon inside him. Prior to Naruto's birth, the powerful and deadly Nine-Tailed Fox attacked the village."
        },
        {
            url:IMAGES.onepiece,
            title:"One Piece",
            description:"Gol D. Roger, a man referred to as the King of the Pirates,is set to be executed by the World Government. But just before his demise, he confirms the existence of a great treasure, One Piece, located somewhere within the vast ocean known as the Grand Line. Announcing that One Piece can be claimed by anyone worthy enough to reach it, the King of the Pirates is executed and the Great Age of Pirates begins."
        },
        {
            url:IMAGES.soul,
            title:"Soul Eater",
            description: "Death City is home to the Death Weapon Meister Academy, established by Shinigami—the grim reaper himself. Created to maintain peace, the academy trains Meisters and Demon Weapons—people who take on the form of a weapon—to defend humanity against evil. The ultimate goal of a Meister is to create a Death Scythe worthy of being wielded by Shinigami. To do this, their weapon partner must consume the souls of 99 wicked humans and one witch."
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

  const nextObject = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousObject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const currentObject = images[currentIndex];
    return(
        <div className="flex flex-col bg-blob bg-cover bg-center bg-no-repeat">
            
            <div className="flex justify-between w-full h-0">
            <Button color="primary" variant="bordered" onClick={previousObject} disabled={currentIndex===0} className="top-44 border-0">
                <ArrowLeft />
            </Button>
            <Button color="primary" variant="bordered" onClick={nextObject} disabled={currentIndex===images.length} className="top-44 border-0">
                <ArrowRight />
            </Button>
            
            </div>
          
           <div className=" flex  items-end justify-around object-contain pr-24 pt-12 t-0 mr-4">
             {/* <img src={currentObject.url} alt="Cover" height={2} className="w-full  justify-center"/> */}
             <div className="flex flex-col ml-20 pl-20 pb-16 t-0">
             <text className="pr-40 text-4xl mb-4 font-semibold">{currentObject.title}</text>
             <text className="text-base font-bold uppercase">Summary</text>
             <text className="overflow-hidden text-ellipsis bg-black w-96 pb-6 text-xs">{currentObject.description}</text>
             <Button color="primary" variant="shadow" className="w-1/4">
                Read Now
            </Button>
             </div>
             <Image
            isBlurred
            width={200}
            src={currentObject.url}
            alt="NextUI Album Cover"
            height={300}
            className="rounded-lg overflow-hidden relative pb-16  w-full"
         />
           
            </div>
            
        </div>
    )
}