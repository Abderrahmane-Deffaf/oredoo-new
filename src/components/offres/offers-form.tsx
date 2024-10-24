"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import clsx from "clsx";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import facebook from "@/assets/icons/facebook.svg";
import youtube from "@/assets/icons/youtube.svg";
import tiktok from "@/assets/icons/tiktok.svg";
import instagram from "@/assets/icons/instagram.svg";
import Image from "next/image";
const offers = [
  {
    internet: {
      name: "Internet",
      values: [
        {
          offre: 50,
          prix: 1800,
        },
        {
          offre: 40,
          prix: 1500,
        },
        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 30,
          prix: 1200,
        },
        {
          offre: 20,
          prix: 1000,
        },
      ],
    },
    appelOredoo: {
      name: "Appels vers Ooredoo",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
    appelAutres: {
      name: "Appels vers les autres réseaux",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
    sms: {
      name: "SMS",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
  },
  {
    internet: {
      name: "Internet",
      values: [
        {
          offre: 50,
          prix: 1800,
        },
        {
          offre: 40,
          prix: 1500,
        },
        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 30,
          prix: 1200,
        },
        {
          offre: 20,
          prix: 1000,
        },
      ],
    },
    appelOredoo: {
      name: "Appels vers Ooredoo",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
    appelAutres: {
      name: "Appels vers les autres réseaux",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
    sms: {
      name: "SMS",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
  },
  {
    internet: {
      name: "Internet",
      values: [
        {
          offre: 50,
          prix: 1800,
        },
        {
          offre: 40,
          prix: 1500,
        },
        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 30,
          prix: 1200,
        },
        {
          offre: 20,
          prix: 1000,
        },
      ],
    },
    appelOredoo: {
      name: "Appels vers Ooredoo",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
    appelAutres: {
      name: "Appels vers les autres réseaux",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
    sms: {
      name: "SMS",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
  },
];

const defaultOffre = {
  internet: {
    offre: 0,
    prix: 0,
  },
  appelOredoo: {
    offre: 0,
    prix: 0,
  },
  appelAutres: {
    offre: 0,
    prix: 0,
  },
  sms: {
    offre: 0,
    prix: 0,
  },
  extra: {
    offre: -1,
    prix: 0,
  },
};

const extra = [
  {
    name: "FB & Messenger",
    icon: facebook,
    offre: 0,
    prix: 200,
  },
  {
    name: "Youtube",
    icon: youtube,
    offre: 1,
    prix: 200,
  },
  {
    name: "TikTok",
    icon: tiktok,
    offre: 2,
    prix: 200,
  },
  {
    name: "Instagram",
    icon: instagram,
    offre: 3,
    prix: 200,
  },
];

export default function OffersForm() {
  const [currentOffer, setCurrentOffer] = useState(15);
  const [totalOffer, setTotalOffer] = useState(defaultOffre);
  const [offerFeatures, setOfferFeatures] = useState(offers[0]);
  return (
    <div className=" w-full">
      <Tabs className=" space-y-[3rem]" defaultValue="personalisez">
        <TabsList className="flex justify-center gap-8">
          <TabsTrigger className="uppercase w-fit" value="personalisez">
            Personnaliser lr forfait
          </TabsTrigger>
          <TabsTrigger className="uppercase w-fit" disabled value="combinaison">
            combinaisons Populaires
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className=" flex flex-col gap-[3rem] items-center"
          value="personalisez"
        >
          <div className=" space-x-4 bg-white shadow-md py-2 px-6 rounded-[40px]">
            {[30, 15, 7].map((Element, index) => (
              <Button
                onClick={() => {
                  setCurrentOffer(Element);
                  setOfferFeatures(offers[index]);
                }}
                className={clsx(
                  "bg-transparent text-black hover:text-white hover:bg-oredoo rounded-[30px] shadow-none font-bold",
                  {
                    "bg-oredoo text-white ": Element === currentOffer,
                  }
                )}
              >
                {Element} Jours
              </Button>
            ))}
          </div>
          <div className=" w-full space-y-4">
            <p className=" text-center">
              {offerFeatures.internet.name}: {totalOffer.internet.prix} DA
            </p>
            <Carousel opts={{ startIndex: 1 }} className="w-full ">
              <CarouselContent className=" ml-0 ">
                {offerFeatures.internet.values.map((Element, index) => (
                  <CarouselItem className=" pl-0 lg:basis-1/4" key={index}>
                    <Button
                      className={clsx(
                        "bg-transparent hover:bg-oredoo/80 hover:text-white text-black font-bold rounded-none py-3 px-6 w-full h-full text-2xl border-2 border-oredoo ",
                        {
                          "bg-oredoo text-white":
                            Element.offre === totalOffer.internet.offre,
                        }
                      )}
                    >
                      {Element.offre} GO
                    </Button>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className=" w-full space-y-4">
            <p className=" text-center">
              {offerFeatures.appelOredoo.name}: {totalOffer.appelOredoo.prix} DA
            </p>
            <Carousel opts={{ startIndex: 1 }} className="w-full ">
              <CarouselContent className=" ml-0 ">
                {offerFeatures.appelOredoo.values.map((Element, index) => (
                  <CarouselItem className=" pl-0 lg:basis-1/4" key={index}>
                    <Button
                      className={clsx(
                        "bg-transparent hover:bg-oredoo/80 hover:text-white text-black font-bold rounded-none py-3 px-6 w-full h-full text-2xl border-2 border-oredoo ",
                        {
                          "bg-oredoo text-white":
                            Element.offre === totalOffer.appelOredoo.offre,
                        }
                      )}
                    >
                      {Element.offre} MIN
                    </Button>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className=" w-full space-y-4">
            <p className=" text-center">
              {offerFeatures.appelAutres.name}: {totalOffer.appelAutres.prix} DA
            </p>
            <Carousel opts={{ startIndex: 1 }} className="w-full ">
              <CarouselContent className=" ml-0 ">
                {offerFeatures.appelAutres.values.map((Element, index) => (
                  <CarouselItem className=" pl-0 lg:basis-1/4" key={index}>
                    <Button
                      className={clsx(
                        "bg-transparent hover:bg-oredoo/80 hover:text-white text-black font-bold rounded-none py-3 px-6 w-full h-full text-2xl border-2 border-oredoo ",
                        {
                          "bg-oredoo text-white":
                            Element.offre === totalOffer.appelAutres.offre,
                        }
                      )}
                    >
                      {Element.offre} GO
                    </Button>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className=" w-full space-y-4">
            <p className=" text-center">
              {offerFeatures.sms.name}: {totalOffer.sms.prix} DA
            </p>
            <Carousel opts={{ startIndex: 1 }} className="w-full ">
              <CarouselContent className=" ml-0 ">
                {offerFeatures.sms.values.map((Element, index) => (
                  <CarouselItem className=" pl-0 lg:basis-1/4" key={index}>
                    <Button
                      className={clsx(
                        "bg-transparent hover:bg-oredoo/80 hover:text-white text-black font-bold rounded-none py-3 px-6 w-full h-full text-2xl border-2 border-oredoo ",
                        {
                          "bg-oredoo text-white":
                            Element.offre === totalOffer.sms.offre,
                        }
                      )}
                    >
                      {Element.offre} SMS
                    </Button>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className=" w-full flex items-center justify-between">
            <h3>Sélectionnez votre EXTRA</h3>
            <div className=" flex w-full  gap-4 ">
              {extra.map((Element, index) => (
                <Button
                  className={clsx(
                    " bg-transparent w-[23%] h-full text-black hover:bg-transparent hover:outline-2 hover:outline hover:outline-oredoo rounded-lg p-3 flex flex-col gap-3 shadow-md",
                    {
                      "outline-2 outline outline-oredoo ":
                        Element.offre === totalOffer.extra.offre,
                    }
                  )}
                >
                  <div className=" h-[60px]">
                    <Image src={Element.icon} alt={Element.name} />
                  </div>
                  <p className=" font-bold ">{Element.name}</p>
                  <p className=" text-sm text-oreddoGray">+{Element.prix} DA</p>
                </Button>
              ))}
            </div>
          </div>
          <div className=" w-[20rem] space-y-4">
            <p className=" py-3 text-xl rounded-[40px] shadow-md w-full text-center   text-oredoo font-bold ">
              <span className=" text-black">TOTAL: </span>
              {totalOffer.appelAutres.prix +
                totalOffer.appelOredoo.prix +
                totalOffer.extra.prix +
                totalOffer.internet.prix +
                totalOffer.sms.prix}{" "}
              DA
            </p>
            <Button className=" uppercase font-bold text-xl shadow-md rounded-[40px] bg-oredoo hover:bg-oredoo/80 py-3 h-full w-full text-center">
              Acheter ce forfait
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="combinaison"></TabsContent>
      </Tabs>
    </div>
  );
}
