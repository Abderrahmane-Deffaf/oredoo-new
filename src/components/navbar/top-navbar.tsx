import Link from "next/link";
import Logo from "../logo";
import clsx from "clsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = ["Particulier", "Entreprise", "Tout sur Ooredoo"];
const otherLinks = ["My Ooredoo", "E-Storm", "Partenaires"];
const allLinks = [...links, ...otherLinks];
export default function TopNavBar() {
  return (
    <div className=" flex items-center w-full justify-between">
      <Logo />
      <div className=" lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className=" font-bold underline ">
            {allLinks[0]}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {allLinks.map((element) => (
              <DropdownMenuItem key={element}>
                <Link href="">{element}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className=" hidden lg:block space-x-4">
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
      <div className=" hidden lg:block space-x-4">
        {otherLinks.map((Element, index) => (
          <Link className={""} href="" key={Element}>
            {Element}
          </Link>
        ))}
      </div>
    </div>
  );
}
