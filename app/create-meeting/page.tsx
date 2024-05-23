import CreateMeetingForm from "@/components/create-meeting/CreateMeetingForm";

export default function CreateMeeting() {
  return (
    <div className="flex gap-3">
      <CreateMeetingForm />
      <div className="flex-1">test</div>
    </div>
  );
}
