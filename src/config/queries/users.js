
export const getAllUsersQuery = `SELECT * FROM tb_maestro_empleados tme`

export const getUserByIdQuery = (codigoEmp, codigoEc) => `
SELECT nombre_completo, cedula_id FROM tb_maestro_empleados tme 
WHERE tme.codigo_emp = ${codigoEmp} and tme.codigo_ec = ${codigoEc}
`