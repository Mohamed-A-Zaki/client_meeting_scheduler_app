import { Button } from "../ui/button";
import { Clock, Copy, MapPin, Settings } from "lucide-react";

export default function MeetingCard() {
  return (
    <div className="border-t-8 p-5 shadow-md rounded-lg">
      <div className="flex justify-end">
        <Settings size={20} className="cursor-pointer" />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-xl">60 Min Meeting</h3>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Clock /> 60 Min
          </div>
          <div className="flex gap-2">
            <MapPin /> Zoom meet
          </div>
        </div>
      </div>

      <hr className="my-3" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-primary cursor-pointer">
          <Copy size={17} /> Copy Link
        </div>
        <Button
          variant={"outline"}
          className="rounded-full text-primary border-primary"
        >
          Share
        </Button>
      </div>
    </div>
  );
}
