import Image from "next/image";
import { Button } from "../ui/button";
import GoogleButton from "./GoogleButton";
import FacebookButton from "./FacebookButton";

export default function GoogleAndFacebookButtons() {
  return (
    <div className="flex flex-row items-center justify-center py-3 gap-3">
      <GoogleButton />
      <FacebookButton />
    </div>
  );
}
