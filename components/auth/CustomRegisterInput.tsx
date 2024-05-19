import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { HTMLInputTypeAttribute } from "react";
import { IRegisterFormValues } from "@/types/auth.types";

type Props = {
  control: Control<IRegisterFormValues> | undefined;
  label: string;
  type: HTMLInputTypeAttribute | undefined;
  placeholder: string;
  name: keyof IRegisterFormValues;
};

export default function CustomRegisterInput({
  control,
  label,
  type,
  placeholder,
  name,
}: Props) {
  return (
    <div className="my-3">
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input type={type} placeholder={placeholder} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
