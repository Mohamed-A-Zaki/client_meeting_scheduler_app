"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { BatteryFull, Calendar, Clock, Plus, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const links = [
    {
      id: 1,
      href: "meeting-type",
      text: "Meeting Type",
      Icon: BatteryFull,
    },
    {
      id: 2,
      href: "scheduled-meeting",
      text: "Scheduled Meeting",
      Icon: Calendar,
    },
    {
      id: 3,
      href: "availability",
      text: "Availability",
      Icon: Clock,
    },
    {
      id: 4,
      href: "settings",
      text: "Settings",
      Icon: Settings,
    },
  ];

  const path = usePathname();

  return (
    <div className="bg-slate-50 w-[300px] h-screen p-5">
      <Image
        src="/logo.svg"
        alt="logo"
        width={100}
        height={100}
        className="w-[200px] cursor-pointer block m-auto"
      />

      <Link href="/create-meeting">
        <Button className="bg-primary w-full rounded-full my-7">
          <Plus /> Create
        </Button>
      </Link>

      <div>
        {links.map(({ href, id, Icon, text }) => {
          return (
            <Link
              key={id}
              href={`/dashboard/${href}`}
              className={`flex gap-2 items-center p-3 rounded-md hover:bg-blue-100 ${
                path.endsWith(href) && "bg-blue-100 text-primary"
              }`}
            >
              <Icon /> {text}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
