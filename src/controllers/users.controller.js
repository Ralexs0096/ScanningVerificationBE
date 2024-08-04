import { createConnection } from "../config/db/connection.js";
import { getAllUsersQuery } from "../config/queries/users.js";

export const getAllUsers = async (_, res) => {
  try {

    const connection = await createConnection()

    const [results] = await connection.query(getAllUsersQuery);

    res.json(results)

  } catch (error) {
    console.log(error);
  }
}