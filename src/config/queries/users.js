
export const getAllUsersQuery = `SELECT * FROM tb_maestro_empleados tme`

export const getUserById = (id) => `SELECT * FROM tb_maestro_empleados tme WHERE tme.codigo_emp = ${id}`