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
import useRegister from "@/hooks/useRegister";

export default function Login() {
  const { form, onSubmit } = useRegister();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[500px] max-w-full border p-5 my-20 mx-auto rounded-md"
      >
        <h2 className="text-center text-primary text-3xl font-semibold mb-5">
          Register
        </h2>

        <div className="my-3">
          <FormField
            control={form.control}
            name="f_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="my-3">
          <FormField
            control={form.control}
            name="l_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="my-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="my-3">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full my-3 py-6">
          Continue
        </Button>

        <div className="text-center">Or</div>

        <div className="flex flex-row items-center justify-center py-3 gap-3">
          <Button className="py-6 flex gap-3 !bg-[#EBEBEB] text-black flex-1">
            <Image src="/google.png" alt="google logo" width={30} height={30} />
            Continue with google
          </Button>

          <Button className="py-6 flex gap-3 !bg-[#EBEBEB] text-black flex-1">
            <Image
              src="/facebook.png"
              alt="facebook logo"
              width={30}
              height={30}
            />
            Continue with facebook
          </Button>
        </div>

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

// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import Image from "next/image";
// import Link from "next/link";
// import { SubmitHandler, useForm } from "react-hook-form";

// interface Inputs {}

// export default function Register() {
//   const { register, handleSubmit } = useForm<Inputs>();

//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     console.log(data);
//   };

//   return (
//     <form className="w-[500px] max-w-full border p-5 my-20 mx-auto rounded-md">
//       <h2 className="text-center text-primary text-3xl font-semibold mb-5">
//         Register
//       </h2>

//       <div className="grid items-center gap-3 w-full my-5">
//         <Label htmlFor="f_name">First Name</Label>
//         <Input type="text" id="f_name" placeholder="first name" />
//       </div>

//       <div className="grid items-center gap-3 w-full my-5">
//         <Label htmlFor="l_name">Last Name</Label>
//         <Input type="text" id="l_name" placeholder="last name" />
//       </div>

//       <div className="grid items-center gap-3 w-full my-5">
//         <Label htmlFor="email">Email</Label>
//         <Input type="email" id="email" placeholder="Email" />
//       </div>

//       <div className="grid items-center gap-3 w-full my-5">
//         <Label htmlFor="password">Password</Label>
//         <Input type="password" id="password" placeholder="password" />
//       </div>

//       <div>
//         <Button type="submit" className="w-full mt-5 py-6">
//           Create your account
//         </Button>
//       </div>

//       <div className="flex flex-col items-center justify-center py-5 gap-5">
//         <div>Or</div>

//         <Button className="py-6 flex gap-3 w-full !bg-[#EBEBEB] text-black">
//           <Image src="/google.png" alt="google logo" width={30} height={30} />
//           Continue with google
//         </Button>

//         <Button className="py-6 flex gap-3 w-full !bg-[#EBEBEB] text-black">
//           <Image
//             src="/facebook.png"
//             alt="facebook logo"
//             width={30}
//             height={30}
//           />
//           Continue with facebook
//         </Button>
//       </div>

//       <div className="text-center">
//         Already have an account?{" "}
//         <Link href="/login" className="text-primary">
//           Sign in
//         </Link>
//       </div>
//     </form>
//   );
// }
