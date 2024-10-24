"use client";
import Link from "next/link";
import homeburger from "@/assets/icons/homeburger.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import clsx from "clsx";
import { useState } from "react";

const links = [
  "Offres mobiles",
  "Internet",
  "Services",
  "Téléphones",
  "Assistance",
];
export default function ButtomNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className=" block relative z-30  lg:hidden">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="p-0"
          variant="link"
        >
          <Image src={homeburger} alt="" />
        </Button>
      </div>
      <div
        className={clsx(
          " absolute lg:static transition-transform duration-300  items-center lg:items-start justify-center lg:justify-start flex flex-col lg:flex-row gap-4 z-20 h-screen lg:h-fit left-0 top-0  p-2 lg:py-2 w-[80%] lg:w-full lg:bg-transparent bg-white ",
          {
            "-translate-x-full lg:translate-x-0": !isOpen,
          }
        )}
      >
        {links.map((Element) => (
          <Link className=" text-sm font-semibold" key={Element} href="">
            {Element}
          </Link>
        ))}
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={clsx(
          " h-screen absolute top-0 w-screen bg-black/25 lg:hidden",
          {
            hidden: !isOpen,
            block: isOpen,
          }
        )}
      ></div>
    </div>
  );
}
