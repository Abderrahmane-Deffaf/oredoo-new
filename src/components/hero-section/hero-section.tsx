import React from "react";
import hero from "@/assets/hero.png";
import Image from "next/image";

//
export default function HeroSection() {
  return (
    <div className=" relative">
      <div className="w-full  bg-black overflow-hidden text-white">
        <h1 className="absolute z-10 header">N’YOOZ</h1>
        <Image
          className="w-full h-full hero_image "
          src={hero}
          alt="hero image"
        />
      </div>
    </div>
  );
}
