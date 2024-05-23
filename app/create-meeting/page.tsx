import CreateMeetingForm from "@/components/create-meeting/CreateMeetingForm";
import MeetingPreview from "@/components/create-meeting/MeetingPreview";

export default function CreateMeeting() {
  return (
    <div className="flex flex-col md:flex-row">
      <CreateMeetingForm />
      <MeetingPreview />
    </div>
  );
}
