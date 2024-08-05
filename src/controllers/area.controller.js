import { createConnection } from "../config/db/connection.js";
import { getAllAreasQuery } from "../config/queries/areas.js";


export const getAllAreas = async (_, res) => {
  try {
    const connection = await createConnection()

    if (!connection) {
      return res.status(502).json({
        code: "connectionError",
        message: "Connection could not be established"
      })

    }

    const [results] = await connection.query(getAllAreasQuery);

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