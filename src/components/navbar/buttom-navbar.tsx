import Link from "next/link";

const links = [
  "Offres mobiles",
  "Internet",
  "Services",
  "Téléphones",
  "Assistance",
];
export default function ButtomNavBar() {
  return (
    <div className=" space-x-4 ">
      {links.map((Element) => (
        <Link className=" text-sm font-semibold" key={Element} href="">
          {Element}
        </Link>
      ))}
    </div>
  );
}
