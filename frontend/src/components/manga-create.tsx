import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Textarea} from "@nextui-org/react";
import { mangaApi } from "../services/manga";
import { useState } from "react";

export default function MangaCreate() {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const [triggerMangaCreate , mangaCreateRes] = mangaApi.endpoints.createManga.useLazyQuery()
  const [name , setName] = useState<string>("")
  const [description , setDescription] = useState<string>("")
  const [author , setAuthor] = useState<string>("")

  const [cover, setCover] = useState<File | null>()

  const handleCreate = async () => {
    const formdata = new FormData()
    if(cover){
      formdata.append("cover" , cover)
    }
    formdata.append("name" , name)
    formdata.append("description" ,description)
    formdata.append("creator" ,author)
    triggerMangaCreate(formdata)
    if(mangaCreateRes.data){
      console.log(mangaCreateRes.data)
      onClose
    }
}


  return (
    <>
      <Button onPress={onOpen} variant="ghost" color="secondary">Create A Manga</Button>
      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        size="5xl"
        placement="top-center"
        className="bg-gradient-to-r from-purple-950 via-black to-purple-950 5xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl">Manga Creation Form</ModalHeader>
              <ModalBody>
                <Input 
                type="text" 
                label="Name" 
                variant="bordered" 
                color="default" 
                className="text-white"
                onChange={(e)=>setName(e.target.value)} 
                 />
                <Textarea variant="bordered" color="default" placeholder="Describe the manga you are uploading" onChange={(e)=>setDescription(e.target.value)}/>
                <Input type="text" label="Author Name" variant="bordered" color="default"
                    onChange={(e)=>setAuthor(e.target.value)}
                    required

                />
                <input id="cover-input" type="file" className="opacity-0 max-w-0 h-0"
                    required
                    onChange={(e)=>setCover(e.target.files?.[0])}
                />
                <label htmlFor="cover-input" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 max-w-[200px]">Upload Cover Image</label>
                <Button variant="ghost" color="default" className="mt-10 max-w-1/6 text-m" onClick={handleCreate}>Create</Button>
              </ModalBody>
              <ModalFooter>
                
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}