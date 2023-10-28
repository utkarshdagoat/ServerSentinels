import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import IMAGES from "../images/images";
export default function Footer() {
  return (
    <div className="w-full flex items-center justify-center ">
    <Card className=" flex w-full border-none justify-center rounded-none bg-gradient-to-r  from-purple-950 to-black">
      <CardHeader className="flex gap-3 justify-center">
        <Image
          alt="nextui logo"
          height={48}
          radius="sm"
          src={IMAGES.logo}
          width={48}
        />
        <div className="flex flex-col justify-center">
          <p className="text-md">Nippon Manga</p>
          <p className="text-small text-default-500">nipponmanga.org</p>
        </div>
      </CardHeader>
      <CardBody className="flex justify-center text-center">
        <p >Read the latest and most popular manga for free.</p>
      </CardBody>
      <CardFooter className="flex justify-center">
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/utkarshdagoat/ServerSentinels"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
    </div>
  );
}