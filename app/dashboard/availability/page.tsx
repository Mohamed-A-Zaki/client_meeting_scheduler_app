"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAvailability from "@/hooks/useAvailability";
import days from "@/utils/days";

export default function Availability() {
  const { form, onSubmit } = useAvailability();

  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-bold text-3xl border-b pb-5">Availability</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* available days */}
          <FormField
            control={form.control}
            name="available_days"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <h3 className="font-bold text-xl">Available days</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                  {days.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="available_days"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-medium text-lg">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* available times */}
          <div>
            <h3 className="font-bold text-xl mb-4">Available times</h3>
            <div className="flex gap-5">
              <FormField
                control={form.control}
                name="start_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">start date</FormLabel>
                    <FormControl>
                      <Input type="date" placeholder="start date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="end_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">end date</FormLabel>
                    <FormControl>
                      <Input type="date" placeholder="end date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
}
