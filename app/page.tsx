import React from "react";

import { getUsers } from "@/data/users";

import Header from "./_components/Header";
import TablePagination from "./_components/Pagination";
import UserTable from "./_components/UserTable";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const limit = 6;
  const { page = "" } = await searchParams;
  const currentPage = Math.max(Number(page) || 1, 1);

  const { totalUsers, users } = await getUsers(currentPage, limit);

  return (
    <>
      <Header totalUsers={totalUsers} />
      <UserTable users={users} />
      <TablePagination
        count={totalUsers}
        limit={limit}
        currentPage={currentPage}
      />
    </>
  );
};

export default Page;
