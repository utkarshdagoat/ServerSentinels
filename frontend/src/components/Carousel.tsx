import IMAGES from "../images/images";
import { Button, Image, Spinner } from "@nextui-org/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useGetMangasQuery } from "../services/manga";

export default function Carousel() {
  const { data, isLoading, error } = useGetMangasQuery();
  console.log(data)

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextObject = () => {
    if (data) {
      if (currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const previousObject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const currentObject = data?.[currentIndex];
  return (
    <div>
      {error ? (
        <>Some Error Occurred</>
      ) : isLoading ? (
        <Spinner></Spinner>
      ) : data && currentObject ? (
        <div className="flex flex-col bg-blob bg-cover bg-center bg-no-repeat max-w-4/5 mx-auto sm:hidden">
          <div className="flex justify-between w-full h-0">
            <Button
              color="primary"
              variant="bordered"
              onClick={previousObject}
              disabled={currentIndex === 0}
              className="top-44 border-0"
            >
              <ArrowLeft />
            </Button>
            <Button
              color="primary"
              variant="bordered"
              onClick={nextObject}
              disabled={currentIndex === data.length - 1}
              className="top-44 border-0"
            >
              <ArrowRight />
            </Button>
          </div>
          <div className="flex items-end justify-around object-contain pr-24 pt-12 t-0 mr-4">
            <div className="flex flex-col ml-20 pl-20 pb-16 t-0">
              <text className="pr-40 text-4xl mb-4 font-semibold">
                {currentObject.name}
              </text>
              <text className="text-base font-bold uppercase">Summary</text>
              <text className="overflow-hidden text-ellipsis w-96 pb-6 text-xs">
                {currentObject.description}
              </text>
              <Button color="secondary" variant="shadow" className="w-1/4">
                Read Now
              </Button>
            </div>
            <Image
              isBlurred
              width={200}
              src={currentObject.cover}
              alt="NextUI Album Cover"
              height={300}
              className="rounded-lg overflow-hidden relative pb-16 w-full large:hidden"
            />
          </div>
        </div>
      ) : (
        <div>Nothing to Show</div>
      )}
    </div>
  );
}
