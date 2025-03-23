import { Request, Response } from 'express';
import { createConnection } from '../config/db/connection';
import { getAllAreasQuery } from '../config/queries/areas';
import { RowDataPacket } from 'mysql2';

export const getAllAreas = async (_: Request, res: Response) => {
  try {
    const connection = await createConnection();

    if (!connection) {
      res.status(502).json({
        code: 'connectionError',
        message: 'Connection could not be established'
      });
      return;
    }

    const [results] = await connection.query<RowDataPacket[]>(getAllAreasQuery);

    if (results.length === 0) {
      res.status(204);
    }

    res.json(
      results.map(({ codigo_are, descripcion_are }) => ({
        areaId: codigo_are,
        name: descripcion_are
      }))
    );

    await connection.end();
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      code: 'unknown',
      message: 'Something went wrong'
    });
  }
};
