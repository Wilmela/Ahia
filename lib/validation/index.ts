import * as z from "zod";

export const sellFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  imageUrl: z.string().url(),
  price: z.string(),
  condition: z.string(),
  description: z.string(),
  dealer: z.string(),
  phone: z.string(),
  category: z.string(),
  location: z.string(),
  negotiable: z.boolean(),
});
export type SellFormType = z.infer<typeof sellFormSchema >
