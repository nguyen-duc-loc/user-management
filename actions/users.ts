"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { UserSchema } from "@/lib/validation";

export const createUser = async (
  data: z.infer<typeof UserSchema>
): Promise<{ success: boolean; data: User | null }> => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/users`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  const result: { success: boolean; data: User | null } = await response.json();

  if (result.success) {
    revalidatePath("/");
  }

  return result;
};

export const updateUserById = async (
  id: number,
  data: z.infer<typeof UserSchema>
): Promise<{ success: boolean; data: User | null }> => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

  const result: { success: boolean; data: User | null } = await response.json();

  if (result.success) {
    revalidatePath(`/user/${id}`);
  }

  return result;
};

export const deleteUserById = async (
  id: number
): Promise<{ success: boolean }> => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/users/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    return {
      success: false,
    };
  } else {
    revalidatePath("/");
  }

  return { success: response.status === 204 };
};
