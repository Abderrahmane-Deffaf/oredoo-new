"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import clsx from "clsx";

import Image from "next/image";
import { defaultOffre, extra, offers } from "./content";
import OffersSlide from "./offers-slide";

export default function OffersForm() {
  const [currentOffer, setCurrentOffer] = useState(15);
  const [totalOffer, setTotalOffer] = useState(defaultOffre);
  const [offerFeatures, setOfferFeatures] = useState(offers[0]);
  return (
    <div className=" w-full">
      <Tabs className=" space-y-[3rem]" defaultValue="personalisez">
        <TabsList className="flex lg:flex-row flex-col justify-center gap-8">
          <TabsTrigger className="uppercase w-fit" value="personalisez">
            Personnaliser lr forfait
          </TabsTrigger>
          <TabsTrigger className="uppercase w-fit" disabled value="combinaison">
            combinaisons Populaires
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className=" flex flex-col gap-[3rem]  items-center"
          value="personalisez"
        >
          <div className=" space-x-4 bg-white shadow-md py-2 lg:px-6 px-2 rounded-[40px]">
            {[30, 15, 7].map((Element, index) => (
              <Button
                key={Element}
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
          <OffersSlide
            setTotalOffer={setTotalOffer}
            totalOffer={totalOffer}
            offerValues={offerFeatures.internet.values}
            offerTotal={totalOffer.internet}
            offerName={offerFeatures.internet.name}
            offerUnit="GO"
          />
          <OffersSlide
            setTotalOffer={setTotalOffer}
            totalOffer={totalOffer}
            offerUnit="MIN"
            offerValues={offerFeatures.appelOredoo.values}
            offerTotal={totalOffer.appelOredoo}
            offerName={offerFeatures.appelOredoo.name}
          />
          <OffersSlide
            totalOffer={totalOffer}
            setTotalOffer={setTotalOffer}
            offerValues={offerFeatures.appelAutres.values}
            offerUnit="MIN"
            offerTotal={totalOffer.appelAutres}
            offerName={offerFeatures.appelAutres.name}
          />

          <OffersSlide
            setTotalOffer={setTotalOffer}
            totalOffer={totalOffer}
            offerValues={offerFeatures.sms.values}
            offerUnit="SMS"
            offerTotal={totalOffer.sms}
            offerName={offerFeatures.sms.name}
          />
          <div className=" w-full flex flex-col lg:flex-row items-center justify-between">
            <h3>Sélectionnez votre EXTRA</h3>
            <div className=" flex w-full flex-wrap lg:flex-nowrap  gap-4 ">
              {extra.map((Element, index) => (
                <Button
                  onClick={() => {
                    const newExtra = [...totalOffer.extra];
                    if (newExtra[index].prix === Element.prix) {
                      newExtra[index] = { offre: -1, prix: 0 };
                    } else {
                      newExtra[index] = Element;
                    }
                    setTotalOffer({ ...totalOffer, ...{ extra: newExtra } });
                  }}
                  key={`${Element.offre}-${index}`}
                  className={clsx(
                    " bg-transparent basis-[47%]  lg:basis-1/4 h-full text-black hover:bg-transparent hover:outline-2 hover:outline hover:outline-oredoo rounded-lg p-3 flex flex-col gap-3 shadow-md",
                    {
                      "outline-2 outline outline-oredoo ":
                        Element.offre === totalOffer.extra[index].offre,
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
                totalOffer.extra[0].prix +
                totalOffer.extra[1].prix +
                totalOffer.extra[2].prix +
                totalOffer.extra[3].prix +
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
