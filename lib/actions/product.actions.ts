"use server";

import { ProductParams } from "@/type";
import connectToDB from "../database";
import Product from "../database/model/product.model";
import { revalidatePath } from "next/cache";
import { handleError } from "../utils";
import { sellFormSchema } from "../validation";

export const createProduct = async ({ userId, item, path }: ProductParams) => {
  const validProduct = sellFormSchema.safeParse(item);
  if (!validProduct.success) throw new Error("Could not parse product.");

  try {
    await connectToDB();

    // const owner = await User.findById(userId);

    const newProduct = await Product.create({ ...item, owner: userId });

    revalidatePath(path);
    return JSON.parse(JSON.stringify(newProduct));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const findProductById = async (id: string) => {
  try {
    await connectToDB();

    const product = await Product.findById(id);
    if (!product) throw new Error(`Product with id ${id} does not exist`);
    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const findAllProducts = async () => {
  try {
    await connectToDB();

    const products = await Product.find().sort({ createdAt: "desc" });
    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const findNewArrivals = async (limit: number) => {
  try {
    await connectToDB();

    const newArrivals = await Product.find()
      .sort({ createdAt: "desc" })
      .limit(limit);
    return JSON.parse(JSON.stringify(newArrivals));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const updateProduct = async (
  id: string,
  product: Omit<ProductParams, "_id">,
  path: string
) => {
  try {
    await connectToDB();

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: { ...product },
      },
      { new: true }
    );
    revalidatePath(path);
    return JSON.parse(JSON.stringify(updatedProduct));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const deleteProduct = async (id: string, path: string) => {
  try {
    await connectToDB();

    const updatedProduct = await Product.findByIdAndDelete(id);
    revalidatePath(path);
    return JSON.parse(JSON.stringify(updatedProduct));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const findProductsByCategory = async (cat: string, limit: number) => {
  try {
    await connectToDB();

    const product = await Product.find({ category: cat }).limit(limit);
    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    return { error: handleError(error) };
  }
};
