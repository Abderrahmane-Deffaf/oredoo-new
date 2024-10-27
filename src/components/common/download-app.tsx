import appgallery from "@/assets/icons/appgallery.svg";
import appstore from "@/assets/icons/appstore.svg";
import googleplay from "@/assets/icons/googlePlay.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function DownloadApp({ className }: { className?: string }) {
  const apps = [
    {
      alt: "google paly",
      image: googleplay,
      url: "https://play.google.com/store/apps/details?id=com.algeria.selfcare.app.android&hl=fr",
    },
    {
      alt: "app store",
      image: appstore,
      url: "https://play.google.com/store/apps/details?id=com.algeria.selfcare.app.android&hl=fr",
    },
    { alt: "appgallery", image: appgallery, url: "" },
  ];
  return (
    <div className={cn(["flex gap-2", className])}>
      {apps.map((Element) => (
        <Link key={Element.alt} href={Element.url}>
          <Image src={Element.image} alt={Element.alt} />
        </Link>
      ))}
    </div>
  );
}
