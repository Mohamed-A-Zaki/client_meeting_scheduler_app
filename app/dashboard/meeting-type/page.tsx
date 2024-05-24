import MeetingList from "@/components/dashboard/MeetingList";
import { Input } from "@/components/ui/input";

export default function MeetingType() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-3xl">Meeting Event Type</h2>
        <Input type="search" placeholder="Search" className="max-w-xs" />
        <hr />
      </div>

      <MeetingList />
    </div>
  );
}
