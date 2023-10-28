import {Image, Button, Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import IMAGES from "../images/images";
import { useState } from 'react';
import {Heart} from "lucide-react";
import { FaStar } from 'react-icons/fa';


export default function MangaDetails(){
    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9",
      };
    
      const [currentValue, setCurrentValue] = useState<number>(0);
      const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);
      const stars = Array(5).fill(0);
    
      const handleClick = (value: number) => {
        setCurrentValue(value);
      };
    
      const handleMouseOver = (newHoverValue: number) => {
        setHoverValue(newHoverValue);
      };
    
      const handleMouseLeave = () => {
        setHoverValue(undefined);
      };

    const color = "bg-red-600"
    return(
        <div className="flex items-center justify-center">

            {/* Left Div  */}
            <div className="flex flex-col mt-4 mb-8">
                <Image width={340}
                    alt="Naruto"
                    src={IMAGES.naruto}
                    className=" scale-y-90"
                    
                />
                <div className="flex flex-col">
                    <Button  color="primary" variant="shadow" >
                        <Heart /><text className="font-semibold text-lg">Like</text>
                    </Button>
                    <Card className="flex flex-row h-10 mt-4 mb-4 overflow-x-hidden items-center bg-zinc-800">
                        <CardBody className="flex flex-row items-center mt-3">
                            <div className="flex items-center mb-3">
                            {stars.map((_, index) => {
                                return (
                                <FaStar
                                    key={index}
                                    size={14}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                    style={{
                                    marginRight: 10,
                                    cursor: "pointer",
                                    }}
                                />
                                );
                                })}
                            </div>
                            <div className="text-white text-sm font-semibold ml-20 pl-20 pb-3.5">
                                {currentValue * 2}
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <Card>
                    <CardBody className="flow-root gap-2">
                        <div className="float-left mr-10 gap-2">
                            <p className="mb-2">Author</p>
                            <p className="mb-2">Posted On</p>
                            <p className="mb-2">Updated on</p>
                            <p>Views</p>
                        </div> 
                        <div className="float-right ml-10">
                            <p className="mb-2">Masahi Kishimoto</p>
                            <p className="mb-2">July 21, 2023</p>
                            <p className="mb-2">October 23, 2023</p>
                            <p >70976 Views</p>
                        </div> 
                    </CardBody>
                </Card>   
            </div>

            <div className="flex flex-col ml-10">
                <div className="flex flex-col">
                <Card className="max-w-[700px]">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-xl font-bold">Naruto</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p>Whenever Naruto Uzumaki proclaims that he will someday become the Hokage—a title bestowed upon the best ninja in the Village Hidden in the Leaves—no one takes him seriously. Since birth, Naruto has been shunned and ridiculed by his fellow villagers. But their contempt isn't because Naruto is loud-mouthed, mischievous, or because of his ineptitude in the ninja arts, but because there is a demon inside him. Prior to Naruto's birth, the powerful and deadly Nine-Tailed Fox attacked the village.</p>
                    </CardBody>
                    </Card>
                </div>
                <div className="flex flex-col mt-5">
                <Card className="max-w-[700px] min-h-[400px]">
                    <CardHeader className="flex gap-5">
                        <div className="flex flex-col">
                            <p className="text-lg font-bold">Chapters</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <div className="flex flex-row gap-4">
                            <Card className="min-w-[320px] text-center bg-black " isPressable > {/* onPress */}
                                <CardBody className="text-center">
                                    <p className="text-base">First Chapter</p>
                                    <p className="text-lg font-semibold">Chapter 1</p>
                                </CardBody>
                            </Card>
                            <Card className="min-w-[320px] items-center bg-black" isPressable>
                                <CardBody className="text-center">
                                    <p className="text-base">Latest Chapter</p>
                                    <p className="text-lg font-semibold">Chapter 23</p>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="grid grid-cols-4 gap-2 mt-3 " >
                        <Card className="max-w-[160px]" isPressable>
                            <CardBody className=" items-start">
                                <p className="text-md">Chapter 23</p>
                                <p className="text-small">October 23, 2023</p>
                            </CardBody>
                        </Card>
                        <Card className="max-w-[160px] ml-1">
                            <CardBody className=" items-start">
                                <p className="text-md">Chapter 22</p>
                                <p className="text-small">October 16, 2023</p>
                            </CardBody>
                        </Card>
                        <Card className="min-w-[160px] ml-1">
                            <CardBody className=" items-start">
                                <p className="text-md">Chapter 21</p>
                                <p className="text-small">October 9, 2023</p>
                            </CardBody>
                        </Card>
                        <Card className="min-w-[160px] ml-1">
                            <CardBody className=" items-start">
                                <p className="text-md">Chapter 20</p>
                                <p className="text-small">October 2, 2023</p>
                            </CardBody>
                        </Card>
                        <Card className="min-w-[160px] ">
                            <CardBody className=" items-start">
                                <p className="text-md">Chapter 19</p>
                                <p className="text-small">October 2, 2023</p>
                            </CardBody>
                        </Card>
                        </div>
                    </CardBody>
                    </Card>
                </div>
            </div>

        </div>
    )
    
}