"use server";

import { CategoryParams, UpdateUserParams, UserParams } from "@/type";
import connectToDB from "../database";
import User from "../database/model/user.model";
import { handleError } from "../utils";
import Category from "../database/model/category.model";

export const createCategory = async (cat: CategoryParams) => {
  try {
    await connectToDB();

    const newUser = await Category.create(cat);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const updateUser = async (id: string, cat: CategoryParams) => {
  try {
    await connectToDB();

    const updatedCat = await Category.findByIdAndUpdate(
      id,
      {
        $set: {
          ...cat,
        },
      },
      { new: true }
    );
    return JSON.parse(JSON.stringify(updatedCat));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const deleteCategory = async (id: string) => {
  try {
    await connectToDB();

    const user = await Category.findByIdAndDelete(id);
  } catch (error) {
    return { error: handleError(error) };
  }
};
