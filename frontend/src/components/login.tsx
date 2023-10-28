import { Input, Link, Checkbox } from "@nextui-org/react";
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

import { Eye, EyeOff, FastForward } from "lucide-react";
import { userApi} from "../services/user";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";

export default function Login() {

  const [trigger , res] =userApi.endpoints.signUp.useLazyQuery()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);

  const [triggerLogout , resLogout] = userApi.endpoints.logout.useLazyQuery()
;

  const [dP, setDP] = useState<File | null>()

  const navigate = useNavigate()

  const handleLogin = async () => {
    const res = await fetch('http://localhost:8000/auth/login/', {
      method: "POST",
      body: JSON.stringify({ "username": username, password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const loginRes = await res.json()
    if (loginRes.ok) {
      navigate('/')
    }
  }

  const dispatch = useAppDispatch()

  const handleSignup = async () => {
      const formdata = new FormData()
      if(dP){
        formdata.append("profile_picture" , dP)
      }
      formdata.append("username" , username)
      formdata.append("password" , password)
      trigger(formdata)
      if(res.data){
        onClose()
      }
  }


  const toggleVisibility = () => setIsVisible(!isVisible);

  const [backdrop, setBackdrop] = useState<string>("")
  const [signUp, setSignUp] = useState<boolean>(false)

  const handleOpen = (backdrop: string) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <>
      <Button
        variant="flat"
        color="secondary"
        onPress={() => handleOpen("transparent")}
        className="capitalize"
      >
        Login
      </Button>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} className="bg-opacity-80 backdrop-filter backdrop-blur-md backdrop-saturate-180 bg-black-600 bg-opacity-80 rounded-lg border border-white border-opacity-20 overflow-hidden py-4 items-center justify-center">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 items-center text-white ">Hi, Welcome Back! 😺</ModalHeader>
            <ModalBody>
              <Input type="username" label="username" onChange={(e) => setUsername(e.target.value)} variant="bordered" className="text-white" />
              <Input
                label="Password"
                variant="bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <Eye className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                required
                type={isVisible ? "text" : "password"}
                className="max-w-xs mt-4 min-w-[400px] text-white"
              />
              {
                signUp &&
                <>
                  <input
                    type="file"
                    className="opacity-0"
                    id="file-input"
                    onChange={(e)=>setDP(e.target?.files?.[0])}
                  />
                  <label htmlFor="file-input" className="bg-purple-500 max-w-2/5 flex justify-center items-center rounded-xl p-2 hover:cursor-pointer">Display picture</label>
                </>
              }

              {!signUp &&
                <Link href="#" color="secondary" size="md">Forgot Password</Link>
              }  {signUp &&

                <Checkbox color="secondary" defaultSelected size="sm" className="text-white mb" onChange={(e) => setCheck(e.target.checked)}>
                  <text className="text-white">I agree to the Terms and Conditions.</text></Checkbox>
              }


            </ModalBody>
            <ModalFooter>
              <Button color="secondary" variant="ghost" className="items-center max-w-3/5 mt-3 " onClick={(signUp) ? handleSignup: handleLogin}>
                {signUp ? (
                  <>Sign Up</>
                ) : (
                  <>Login</>
                )}
              </Button>
            </ModalFooter>
            <ModalFooter className="justify-start">{!signUp ? (
              <><text className="text-white">Dont have an account?</text><Link href="#" color="secondary" size="md" onClick={() => setSignUp(true)}>Sign up</Link></>
            ) : (
              <><text className="text-white">Have an account?</text><Link href="#" color="secondary" size="md" onClick={() => setSignUp(false)}>Log in</Link></>

            )}</ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
