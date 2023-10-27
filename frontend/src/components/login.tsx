import {  Input , Link ,Checkbox} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { useState } from "react";

import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [backdrop , setBackdrop] = useState<string>("")

  const handleOpen = (backdrop:string) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3" id="login">
        <Button
          variant="flat"
          color="warning"
          onPress={() => handleOpen("transparent")}
          className="capitalize"
        >
          Login
        </Button>
      </div>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} className="bg-slate-800		items-left justify-start">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 items-center text-white ">Hi, Welcome Back! 😺</ModalHeader>
            <ModalBody>
              <Input type="email" label="Email" variant="bordered" className="text-white" />
              <Input
                label="Password"
                variant="bordered"
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <Eye className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="max-w-xs mt-4 min-w-[400px] text-white"
              />
              <Link href="#" size="md">Forgot Password</Link>
              <Checkbox defaultSelected size="sm" className="text-white mb"><text className="text-white">I agree to the Terms and Conditions.</text></Checkbox>
              <Button color="primary" variant="ghost" className="items-center min-w-[400px] mt-3 ">
                Login
              </Button>
              
            </ModalBody>
            <ModalFooter className="justify-start">
            <text className="text-white">Dont have an account?</text><Link href="#" size="md">Sign up</Link>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
