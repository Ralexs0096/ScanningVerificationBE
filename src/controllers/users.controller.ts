import { RowDataPacket } from 'mysql2';
import { Request, Response } from 'express';
import { createConnection } from '../config/db/connection';
import { getAllUsersQuery, getUserByIdQuery } from '../config/queries/users';

export const getAllUsers = async (_: Request, res: Response) => {
  try {
    const connection = await createConnection();
    if (!connection) {
      res.status(502).json({
        code: 'connectionError',
        message: 'Connection could not be established'
      });
      return;
    }
    const [results] = await connection.query<RowDataPacket[]>(getAllUsersQuery);

    if (results.length === 0) {
      res.status(204);
      return;
    }

    res.json(results);
    await connection.end();
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      code: 'unknown',
      message: 'Something went wrong'
    });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      res.json({
        code: 'UserId',
        message: 'User Id is required'
      });
      return;
    }

    const connection = await createConnection();

    if (!connection) {
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
    const codigoEmp = userId.slice(0, 6);

    const [results] = await connection.query<RowDataPacket[]>(
      getUserByIdQuery(codigoEmp)
    );

    if (results.length === 0) {
      res.status(200).json({
        message: 'User not found'
      });
      return;
    }

    res.json(results);
    await connection.end();
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      code: 'unknown',
      message: 'Something went wrong'
    });
  }
};
