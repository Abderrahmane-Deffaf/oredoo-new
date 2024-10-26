"use client";
import snapbg from "@/assets/snapbg.png";
import snapchat1 from "@/assets/snapchat1.png";
import useEmblaCarousel from "embla-carousel-react";
import snapchat2 from "@/assets/snapchat2.png";
import snapchat3 from "@/assets/snapchat3.png";
import stairs2 from "@/assets/stairs-2.png";
// import snapchatCheck from "@/assets/icons/snapchatCheck.svg";
// import snapchatimo from "@/assets/icons/snapchatimo.svg";
import Image from "next/image";
import { DotButton, useDotButton } from "../select-offre/dot-button";
import Autoplay from "embla-carousel-autoplay";

export default function Snapchat() {
  const [emblaRef, api] = useEmblaCarousel(
    {
      skipSnaps: true,
      loop: true,
    },
    [Autoplay({ playOnInit: true, delay: 3000 })]
  );
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

  const content = [
    "1.Cliquez sur le carousel dans les images défilantes",
    "2.Cliquez sur « Activer maintenant » pour profiter de Snapchat gratuitement pendant 24h",
    "3.Revenez demain pour en profiter encore plus !",
  ];
  const slides = [snapchat1, snapchat2, snapchat3];
  return (
    <div className=" relative bg-black flex items-center py-[4rem] h-full overflow-hidden ">
      <div className=" relative flex lg:flex-row flex-col lg:text-left text-center items-center gap-8 lg:gap-4 z-10 wrapper">
        <div className=" lg:basis-1/3 text-white space-y-4">
          <h2>Snapchat gratuit tous les jours</h2>
          <p>
            En plus des avantages précédents, profitez de Snapchat gratuit tous
            les jours sur l’application My Ooredoo
          </p>
          <div className=" embla max-w-full  overflow-hidden " ref={emblaRef}>
            <div className=" flex     embla__container ">
              {content.map((Element, index) => (
                <div
                  className="embla__slide font-semibold h-fit  basis-full   flex-shrink-0 flex-grow-0"
                  key={index}
                >
                  {Element}
                </div>
              ))}
            </div>
            <div className="embla__dots_snap justify-center lg:justify-start ">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot_snap".concat(
                    index === selectedIndex ? " embla__dot_snap--selected" : ""
                  )}
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" min-h-[30rem]  flex lg:justify-start justify-center basis-1/3">
          {slides.map((Element, index) => {
            if (index === selectedIndex)
              return (
                <Image className="  image__slide w-2/3" src={Element} alt="" />
              );
          })}
        </div>
      </div>
      <Image
        className=" top-0 right-0 left-0 bottom-0  object-cover absolute  h-full w-full"
        src={snapbg}
        alt=""
      />
    </div>
  );
}
