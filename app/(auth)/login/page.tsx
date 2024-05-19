"use client";

import Link from "next/link";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import useLogin from "@/hooks/useLogin";

import Heading from "@/components/auth/Heading";
import CustomLoginInput from "@/components/auth/CustomLoginInput";
import GoogleAndFacebookButtons from "@/components/auth/GoogleAndFacebookButtons";

export default function Login() {
  const { form, onSubmit } = useLogin();

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[500px] max-w-full border p-5 my-20 mx-auto rounded-md"
      >
        <Heading>Login</Heading>

        <CustomLoginInput
          control={form.control}
          label={"Email"}
          type={"email"}
          placeholder={"Email"}
          name="email"
        />

        <CustomLoginInput
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
          No account?{" "}
          <Link href="/register" className="text-primary">
            Create one
          </Link>
        </div>
      </form>
    </Form>
  );
}
