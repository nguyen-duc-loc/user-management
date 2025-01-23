import { notFound } from "next/navigation";
import React from "react";

import { getUserById } from "@/data/users";

import Header from "../_components/Header";
import UpdateUserForm from "./_components/UpdateUserForm";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const user = await getUserById(id);
  if (!user) {
    return {
      title: "404: User not found",
    };
  }
  return {
    title: user.fullname,
  };
};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const user = await getUserById(id);
  if (!user) {
    notFound();
  }

  return (
    <>
      <Header title="Profile" />
      <UpdateUserForm user={user} />
    </>
  );
};

export default Page;
