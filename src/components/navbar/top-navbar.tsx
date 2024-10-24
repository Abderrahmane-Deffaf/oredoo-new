import Link from "next/link";
import Logo from "../logo";
import clsx from "clsx";

const links = ["Particulier", "Entreprise", "Tout sur Ooredoo"];
const otherLinks = ["My Ooredoo", "E-Storm", "Partenaires"];
export default function TopNavBar() {
  return (
    <div className=" flex items-center justify-between">
      <Logo />
      <div className=" space-x-4">
        {links.map((Element, index) => (
          <Link
            className={clsx("", {
              "underline font-semibold": index === 0,
            })}
            href=""
            key={Element}
          >
            {Element}
          </Link>
        ))}
      </div>
      <div className=" space-x-4">
        {otherLinks.map((Element, index) => (
          <Link className={""} href="" key={Element}>
            {Element}
          </Link>
        ))}
      </div>
    </div>
  );
}
