"use client";

import React from "react";

import { deleteUserById, updateUserById } from "@/actions/users";
import UserForm from "@/components/forms/UserForm";

const UpdateUserForm = ({ user }: { user: User }) => {
  const { fullname, email, birthdate, phone } = user;

  return (
    <UserForm
      formType="UPDATE"
      defaultValues={{
        fullname,
        email,
        birthdate,
        phone,
      }}
      onSubmit={async (data) => await updateUserById(user.id, data)}
      onDelete={async () => await deleteUserById(user.id)}
    />
  );
};

export default UpdateUserForm;
