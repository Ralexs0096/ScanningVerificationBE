import { createConnection } from "../config/db/connection.js";
import { verifyCodesByAreaQuery } from "../config/queries/verification.js";

// for testing purposes
// ['046259', '051718', '066034', '066577', '069121']

export const verifyCodesByArea = async (req, res) => {
  try {
    const { area, userCodes } = req.body

    if (!area || userCodes.length === 0) {
      return res.json({
        code: "IncorrectData",
        message: "All fields are required"
      })
    }

    const connection = await createConnection()

    if (!connection) {
      return res.status(502).json({
        code: "connectionError",
        message: "Connection could not be established"
      })

    }

    const [results] = await connection.query(
      verifyCodesByAreaQuery,
      [area, userCodes]
    );

    if (results.length === 0) {
      return res.status(204)
    }

    const response = userCodes.map((code) => ({ code, belongsToThisArea: false }))

    for (const { codigo_emp } of results) {
      const index = response.findIndex(({ code }) => code === codigo_emp)
      response[index].belongsToThisArea = true
    }

    res.json(response)
    await connection.end()
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      code: "unknown",
      message: "Something went wrong"
    })
  }
}