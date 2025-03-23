import { Request, Response } from 'express';
import { createConnection } from '../config/db/connection';
import { tbArea } from '../config/db/schema';

export const getAllAreas = async (_: Request, res: Response) => {
  try {
    const db = await createConnection();

    if (!db) {
      res.status(502).json({
        code: 'connectionError',
        message: 'Connection could not be established'
      });
      return;
    }

    const results = await db.select().from(tbArea);

    if (results.length === 0) {
      res.status(204);
    }

    res.json(
      results.map(({ codigoAre, descripcionAre }) => ({
        areaId: codigoAre,
        name: descripcionAre
      }))
    );
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      code: 'unknown',
      message: 'Something went wrong'
    });
  }
};
