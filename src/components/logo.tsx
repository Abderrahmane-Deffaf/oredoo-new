import Image from "next/image";
import logo from "@/assets/logo-ooredoo.png";

export default function Logo() {
  return (
    <div className=" w-1/2 md:w-1/3 lg:w-1/5 ">
      <Image src={logo} alt="oredoo logo company " />
    </div>
  );
}
