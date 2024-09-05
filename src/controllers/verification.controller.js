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
    const codes = userCodes.map((userCode) => userCode.slice(0, 6))

    const [results] = await connection.query(
      verifyCodesByAreaQuery,
      [area, codes]
    );

    const response = codes.map((code) => ({ code, belongsToThisArea: false }))

    if (results.length > 0) {
      for (const { codigo_emp } of results) {
        const index = response.findIndex(({ code }) => code === codigo_emp)
        response[index].belongsToThisArea = true
      }
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