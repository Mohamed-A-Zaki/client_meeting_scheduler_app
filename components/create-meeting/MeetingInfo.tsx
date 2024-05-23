"use client";

import { meeting_info_atom } from "@/atoms/meeting_info_atom";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function MeetingInfo() {
  const { event_name, duration, location, url } = meeting_info_atom.useValue();

  return (
    <div className="xl:border-r">
      <div className="my-5 flex flex-col gap-2">
        <h2 className="font-semibold text-xl">Business Name</h2>
        <h3 className="font-bold text-3xl">{event_name}</h3>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Clock /> {duration} Min
        </div>
        <div className="flex items-center gap-3">
          <MapPin /> {location} Meeting
        </div>
        <Link href={url || ""} className="text-primary">
          {url}
        </Link>
      </div>
    </div>
  );
}
