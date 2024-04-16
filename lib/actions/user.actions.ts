"use server";

import { UpdateUserParams, UserParams } from "@/type";
import connectToDB from "../database";
import User from "../database/model/user.model";
import { handleError } from "../utils";
import Product from "../database/model/product.model";

export const createUser = async (user: UserParams) => {
  try {
    await connectToDB();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};
export const findUserById = async (userId: string) => {
  try {
    await connectToDB();

    const user = await User.findById(userId).populate({
      path: "products",
      model: Product,
    });
    if (!user) throw new Error("User not found.");
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const updateUser = async (clerkId: string, user: UpdateUserParams) => {
  try {
    await connectToDB();

    const updatedUser = await User.findByIdAndUpdate(
      clerkId,
      {
        $set: {
          ...user,
        },
      },
      { new: true }
    );
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const deleteUser = async (clerkId: string) => {
  try {
    await connectToDB();

    const user = await User.findOne({ clerkId });
    await User.deleteOne(user);
  } catch (error) {
    return { error: handleError(error) };
  }
};
