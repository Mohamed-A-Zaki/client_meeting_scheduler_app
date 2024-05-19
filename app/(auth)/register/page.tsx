"use client";

import Link from "next/link";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import useRegister from "@/hooks/useRegister";

import Heading from "@/components/auth/Heading";
import CustomRegisterInput from "@/components/auth/CustomRegisterInput";
import GoogleAndFacebookButtons from "@/components/auth/GoogleAndFacebookButtons";

export default function Login() {
  const { form, onSubmit } = useRegister();

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[500px] max-w-full border p-5 my-20 mx-auto rounded-md"
      >
        <Heading>Create account</Heading>

        <CustomRegisterInput
          control={form.control}
          label={"First Name"}
          type={"text"}
          placeholder={"first name"}
          name="f_name"
        />

        <CustomRegisterInput
          control={form.control}
          label={"Last Name"}
          type={"text"}
          placeholder={"last name"}
          name="l_name"
        />

        <CustomRegisterInput
          control={form.control}
          label={"Email"}
          type={"email"}
          placeholder={"Email"}
          name="email"
        />

        <CustomRegisterInput
          control={form.control}
          label={"Password"}
          type={"password"}
          placeholder={"Password"}
          name="password"
        />

        <Button type="submit" className="w-full my-3 py-6">
          Continue
        </Button>

        <div className="text-center">Or</div>

        <GoogleAndFacebookButtons />

        <div className="text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-primary">
            Sign in
          </Link>
        </div>
      </form>
    </Form>
  );
}
