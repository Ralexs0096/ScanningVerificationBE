
export const verifyCodesByAreaQuery =
  `SELECT codigo_emp, cedula_id, nombre_completo FROM tb_maestro_empleados tme 
WHERE codigo_are = ? and 
codigo_emp in(?)`