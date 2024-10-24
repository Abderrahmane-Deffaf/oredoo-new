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
          <div className="flex basis-[48%]">
            <div className=" basis-[48%]">
              <Image src={premierapp} alt="" />
            </div>
            <div className=" space-y-5 basis-[48%]">
              <NumberOrder number={1} />
              <p className=" font-semibold">Composez votre numéro mobile</p>
              <DownloadApp />
            </div>
          </div>
          <div className="flex basis-[48%]">
            <div className=" text-right space-y-5 basis-[48%]">
              <NumberOrder number={2} />
              <p className=" font-semibold">Composez votre numéro mobile</p>
            </div>
            <div className=" basis-[48%]">
              <Image src={composez} alt="" />
            </div>
          </div>
          <div className="flex basis-[48%]">
            <div className=" basis-[48%]">
              <Image src={inserez} alt="" />
            </div>
            <div className=" space-y-5 basis-[48%]">
              <NumberOrder number={3} />
              <p className=" font-semibold">Insérez vos informations</p>
            </div>
          </div>
          <div className="flex text-right basis-[48%]">
            <div className=" space-y-5 basis-[48%]">
              <NumberOrder number={4} />
              <p className=" font-semibold">
                Profitez d'un volume internet doublé en récupérant votre SIM
              </p>
            </div>
            <div className=" basis-[48%]">
              <Image src={profitez} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
