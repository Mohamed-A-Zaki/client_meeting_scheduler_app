export interface IMeetingInfo {
  event_name: string;
  duration: "30" | "45" | "60";
  location: "zoom" | "meet" | "phone" | "other";
  url: string;
}
