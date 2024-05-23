import Image from "next/image";
import MeetingInfo from "./MeetingInfo";
import MeetingCalender from "./MeetingCalender";
import MeetingSlots from "./MeetingSlots";

export default function MeetingPreview() {
  return (
    <div className="flex-1 border-t-8 border-gray-200 m-6 p-6 shadow-lg rounded-lg">
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
