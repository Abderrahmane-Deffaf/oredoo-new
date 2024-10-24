import Image from "next/image";
import logo from "@/assets/logo-ooredoo.png";

export default function Logo() {
  return (
    <div>
      <Image src={logo} alt="oredoo logo " />
    </div>
  );
}
