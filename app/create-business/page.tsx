"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function CreateBusiness() {
  const [businessName, setBusinessName] = useState("");

  return (
    <div className="px-10 w-[600px] max-w-full mx-auto my-20 flex flex-col gap-5">
      <Image
        src="logo.svg"
        alt="logo"
        width={100}
        height={100}
        className="w-[200px] cursor-pointer m-auto"
      />

      <h2 className="text-3xl font-semibold text-center">
        Waht should we call your business?
      </h2>

      <p className="text-sm text-slate-500 text-center">
        you can always change this later from settings
      </p>

      <div>
        <label htmlFor="business-name" className="text-slate-500 text-sm">Team name</label>
        <Input
          type="text"
          id="business-name"
          placeholder="Business Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </div>

      <Button onClick={() => {}} disabled={!businessName}>
        Create Business
      </Button>
    </div>
  );
}
