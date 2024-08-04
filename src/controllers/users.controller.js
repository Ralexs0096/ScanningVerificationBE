import { createConnection } from "../config/db/connection.js";
import { getAllUsersQuery } from "../config/queries/users.js";

export const getAllUsers = async (_, res) => {
  try {
    const connection = await createConnection()

    if (connection) {
      const [results] = await connection.query(getAllUsersQuery);

      if (results.length > 0) {
        return res.status(204)
      }

      return res.json(results)
    }

    return res.status(502).json({
      code: "connectionError",
      message: "Connection could not be established"
    })

  } catch (error) {
    return res.status(500).json({
      code: "unknown",
      message: "Something went wrong"
    })
  }
}