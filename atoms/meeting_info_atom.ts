import { IMeetingInfo } from "@/types/meeting_info.types";
import { atom } from "@mongez/react-atom";

export const meeting_info_atom = atom<IMeetingInfo>({
  key: "meeting_info",
  default: {},
});
