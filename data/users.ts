export const getUsers = async (
  page: number,
  limit: number
): Promise<{
  totalUsers: number;
  users: User[];
}> => {
  const searchParams = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/users?${searchParams.toString()}`
  );

  if (!response.ok) {
    return {
      totalUsers: 0,
      users: [],
    };
  }

  const data = (await response.json()).data;
  const totalUsers = data.totalUsers as number;
  const users = data.users as User[];

  return { totalUsers, users };
};

export const getUserById = async (id: string): Promise<User | null> => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/users/${id}`);

  if (!response.ok) {
    return null;
  }

  const user = (await response.json()).data as User;

  return user;
};
