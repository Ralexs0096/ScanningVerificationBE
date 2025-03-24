import { Request, Response } from 'express';
import { createConnection } from '../config/db/connection';
import { verifyCodesByAreaQuery } from '../config/queries/verification';
import { tbMaestroEmpleados } from '../config/db/schema';
import { and, eq, inArray } from 'drizzle-orm';

export const verifyCodesByArea = async (req: Request, res: Response) => {
  try {
    const { area, userCodes } = req.body;

    if (!area || userCodes.length === 0) {
      res.json({
        code: 'IncorrectData',
        message: 'All fields are required'
      });
      return;
    }

    const db = await createConnection();

    if (!db) {
      res.status(502).json({
        code: 'connectionError',
        message: 'Connection could not be established'
      });
      return;
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
    const codes = userCodes.map((userCode: string) => userCode.slice(0, 6));

    const results = await db
      .select({
        codigoEmp: tbMaestroEmpleados.codigoEmp,
        cedulaId: tbMaestroEmpleados.cedulaId,
        nombreCompleto: tbMaestroEmpleados.nombreCompleto
      })
      .from(tbMaestroEmpleados)
      .where(
        and(
          eq(tbMaestroEmpleados.codigoAre, area),
          inArray(tbMaestroEmpleados.codigoEmp, codes)
        )
      );

    const response = codes.map((code: string) => ({
      code,
      belongsToThisArea: false
    }));

    if (results.length > 0) {
      for (const { codigoEmp } of results) {
        const index = response.findIndex(
          ({ code }: { code: string }) => code === codigoEmp
        );
        response[index].belongsToThisArea = true;
      }
    }

    res.json(response);
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      code: 'unknown',
      message: 'Something went wrong'
    });
  }
};
