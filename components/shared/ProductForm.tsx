"use client";

import { useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  Form,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { SellFormType, sellFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { sellFormInitialValues } from "@/constants";
import { AvailabilityDropDown, ConditionDropDown, DropDown } from "./DropDown";
import { Button } from "../ui/button";
import UploadImage from "./UploadImage";
import { useState } from "react";
import { useUploadThing } from "@/lib/uploadthing";
import { createProduct } from "@/lib/actions/product.actions";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { useRouter } from "next/navigation";

type FormType = {
  type: "Create" | "Update";
  userId: string;
};

const ProductForm = ({ type, userId }: FormType) => {
  const router = useRouter();
  const initialValues = sellFormInitialValues;

  const form = useForm<SellFormType>({
    defaultValues: initialValues,
    resolver: zodResolver(sellFormSchema),
  });

  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("imageUploader");

  const onSubmit = async (values: SellFormType) => {
    let uploadedImage = values.imageUrl;
    if (files.length > 0) {
      const res = await startUpload(files);
      if (!res?.length) return;

      uploadedImage = res[0].url;
    }

    if (type === "Create") {
      try {
        const newProduct = await createProduct({
          userId,
          item: {
            ...values,
            imageUrl: uploadedImage,
          },
          path: "/",
        });

        if (newProduct) {
          form.reset();
          router.push("/profile");
        }
      } catch (error) {
        throw error;
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex-col flex items-center md:w-9/12 lg:w-8/12 bg-white shadow-md p-4 rounded-md"
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
                  <FormMessage />
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="my-2">
            <FormField
              name="dealer"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Dealer"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="my-2">
            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Phone"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage />
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
                    <UploadImage
                      onFieldChange={field.onChange}
                      imageUrl={field.value}
                      setFiles={setFiles}
                      files={files}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="my-2 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              <FormField
                name="category"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <DropDown
                          onFieldChange={field.onChange}
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                name="condition"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <ConditionDropDown
                          onFieldChange={field.onChange}
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                name="availability"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <AvailabilityDropDown
                          onFieldChange={field.onChange}
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="my-4">
            <FormField
              name="negotiable"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="negotiable">Negotiable</Label>
                      <Checkbox
                        id="negotiable"
                        onCheckedChange={field.onChange}
                        checked={field.value}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button
          className="btn"
          disabled={form.formState.isSubmitting}
          type="submit"
          size="lg"
        >
          {form.formState.isSubmitting ? "uploading..." : "Post"}
        </Button>
      </form>
    </Form>
  );
};

export default ProductForm;
