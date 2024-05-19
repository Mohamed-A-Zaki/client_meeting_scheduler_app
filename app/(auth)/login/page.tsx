"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import useLogin from "@/hooks/useLogin";
import GoogleAndFacebookButtons from "@/components/auth/GoogleAndFacebookButtons";

export default function Login() {
  const { form, onSubmit } = useLogin();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[500px] max-w-full border p-5 my-20 mx-auto rounded-md"
      >
        <h2 className="text-center text-primary text-3xl font-semibold mb-5">
          Login
        </h2>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
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