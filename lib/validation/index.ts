import * as z from "zod";

export const sellFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  imageUrl: z.string().url(),
  price: z.string().min(1, { message: "Must be at least 1 character long" }),
  condition: z.string().default("New"),
  availability: z.string().default("Available"),
  description: z
    .string()
    .min(5, { message: "Should be at least 5 character long" }),
  dealer: z.string().min(4, { message: "Should be at least 4 character long" }),
  phone: z
    .string()
    .min(11, { message: "Should be at least 11 character long" })
    .max(14, { message: "Should not be more than 14 character" }),
  category: z.string().min(4, { message: "At least 4 character long" }),
  location: z
    .string()
    .min(5, { message: "Should be at least 5 character long" }),

  negotiable: z.boolean().default(false),
});
export type SellFormType = z.infer<typeof sellFormSchema>;
