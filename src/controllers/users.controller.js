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

    /**
     * The user Id is actually the bar code of a `empleado` carnet.
     *  this code contains the following structure:
     * 
     *  6 first characters are the `codigo_emp`
     *  2 last characters are the `codigo_ec`
     * 
     * e.g. 086197 - 01
     * 
     * check the `tb_maestro_empleados` table for reference
     */
    const codigoEmp = userId.slice(0, 6)

    const [results] = await connection.query(getUserByIdQuery(codigoEmp));

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
