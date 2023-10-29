import { Image, Button, Card, CardHeader, CardBody, CardFooter, Divider, Link, Chip, Spinner } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import IMAGES from "../images/images";
import { useEffect, useState } from 'react';
import { Heart } from "lucide-react";
import { FaStar } from 'react-icons/fa';
import { useNavigate, useParams } from "react-router-dom";
import { mangaApi } from "../services/manga";
import moment from "moment";
import { error } from "console";

export default function MangaDetails() {
    const { manga_uid } = useParams()

    const [triggerChapters, chapters] = mangaApi.endpoints.getChapters.useLazyQuery()
    const [triggerMangaFetch, manga] = mangaApi.endpoints.getMangaDetail.useLazyQuery()
    useEffect(() => {
        if (manga_uid) {
            triggerChapters(manga_uid)
            triggerMangaFetch(manga_uid)
        }
    }, [manga_uid])
    const [nsfw, setNsfw] = useState<boolean>(false)

    useEffect(() => {
        const nsfw = async () => {
            if (manga.data?.cover) {
                console.log(`http://localhost:10000/?url=${manga.data.cover}`)
                const res = await fetch(
                    `http://localhost:10000/?url=${manga.data.cover}`, {
                    credentials: 'include'
                }
                )
                const jsonRes = await res.json()
                setNsfw(jsonRes.data.is_nsfw)
            }
        }
        nsfw()
    }, [manga.data?.cover])


    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9",
    };

    const [currentValue, setCurrentValue] = useState<number>(0);
    const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);
    const stars = Array(5).fill(0);
    console.log(manga.data)
    console.log(chapters.data)
    const handleClick = (value: number) => {
        setCurrentValue(value);
    };

    const handleMouseOver = (newHoverValue: number) => {
        setHoverValue(newHoverValue);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };
    const navigate = useNavigate()

    const handleOnpress = (cn: number) => {
        navigate(`/manga/${manga_uid}/chapter/${cn}`)
    }

    const color = "bg-red-600"
    return (

        <>
            {chapters.error ? (
                <>Some Error Occured </>
            ) : chapters.isLoading ? (
                <Spinner />
            ) : (chapters.data && 
                <div className=" bg-[url(src/images/svgs/detail.svg)] bg-cover bg-no-repeat flex items-center justify-center m-20 sm:flex-col sm:flex sm:justify-center sm:w-full tablet:flex-col sm:overflow-hidden sm:m-0">

                    {/* Left Div  */}
                    <div className="flex flex-col mt-4 mb-8">
                        <Image width={340}
                            alt="Naruto"
                            src={manga.data?.cover}
                            className=" scale-y-90"

                        />
                        <div className="flex flex-col sm:flex sm:flex-col sm:item-center">
                            <Button color="secondary" variant="shadow" >
                                <Heart /><text className="font-semibold text-lg" >Like</text>
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
                        <Card className="sm:hidden">
                            <CardBody className="flow-root gap-2">
                                <div className="column">
                                    <div className="mb-2">
                                        <p className="font-bold">Author</p>
                                        <p className="font-light">{manga.data?.creator}</p>
                                    </div>
                                    
                                    {chapters.data.length > 0 &&
                                <>
                                    <div className="mb-2">
                                        <p className="font-bold">Posted On</p>
                                        <p className="font-light">{moment.utc(chapters.data?.[0].created).format('DD-MM-YYYY')}</p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="font-bold">Updated on</p>
                                        <p className="font-light">{moment.utc(chapters.data?.[chapters.data?.length - 1].created).format('DD-MM-YYYY')}</p>
                                    </div>
                                    </>    
                                }
                                    
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="flex flex-col ml-10 max-w-full tablet:ml-0">
                        <div className="flex flex-col">
                            <Card className="max-w-[700px]">
                                <CardHeader className="flex gap-3">
                                    <div className="flex flex-row gap-3 justify-center">
                                        <p className="text-xl font-bold">{manga.data?.name}</p>
                                        {nsfw &&
                                            <Chip color="danger">NSFW</Chip>
                                        } </div>
                                </CardHeader>
                                <Divider />
                                <CardBody>
                                    <p>{manga.data?.description}</p>
                                </CardBody>
                            </Card>
                        </div>{chapters.data?.length > 0 &&
                            <div className="flex flex-col mt-5">
                                <Card className="max-w-[700px] min-h-[400px]">
                                    <CardHeader className="flex gap-5">
                                        <div className="flex flex-col">
                                            <p className="text-lg font-bold">Chapters</p>
                                        </div>
                                    </CardHeader>
                                    <Divider />
                                    <CardBody>
                                        <div className="flex flex-row gap-4 tablet:flex-col">
                                            <Card className="min-w-[320px] text-center bg-gradient-to-r from-purple-950  to-black" isPressable > {/* onPress */}
                                                <CardBody className="text-center">
                                                    <p className="text-base">First Chapter</p>
                                                    <p className="text-lg font-semibold">Chapter {chapters.data?.[0].number}</p>
                                                </CardBody>
                                            </Card>
                                            <Card className="min-w-[320px] items-center bg-gradient-to-r from-purple-950  to-black" isPressable>
                                                <CardBody className="text-center">
                                                    <p className="text-base">Latest Chapter</p>
                                                    <p className="text-lg font-semibold">Chapter {chapters.data?.[chapters.data?.length - 1]?.number}</p>
                                                </CardBody>
                                            </Card>
                                        </div>
                                        <div className="flex flex-wrap space-y-10 mt-10 max-h-[300px]">
                                            {chapters.data?.map((chap, index) => (
                                                <Card key={index} className="min-w-full" isPressable onPress={() => handleOnpress(chap.number)}>
                                                    <CardBody className=" items-start">
                                                        <p className="text-md font-bold">Chapter {chap.number}</p>
                                                        <p className="text-small">{moment.utc(chap.created).format('DD-MM-YYYY')}</p>
                                                    </CardBody>
                                                </Card>
                                            ))}
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>}
                    </div>

                </div>
            )}
        </>

    )

}