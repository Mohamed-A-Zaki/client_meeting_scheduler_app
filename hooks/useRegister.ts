import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function useRegister() {
  const FormSchema = z.object({
    f_name: z.string().min(2),
    l_name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(5).max(30),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      f_name: "",
      l_name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return {
    form,
    onSubmit,
  };
}
