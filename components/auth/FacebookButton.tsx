import Image from "next/image";
import { Button } from "../ui/button";

export default function FacebookButton() {
  return (
    <Button
      type="button"
      className="py-6 flex gap-3 !bg-[#EBEBEB] text-black flex-1"
    >
      <Image src="/facebook.png" alt="facebook logo" width={30} height={30} />
      Continue with facebook
    </Button>
  );
}
