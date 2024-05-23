"use client";

import { useState } from "react";
import { Calendar } from "../ui/calendar";

export default function MeetingCalender() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div>
      <h2 className="font-semibold text-xl mb-5">Select Date & Time</h2>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border w-fit m-auto"
        disabled={(date) => {
          return date < new Date();
        }}
      />
    </div>
  );
}
