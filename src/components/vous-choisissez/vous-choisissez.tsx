import composez from "@/assets/composez.png";
import inserez from "@/assets/inserez.png";
import premierapp from "@/assets/premierapp.png";
import profitez from "@/assets/profitez.png";
import Image from "next/image";
import NumberOrder from "../common/number-order";
import DownloadApp from "../common/download-app";

export default function VousChoisissez() {
  return (
    <div className=" bg-[#F7F7F7] py-12  ">
      <div className="wrapper space-y-12">
        <h2 className=" text-center">
          Sur N'YOOZ <br /> c'est vous qui choisissez!
        </h2>
        <div className=" flex flex-wrap gap-y-16 justify-between">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-0 basis-full lg:basis-[48%]">
            <div className="justify-center lg:justify-start flex basis-full lg:basis-[48%]">
              <Image className=" w-1/2 lg:w-full" src={premierapp} alt="" />
            </div>
            <div className=" space-y-5 basis-full items-center lg:items-start text-center lg:text-left lg:basis-[48%]">
              <NumberOrder number={1} />
              <p className=" font-semibold">Composez votre numéro mobile</p>
              <DownloadApp className=" justify-center" />
            </div>
          </div>
          <div className="flex basis-full flex-wrap justify-center gap-4 lg:gap-0 lg:basis-[48%]">
            <div className=" order-2 lg:order-1 lg:text-right space-y-5 basis-full text-center lg:basis-[48%]">
              <NumberOrder number={2} />
              <p className=" font-semibold">Composez votre numéro mobile</p>
            </div>
            <div className="basis-full justify-center lg:justify-start flex order-1 lg:order-2 lg:basis-[48%]">
              <Image className=" w-1/2 lg:w-full" src={composez} alt="" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-0  basis-full lg:basis-[48%]">
            <div className="justify-center lg:justify-start flex basis-full lg:basis-[48%]">
              <Image className=" w-1/2 lg:w-full" src={inserez} alt="" />
            </div>
            <div className=" space-y-5 basis-full items-center lg:items-start text-center lg:text-left lg:basis-[48%]">
              <NumberOrder number={3} />
              <p className=" font-semibold">Insérez vos informations</p>
            </div>
          </div>
          <div className="flex basis-full flex-wrap justify-center gap-4 lg:gap-0 lg:basis-[48%]">
            <div className=" order-2 lg:order-1 lg:text-right space-y-5 basis-full text-center lg:basis-[48%]">
              <NumberOrder number={4} />
              <p className=" font-semibold">
                Profitez d'un volume internet doublé en récupérant votre SIM
              </p>
            </div>
            <div className="basis-full order-1 h-fit lg:order-2 justify-center lg:justify-start flex lg:basis-[48%]">
              <Image className=" w-1/2 lg:w-full" src={profitez} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
