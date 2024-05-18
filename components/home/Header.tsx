import Image from "next/image";
import { Button } from "../ui/button";

export default function Header() {
  const list = [
    { id: 1, name: "Product" },
    { id: 2, name: "Pricing" },
    { id: 3, name: "Contact us" },
    { id: 4, name: "About Us" },
  ];

  return (
    <div className="flex items-center justify-between p-5 border-b">
      <Image
        src="logo.svg"
        alt="logo"
        width={100}
        height={100}
        className="w-[200px] cursor-pointer"
      />

      <ul className="hidden md:flex items-center gap-[30px]">
        {list.map(({ id, name }) => {
          return (
            <li
              key={id}
              className="cursor-pointer font-semibold hover:text-primary"
            >
              {name}
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-6">
        <Button variant={"ghost"}>Login</Button>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}
