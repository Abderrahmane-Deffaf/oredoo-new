import presentationImage from "@/assets/presentation.png";
import Image from "next/image";

import Link from "next/link";
import DownloadApp from "../common/download-app";

export default function Presentation() {
  return (
    <div>
      <div className="wrapper flex lg:flex-row flex-col items-center  ">
        <div className=" basis-[48%]">
          <Image src={presentationImage} alt="presentaiton image" />
        </div>
        <div className=" space-y-4 lg:text-left text-center basis-[48%]">
          <h3>Présentation</h3>
          <p className="  font-semibold">
            N'YOOZ est une offre prépayée sans engagement avec plein d'avantages
            tels que le choix du numéro de téléphone, la personnalisation du
            forfait , la gratuité de Snapchat et le bonus internet offert suite
            au parrainage d'un ami sur l'application My Ooredoo
          </p>
          <p className=" font-semibold">Téléchargez l'application My Ooredoo</p>
          <DownloadApp className=" lg:flex-row flex-col items-center lg:items-start" />
        </div>
      </div>
    </div>
  );
}
