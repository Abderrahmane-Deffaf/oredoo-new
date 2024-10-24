import Image from "next/image";
import logo from "@/assets/logo-wide.svg";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import DownloadApp from "../common/download-app";

export default function Footer() {
  const content = [
    {
      title: "Support",
      values: ["Contactez-nous", "Support", "Trouvez-nous", "La Gold Jdida"],
    },

    {
      title: "Tout sur Ooredoo",
      values: [
        "À propos",
        "Devenez notre fournisseur (Inscrivez-vous ici)",
        "Catalogue d interconnexion 2023-2024",
      ],
    },

    {
      title: "Politique et qualité",
      values: [
        "Mentions légales",
        "Politique qualité",
        "Whistleblowing",
        "ISO 9001",
        "ISO-CEI 27001",
        "Données à caractère personnel",
        "Politique générale de protection des données",
      ],
    },
  ];
  return (
    <div className=" !mt-0 py-16 bg-[#e0e0e0]">
      <div className="wrapper flex items-center gap-8 ">
        <div className=" space-y-8 basis-[30%]">
          <div>
            <Image src={logo} alt="" />
          </div>
          <div className=" space-y-4">
            <Label className="font-bold text-lg" htmlFor="email">
              Abonnez-vous à notre newsletter
            </Label>
            <div className=" h-[3rem] flex bg-white rounded-[40px] overflow-hidden">
              <Input
                className=" "
                id="email"
                placeholder="votre address mail..."
                name="email"
                type="email"
              />
              <Button className=" h-full font-semibold bg-oredoo rounded-none hover:bg-oredoo/80">
                S abonner
              </Button>
            </div>
          </div>
        </div>
        <div className=" space-y-12 basis-[70%]">
          <div className=" flex gap-2">
            {content.map((Element) => (
              <ul className=" basis-1/3 space-y-6" key={Element.title}>
                <p className=" text-lg font-semibold">{Element.title}</p>
                <div className=" space-y-3">
                  {Element.values.map((Element) => (
                    <li className=" font-medium text-gray-700" key={Element}>
                      <Link href="">{Element}</Link>
                    </li>
                  ))}
                </div>
              </ul>
            ))}
          </div>
          <div className=" flex justify-between">
            <h3>TÉLÉCHARGER L APP</h3>
            <div className=" basis-1/2">
              <DownloadApp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
