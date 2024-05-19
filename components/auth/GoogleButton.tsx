import Image from "next/image";
import { Button } from "../ui/button";

export default function GoogleButton() {
  return (
    <Button
      type="button"
      className="py-6 flex gap-3 !bg-[#EBEBEB] text-black flex-1"
    >
      <Image src="/google.png" alt="google logo" width={30} height={30} />
      Continue with google
    </Button>
  );
}
