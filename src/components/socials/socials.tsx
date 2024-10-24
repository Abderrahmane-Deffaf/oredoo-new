import facebook from "@/assets/socials/facebook.png";
import instagram from "@/assets/socials/instagram.png";
import linkedin from "@/assets/socials/linkedin.png";
import snapchat from "@/assets/socials/snapchat.png";
import tiktok from "@/assets/socials/tiktok.png";
import twitter from "@/assets/socials/twitter.png";
import youtube from "@/assets/socials/youtube.png";
import Image from "next/image";
import Link from "next/link";

export default function Socials() {
  return (
    <div className=" !mt-0 bg-[#f1c400] py-16">
      <div className="wrapper flex flex-col items-center gap-8">
        <h2>Restez connectés</h2>
        <div className=" flex space-x-6">
          <Link href="">
            <Image src={facebook} alt="" />
          </Link>
          <Link href="">
            <Image src={instagram} alt="" />
          </Link>
          <Link href="">
            <Image src={linkedin} alt="" />
          </Link>
          <Link href="">
            <Image src={snapchat} alt="" />
          </Link>
          <Link href="">
            <Image src={tiktok} alt="" />
          </Link>
          <Link href="">
            <Image src={twitter} alt="" />
          </Link>
          <Link href="">
            <Image src={youtube} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
