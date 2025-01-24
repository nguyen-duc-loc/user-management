import mysql2 from "mysql2/promise";

const dbConnect = async (): Promise<mysql2.Connection> => {
  return await mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
};

export default dbConnect;
