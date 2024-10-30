"use client";
import arrow from "@/assets/icons/arrow.svg";
import check from "@/assets/icons/check.svg";
import { Button } from "../ui/button";
import Image from "next/image";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import { DotButton, useDotButton } from "./dot-button";

export default function SelectOffre() {
  const [emblaRef, api] = useEmblaCarousel(
    {
      startIndex: 1,
      skipSnaps: true,
      loop: true,
    },
    [
      ClassNames({
        snapped: "snap_slide",
      }),
    ]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

  console.log(api?.selectedScrollSnap());

  return (
    <div>
      <div className="wrapper group-[]: flex gap-8 flex-col items-center">
        <h2 className=" text-center lg:text-left">
          Sélectionnez un forfait existant
        </h2>
        <div className=" embla w-full  ">
          <div ref={emblaRef} className=" embla_viewport  overflow-hidden ">
            <div className=" flex -ml-4 items-center embla__container ">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="    embla__slide   basis-full   flex-shrink-0 flex-grow-0 md:basis-1/3  lg:basis-1/3   pl-4"
                >
                  <div className="border p-4 space-y-6 rounded-lg">
                    <div className="flex justify-between  items-center">
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
                    <Button className=" flex w-full justify-between bg-[#D6001C] h-auto  rounded-[40px] py-2 hover:bg-[#D6001C]/80 px-6">
                      <p className=" font-bold text-2xl">1500 DA</p>
                      <div>
                        <Image src={arrow} alt="arrow" />
                      </div>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
