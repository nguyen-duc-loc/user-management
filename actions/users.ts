"use server";

import { z } from "zod";

import { UserSchema } from "@/lib/validation";

export const createUser = async (
  data: z.infer<typeof UserSchema>
): Promise<{ success: boolean; data: User | null }> => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/users`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    return {
      success: false,
      data: null,
    };
  }

  const result: { success: boolean; data: User } = await response.json();

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

  if (!response.ok) {
    return {
      success: false,
      data: null,
    };
  }

  const result: { success: boolean; data: User } = await response.json();

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
  }

  return { success: true };
};
