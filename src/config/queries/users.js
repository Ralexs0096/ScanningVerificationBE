
export const getAllUsersQuery = `SELECT * FROM tb_maestro_empleados tme`

export const getUserByIdQuery = (id) => `SELECT * FROM tb_maestro_empleados tme WHERE tme.codigo_emp = ${id}`