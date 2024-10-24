"use client";
import arrow from "@/assets/icons/arrow.svg";
import check from "@/assets/icons/check.svg";
import {
  Carousel,
  CarouselContent,
  CarouselContext,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import Image from "next/image";
import { useContext } from "react";
import clsx from "clsx";
export default function SelectOffre() {
  const carouselContext = useContext(CarouselContext);
  console.log(carouselContext?.api?.selectedScrollSnap());
  return (
    <div>
      <div className="wrapper flex gap-8 flex-col items-center">
        <h2 className=" text-center lg:text-left">
          Sélectionnez un forfait existant
        </h2>
        <Carousel opts={{ startIndex: 1 }} className="w-full max-w-[80%]">
          <CarouselContent className="   lg:space-x-8  items-center">
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem
                className={clsx(
                  "md:basis-1/2 ml-1 lg:ml-0  border-oredoo lg:border-gray-400   rounded-lg  border-[2px]  basis-[90%]    shadow-sm  h-fit   lg:basis-1/3",
                  {
                    "lg:border-oredoo lg:min-w-[25rem]   lg:py-10": index === 1,
                  }
                )}
                key={index}
              >
                <div className={clsx("p-4 space-y-6 ", {})}>
                  <div className="flex justify-between items-center">
                    <p
                      className={clsx(" font-bold text-xl", {
                        "text-3xl": index === 1,
                      })}
                    >
                      N'YOOZ 1500
                    </p>
                    <p className=" font-semibold">Valable 30 jours</p>
                  </div>
                  <p className=" text-[#D6001C] font-bold text-lg">
                    30 Go Internet
                  </p>
                  <div className=" space-y-2 ">
                    <p className="flex items-center gap-1">
                      <Image src={check} alt="check" />
                      Appels et SMS vers Ooredoo
                    </p>
                    <p className="flex items-center gap-1">
                      <Image src={check} alt="check" />
                      Facebook & Messenger illimités
                    </p>
                    <p className="flex items-center gap-1">
                      <Image src={check} alt="check" />
                      150 minutes vers les autres réseaux
                    </p>
                  </div>
                  <Button className=" flex w-full justify-between bg-[#D6001C] h-full  rounded-[40px] py-2 hover:bg-[#D6001C]/80 px-6">
                    <p className=" font-bold text-2xl">1500 DA</p>
                    <div>
                      <Image src={arrow} alt="arrow" />
                    </div>
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
