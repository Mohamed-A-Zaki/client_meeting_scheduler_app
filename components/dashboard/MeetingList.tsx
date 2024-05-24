import MeetingCard from "./MeetingCard";

export default function MeetingList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {[...new Array(5)].map((ele, indx) => {
        return <MeetingCard key={indx} />;
      })}
    </div>
  );
}
