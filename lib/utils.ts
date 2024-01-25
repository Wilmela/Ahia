import { type ClassValue, clsx } from "clsx";
import { error } from "console";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleError = (error: any) => {
  if (typeof error === "string") return new Error(error);

  const err = JSON.stringify(error);
  return new Error(err);
};
