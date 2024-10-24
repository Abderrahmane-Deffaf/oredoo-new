import clsx from "clsx";
import { Button } from "../ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { Dispatch, SetStateAction } from "react";

type offertype = {
  offre: number;
  prix: number;
};

type TotalOfferType = {
  internet: {
    offre: number;
    prix: number;
  };
  appelOredoo: {
    offre: number;
    prix: number;
  };
  appelAutres: {
    offre: number;
    prix: number;
  };
  sms: {
    offre: number;
    prix: number;
  };
  extra: {
    offre: number;
    prix: number;
  };
};

type OffersSlideProps = {
  offerName: string;
  offerTotal: offertype;
  offerValues: offertype[];
  offerUnit: string;
  totalOffer: TotalOfferType;
  setTotalOffer: Dispatch<SetStateAction<TotalOfferType>>;
};

export default function OffersSlide({
  offerName,
  offerTotal,
  offerValues,
  offerUnit,
  setTotalOffer,
  totalOffer,
}: OffersSlideProps) {
  const [emblaRef, api] = useEmblaCarousel({
    loop: true,
    startIndex: 2,
    skipSnaps: true,
  });

  const handleOfferSwitch = (offer: offertype) => {
    switch (offerName) {
      case "Internet":
        const obj = {
          internet: offer,
        };
        setTotalOffer({
          ...totalOffer,
          ...obj,
        });
        break;
      case "Appels vers Ooredoo":
        const obj2 = {
          appelOredoo: offer,
        };
        setTotalOffer({
          ...totalOffer,
          ...obj2,
        });
        break;
      case "Appels vers les autres réseaux":
        const obj3 = {
          appelAutres: offer,
        };
        setTotalOffer({
          ...totalOffer,
          ...obj3,
        });
        break;
      case "SMS":
        const obj4 = {
          sms: offer,
        };
        setTotalOffer({
          ...totalOffer,
          ...obj4,
        });
        break;
    }
  };
  return (
    <div className="  w-full  space-y-4">
      <p className="  text-center">
        {offerName}: {offerTotal.prix} DA
      </p>
      <div className=" embla max-w-full overflow-hidden " ref={emblaRef}>
        <div className=" flex  embla__container ">
          {offerValues.map((Element, index) => (
            <div
              className="embla__slide basis-1/2   flex-shrink-0 flex-grow-0 lg:basis-1/4"
              key={index}
            >
              <Button
                onClick={() => {
                  handleOfferSwitch(Element);
                  api?.scrollTo(index);
                }}
                className={clsx(
                  "bg-transparent hover:bg-oredoo/80 hover:text-white text-black font-bold rounded-none py-3 px-6 w-full h-full text-lg lg:text-2xl border-2 border-oredoo ",
                  {
                    "bg-oredoo text-white": Element.offre === offerTotal.offre,
                  }
                )}
              >
                {Element.offre} {offerUnit}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
