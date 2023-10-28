import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function ChapterCreate() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [images, setImages] = useState<FileList | null>(null);
    const [fileList, setFileList] = useState<string[]>([""]);

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

    return (
        <>
            <Button onPress={onOpen} color="secondary">
                Add Chapter
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} backdrop="blur"className="bg-[url(src/images/svgs/upload-image.svg)] bg-cover bg-no-repeat">
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                    <ModalBody>
                        {fileList.length > 0 &&
                            fileList.map((file, index) => (
                                <div key={index}>{file}</div>
                            ))}
                        <div className="max-w-xl">
                            <label className="flex justify-center w-full h-32 px-4 transition border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none text-white">
                                <span className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <span className="font-medium text-white">
                                        Drop files to Attach, or <span className="text-blue-600 underline">browse</span>
                                    </span>
                                </span>
                                <input type="file" name="file_upload" className="hidden" onChange={(e) => setImages(e.target.files)} />
                            </label>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" variant="ghost" onClick={onClose}>
                            Upload
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
