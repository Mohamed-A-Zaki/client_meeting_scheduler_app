import { Clock, MapPin } from "lucide-react";

export default function MeetingInfo() {
  return (
    <div className="xl:border-r">
      <div className="my-5 flex flex-col gap-2">
        <h2 className="font-semibold text-xl">Business Name</h2>
        <h3 className="font-bold text-3xl">Meeting Name</h3>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Clock /> 30 Min
        </div>
        <div className="flex items-center gap-3">
          <MapPin /> Meeting
        </div>
      </div>
    </div>
  );
}
