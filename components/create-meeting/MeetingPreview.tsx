"use client";

import Image from "next/image";
import MeetingInfo from "./MeetingInfo";
import MeetingCalender from "./MeetingCalender";
import MeetingSlots from "./MeetingSlots";
import { theme_atom } from "@/atoms/theme_atom";

export default function MeetingPreview() {
  const theme = theme_atom.useValue();

  return (
    <div
      className="flex-1 border-t-8 m-6 p-6 shadow-lg rounded-lg"
      style={{ borderColor: theme }}
    >
      <Image
        src="logo.svg"
        alt="logo"
        width={100}
        height={100}
        className="w-[200px] cursor-pointer"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <MeetingInfo />
        <MeetingCalender />
        <MeetingSlots />
      </div>
    </div>
  );
}
