"use client";

import Link from "next/link";
import Image from "next/image";

import { ChevronLeft } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import ThemeOptions from "./ThemeOptions";
import locations from "@/utils/locations";
import useCreateMeetingForm from "@/hooks/useCreateMeetingForm";

export default function CreateMeetingForm() {
  const { form, onSubmit } = useCreateMeetingForm();

  return (
    <div className="shadow-md w-[500px] min-h-screen p-8">
      <Link href="/dashboard" className="flex gap-2 items-center">
        <ChevronLeft />
        cancel
      </Link>

      <h2 className="font-bold text-2xl border-b py-5">Create new Event</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-5">
          <FormField
            control={form.control}
            name="event_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name *</FormLabel>
                <FormControl>
                  <Input placeholder="name of your meeting event" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="30">30 min</SelectItem>
                    <SelectItem value="45">45 min</SelectItem>
                    <SelectItem value="60">60 min</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Location *</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-row"
                  >
                    {locations.map(({ id, src, value }) => {
                      return (
                        <FormItem className="flex items-center flex-1" key={id}>
                          <FormControl className="hidden">
                            <RadioGroupItem value={value} />
                          </FormControl>
                          <FormLabel
                            className={`font-normal border w-full rounded-md p-3 flex flex-col items-center cursor-pointer hover:bg-blue-100 hover:border-primary
                            ${
                              form.getValues().location === value &&
                              "border-primary bg-blue-100"
                            }
                            `}
                          >
                            <Image
                              src={src}
                              alt="zoom"
                              width={30}
                              height={30}
                            />
                            {value}
                          </FormLabel>
                        </FormItem>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.getValues().location && (
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>add {form.watch("location")} url</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <ThemeOptions />

          <Button type="submit" className="bg-primary w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
