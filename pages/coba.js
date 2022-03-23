import React from "react";
import Image from "next/image";
import testpic from "../public/img/test.png";
const Coba = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y">
      <h1 className="text-3xl">Images tailwind</h1>
      <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2">
        <Image objectFit="cover" src={testpic} alt="Pict " layout="fill" />
      </div>
    </div>
  );
};

export default Coba;
