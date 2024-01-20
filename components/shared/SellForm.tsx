"use client";

import { useForm } from "react-hook-form";
import { FormControl, FormField, FormItem, Form } from "../ui/form";
import { Input } from "../ui/input";
import { SellFormType, sellFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { sellFormInitialValues } from "@/constants";
import DropDown from "./DropDown";
import { Button } from "../ui/button";
import UploadImage from "./UploadImage";

type FormType = {
  type: "Create" | "Update";
};

const SellForm = ({ type }: FormType) => {
  const initialValues = sellFormInitialValues;

  const form = useForm<SellFormType>({
    defaultValues: initialValues,
    resolver: zodResolver(sellFormSchema),
  });

  const onSubmit = async (values: SellFormType) => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex-col flex items-center md:w-9/12 lg:w-7/12 bg-white shadow-md p-4 rounded-md"
      >
        <div className="w-full">
          <div className="my-2">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Name of item"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="my-2">
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Description"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="my-2">
            <FormField
              name="imageUrl"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <UploadImage onFieldChange={field.onChange} value={field.value} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-between">
            <div className="my-2">
              <FormField
                name="category"
                control={form.control}
                render={({ field }) => {
                  console.log(field.value);

                  return (
                    <FormItem>
                      <FormControl>
                        <DropDown onFieldChange={field.onChange} value={field.value} />

                      </FormControl>
                    </FormItem>
                  );
                }}
              />
            </div>

            <div className="my-2">
              <FormField
                name="price"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Price"
                        {...field}
                        className="input-field"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="my-2">
            <FormField
              name="location"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Location"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="my-2">
            <FormField
              name="condition"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Condition : New or Used"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button className="btn" size="lg">
          Post
        </Button>
      </form>
    </Form>
  );
};

export default SellForm;
