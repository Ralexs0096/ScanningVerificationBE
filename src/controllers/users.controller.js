import { createConnection } from "../config/db/connection.js";
import { getAllUsersQuery, getUserByIdQuery } from "../config/queries/users.js";

export const getAllUsers = async (_, res) => {
  try {
    const connection = await createConnection()

    if (!connection) {
      return res.status(502).json({
        code: "connectionError",
        message: "Connection could not be established"
      })

    }

    const [results] = await connection.query(getAllUsersQuery);

    if (results.length === 0) {
      return res.status(204)
    }

    res.json(results)
    await connection.end()
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      code: "unknown",
      message: "Something went wrong"
    })
  }
}

export const getUserById = async (req, res) => {
  try {
    const { userId } = req.params

    if (!userId) {
      return res.json({
        code: "UserId",
        message: "User Id is required"
      })
    }

    const connection = await createConnection()

    if (!connection) {
      return res.status(502).json({
        code: "connectionError",
        message: "Connection could not be established"
      })

    }

    const [results] = await connection.query(getUserByIdQuery(userId));

    if (results.length === 0) {
      return res.status(200).json({
        message: "User not found"
      })
    }

    res.json(results)
    await connection.end()
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      code: "unknown",
      message: "Something went wrong"
    })
  }
}
