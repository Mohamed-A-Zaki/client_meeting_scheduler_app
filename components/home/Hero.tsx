import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="text-center py-20 max-w-3xl m-auto p-5">
      <div className="hidden lg:block">
        <Image
          src="/profile1.webp"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute right-36"
          alt="profile1"
        />
        <Image
          src="/profile3.webp"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute top-48 left-16"
          alt="profile3"
        />
        <Image
          src="/profile2.webp"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute bottom-20 left-36"
          alt="profile2"
        />
        <Image
          src="/profile4.webp"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute right-16 bottom-32"
          alt="profile4"
        />
      </div>

      <h1 className="text-6xl font-bold text-slate-700">
        Easy scheduling ahead
      </h1>

      <p className="text-slate-500 my-7 text-lg">
        Scheduly is your scheduling automation platform for eliminating the
        back-and-forth emails to find the perfect time — and so much more.
      </p>

      <p className="text-sm">Sign Up free with Google and Facebook</p>

      <div className="flex flex-col md:flex-row items-center justify-center py-5 gap-5 border-b">
        <Button className="py-6 flex gap-3">
          <Image src="/google.png" alt="google logo" width={30} height={30} />
          sign up with google
        </Button>
        <Button className="py-6 flex gap-3">
          <Image
            src="/facebook.png"
            alt="facebook logo"
            width={30}
            height={30}
          />
          sign up with facebook
        </Button>
      </div>

      <div className="my-5">
        <Link href="/register" className="text-primary cursor-pointer">
          sign up free with email.
        </Link>{" "}
        no credit card required
      </div>
    </div>
  );
}
