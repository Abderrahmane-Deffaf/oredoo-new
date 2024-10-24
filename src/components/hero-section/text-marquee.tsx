import React from "react";
import star from "@/assets/icons/star.svg";
import Image from "next/image";

export default function TextMarquee() {
  return (
    <div className=" flex w-[7rem] items-center justify-between ml-14">
      <div className=" flex items-center">
        <Image src={star} alt="star" />
      </div>
      <p>N’YOOZ</p>
    </div>
  );
}
