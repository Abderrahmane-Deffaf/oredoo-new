import Image from "next/image";
import affaire_phone from "@/assets/affaire.png";
import glow from "@/assets/icons/glow.svg";
import stairs from "@/assets/stairs.png";
export default function ServiceAffaire() {
  return (
    <div className="relative !mt-0 py-16 overflow-hidden">
      <div className=" relative z-10 flex lg:flex-row flex-col items-center gap-4 wrapper">
        <div className=" flex order-2 lg:order-1 justify-center items-center  basis-full lg:basis-1/2">
          <Image src={affaire_phone} alt="" />
        </div>
        <div className="basis-full text-center lg:text-left  lg:basis-1/2  order-1 lg:order-2 space-y-4">
          <h2>Service l'affaire</h2>
          <h3>
            Profitez de réductions exceptionnelles allant jusqu'à 70% dans la
            rubrique « L'AFFAIRE »
          </h3>
          <p className=" font-bold">
            Cliquez sur la rubrique « L'AFFAIRE » dans les images défilantes
          </p>
          <p>
            et profitez des réductions offertes sur les catégories
            (Restauration, Bien-être, Services, Santé...)
          </p>
        </div>
      </div>
      <Image
        className=" -rotate-[125deg] absolute -left-[15rem] -top-[13rem] lg:-left-[35rem] lg:-top-full"
        src={glow}
        alt=""
      />
      <Image
        className=" lg:block hidden absolute right-0 bottom-0"
        src={stairs}
        alt=""
      />
    </div>
  );
}
