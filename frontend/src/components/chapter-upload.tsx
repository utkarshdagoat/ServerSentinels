import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { mangaApi } from "../services/manga";

export default function ChapterCreate({uid}:{uid:string}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [images, setImages] = useState<FileList | null>(null);
    const [fileList, setFileList] = useState<string[]>([""]);
    const [chNumber , setNumber] = useState<number>(0)

    const [triggerChapterCreate , ResChapterCreate] = mangaApi.endpoints.createChapter.useLazyQuery()
    const [triggerImageUpload , ImageCreateRes] = mangaApi.endpoints.chapterImageUpload.useLazyQuery()

    useEffect(() => {
        console.log(images);
        if (images) {
            const fileListTemp: string[] = [];
            for (let index = 0; index < images.length; index++) {
                const element = images[index];
                fileListTemp.push(element.name);
            }
            console.log(fileListTemp);
            setFileList(fileListTemp);
        }
    }, [images]);

    mangaApi.endpoints.createChapter.useLazyQuerySubscription
    const handleUpload = async ()=>{
        await triggerChapterCreate({
            uid,
            number:chNumber
        })
       
        onClose()
    }

    useEffect(()=>{
        const uploadImages = async () => {
            if(ResChapterCreate.data && images){
                for (let index = 0; index < images.length; index++) {
                    const element = images[index];
                    const formdata = new FormData()
                    formdata.append("image" , element)
                    formdata.append("chapter" , ResChapterCreate.data.id.toString())
                    formdata.append("relNumber" , (index + 1).toString())
                    const res = await fetch('http://localhost:8000/chapter/images/' ,{
                        method:'POST',
                        body:formdata,
                        headers:undefined,
                        credentials:'include'
                    })
                    await res.ok
                }
            }
        }
        uploadImages()
        
    } , [ResChapterCreate.data])
        
    

    return (
        <>
            <Button onPress={onOpen} color="secondary">
                Add Chapter
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} backdrop="blur"className="bg-[url(src/images/svgs/upload-image.svg)] bg-cover bg-no-repeat">
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Upload Chapter</ModalHeader>
                    <ModalBody>
                        {fileList.length > 0 &&
                            fileList.map((file, index) => (
                                <div key={index}>{file}</div>
                            ))}
                        <div className="max-w-xl text-lg">
                            <label className="flex justify-center w-full h-32 px-4 transition border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none text-white">
                                <span className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <span className="font-medium text-white">
                                        Drop files to Attach, or <span className="text-blue-600 underline">browse</span>
                                    </span>
                                </span>
                                <input type="file" required name="file_upload" multiple  className="hidden" onChange={(e) => setImages(e.target.files)} />
                            </label>
                        </div>
                        <Input type="number" variant="bordered" color="default" label="Chapter Number" labelPlacement="outside-left" className="mt-10" onChange={(e)=>setNumber(parseInt(e.target.value))}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" variant="ghost" onClick={handleUpload} >
                            Upload
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
