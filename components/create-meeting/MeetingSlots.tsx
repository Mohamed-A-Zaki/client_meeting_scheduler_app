import { meeting_info_atom } from "@/atoms/meeting_info_atom";

const createTimeSlot = (interval: number) => {
  const startTime = 8 * 60; // 8 AM in minutes
  const endTime = 22 * 60; // 10 PM in minutes
  const totalSlots = (endTime - startTime) / interval;

  const slots = Array.from({ length: totalSlots }, (_, i) => {
    const totalMinutes = startTime + i * interval;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const formattedHours = hours > 12 ? hours - 12 : hours; // Convert to 12-hour format
    const period = hours >= 12 ? "PM" : "AM";
    return `${String(formattedHours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")} ${period}`;
  });

  return slots;
};

export default function MeetingSlots() {
  const { duration } = meeting_info_atom.useValue();

  return (
    <div className="max-h-[500px] overflow-auto p-3">
      {createTimeSlot(+(duration || 60)).map((ele, indx) => {
        return (
          <div
            key={indx}
            className="w-full border border-primary text-primary rounded-md p-2 text-center my-2 cursor-pointer hover:bg-primary hover:text-white"
          >
            {ele}
          </div>
        );
      })}
    </div>
  );
}
