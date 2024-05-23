import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useCreateMeetingForm() {
  const FormSchema = z.object({
    event_name: z.string().min(3),
    duration: z.enum(["30", "45", "60"]),
    location: z.enum(["zoom", "meet", "phone", "other"]),
    url: z.string().url(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      event_name: "",
      duration: undefined,
      location: undefined,
      url: "",
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
