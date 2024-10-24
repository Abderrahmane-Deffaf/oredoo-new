import snapbg from "@/assets/snapbg.png";
import snapchat1 from "@/assets/snapchat1.png";
// import snapchat2 from "@/assets/snapchat2.png";
// import snapchat3 from "@/assets/snapchat3.png";
// import snapchat from "@/assets/icons/snapchat.svg";
// import snapchatCheck from "@/assets/icons/snapchatCheck.svg";
// import snapchatimo from "@/assets/icons/snapchatimo.svg";
import Image from "next/image";

export default function Snapchat() {
  return (
    <div className=" relative flex items-center py-[4rem] h-full overflow-hidden ">
      <div className=" relative flex items-center gap-4 z-10 wrapper">
        <div className=" basis-1/3 text-white space-y-4">
          <h2>Snapchat gratuit tous les jours</h2>
          <p>
            En plus des avantages précédents, profitez de Snapchat gratuit tous
            les jours sur l’application My Ooredoo
          </p>
          <p>Cliquez sur le carousel dans les images défilantes</p>
        </div>
        <div className=" basis-1/3">
          <Image src={snapchat1} alt="" />{" "}
        </div>
      </div>
      <Image
        className=" top-0  object-cover absolute w-full"
        src={snapbg}
        alt=""
      />
    </div>
  );
}
