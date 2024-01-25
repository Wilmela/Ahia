"use server";

import { UserParams } from "@/type";
import connectToDB from "../database";
import User from "../database/model/user.model";
import { handleError } from "../utils";

export const createUser = async (user: UserParams) => {
  try {
    await connectToDB();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};
