import { createConnection } from './connection';
import { tbArea, tbMaestroEmpleados } from './schema';

const areas = [
  {
    codigoAre: '000',
    descripcionAre: 'Administración',
    codigoMod: '01',
    codigoCos: null,
    incePro: null,
    codigoAnt: '000',
    noTransporte: '*',
    fechaMod: new Date('2021-08-20'),
    costura: '1',
    produ: null,
    estado: '1',
    depto: '00'
  },
  {
    codigoAre: '001',
    descripcionAre: 'Linea 01A',
    codigoMod: '01',
    codigoCos: 'N01_100200',
    incePro: '*',
    codigoAnt: '001',
    noTransporte: ' ',
    fechaMod: new Date('2021-08-20'),
    costura: '*',
    produ: '*',
    estado: '1',
    depto: '02'
  },
  {
    codigoAre: '002',
    descripcionAre: 'Linea 01B',
    codigoMod: '01',
    codigoCos: 'N01_100200',
    incePro: '*',
    codigoAnt: null,
    noTransporte: ' ',
    fechaMod: new Date('2021-08-20'),
    costura: '*',
    produ: '*',
    estado: '1',
    depto: '02'
  },
  {
    codigoAre: '003',
    descripcionAre: 'Linea 02A',
    codigoMod: '01',
    codigoCos: 'N01_100200',
    incePro: '*',
    codigoAnt: '002',
    noTransporte: ' ',
    fechaMod: new Date('2021-08-20'),
    costura: '*',
    produ: '*',
    estado: '1',
    depto: '02'
  },
  {
    codigoAre: '004',
    descripcionAre: 'Linea 02B',
    codigoMod: '01',
    codigoCos: 'N01_100200',
    incePro: '*',
    codigoAnt: ' ',
    noTransporte: ' ',
    fechaMod: new Date('2021-08-20'),
    costura: '*',
    produ: '*',
    estado: '1',
    depto: '02'
  },
  {
    codigoAre: '005',
    descripcionAre: 'Linea 03A',
    codigoMod: '01',
    codigoCos: 'N01_100200',
    incePro: '*',
    codigoAnt: '003',
    noTransporte: ' ',
    fechaMod: new Date('2021-08-20'),
    costura: '*',
    produ: '*',
    estado: '1',
    depto: '02'
  },
  {
    codigoAre: '006',
    descripcionAre: 'Linea 03B',
    codigoMod: '01',
    codigoCos: 'N01_100200',
    incePro: '*',
    codigoAnt: ' ',
    noTransporte: ' ',
    fechaMod: new Date('2021-08-20'),
    costura: '*',
    produ: '*',
    estado: '1',
    depto: '02'
  },
  {
    codigoAre: '007',
    descripcionAre: 'Linea 04A',
    codigoMod: '01',
    codigoCos: 'N01_100200',
    incePro: '*',
    codigoAnt: '004',
    noTransporte: ' ',
    fechaMod: new Date('2021-08-20'),
    costura: '*',
    produ: '*',
    estado: '1',
    depto: '02'
  },
  {
    codigoAre: '008',
    descripcionAre: 'Linea 04B',
    codigoMod: '01',
    codigoCos: 'N01_100200',
    incePro: '*',
    codigoAnt: ' ',
    noTransporte: ' ',
    fechaMod: new Date('2021-08-20'),
    costura: '*',
    produ: '*',
    estado: '1',
    depto: '02'
  },
  {
    codigoAre: '009',
    descripcionAre: 'Linea 05A',
    codigoMod: '01',
    codigoCos: 'N01_100200',
    incePro: '*',
    codigoAnt: '005',
    noTransporte: ' ',
    fechaMod: new Date('2021-08-20'),
    costura: '*',
    produ: '*',
    estado: '1',
    depto: '02'
  },
  {
    codigoAre: '010',
    descripcionAre: 'Linea 05B',
    codigoMod: '01',
    codigoCos: 'N01_100200',
    incePro: '*',
    codigoAnt: ' ',
    noTransporte: ' ',
    fechaMod: new Date('2021-08-20'),
    costura: '*',
    produ: '*',
    estado: '1',
    depto: '02'
  },
  {
    codigoAre: '011',
    descripcionAre: 'Linea 06A',
    codigoMod: '01',
    codigoCos: 'N01_100200',
    incePro: '*',
    codigoAnt: '006',
    noTransporte: ' ',
    fechaMod: new Date('2021-08-20'),
    costura: '*',
    produ: '*',
    estado: '1',
    depto: '02'
  }
];

async function seedAreas() {
  console.log('Seeding tb_areas...');

  const db = await createConnection();

  if (db) {
    await db.insert(tbArea).values(areas);

    console.log('Areas Seeding completed!');
  }
}

const empleados = [
  {
    codigoEmp: '046259',
    cedulaId: '29112007004',
    fEmision: null,
    fVencimie: null,
    nombre1: 'NIDA',
    nombre2: null,
    apellido1: 'CACHERO',
    apellido2: 'SIMPLINA',
    nombreCompleto: 'NIDA CACHERO SIMPLINA',
    codigoSex: 'F',
    codigoEc: '01',
    telefono: null,
    movil: null,
    fechaNaci: new Date('1972-10-17'),
    inss: '26566247',
    codigoPai: '001',
    pais: 'Nicaragua',
    codigoDep: '008',
    departamento: 'Leon',
    codigoMun: '291',
    municipio: 'Larreynaga Malpaisillo',
    direccion: 'CIUDAD EL DORAL K95',
    mNombre1: 'SEVERA',
    mNombre2: null,
    mApellido1: 'CHACHERO',
    mApellido2: null,
    mCedula: null,
    pNombre1: 'HILARIO',
    pNombre2: null,
    pApellido1: 'SIMPLINA',
    pApellido2: null,
    pCedula: null,
    cNombre1: null,
    cNombre2: null,
    cApellido1: null,
    cApellido2: null,
    cCedula: null,
    codigoEsmi: null,
    codigoMod: null,
    codigoAre: null,
    codigoEst: '01',
    codigoCar: '069',
    reingreso: '1',
    codigoAnterior: null,
    bajaContratacion: null,
    fechaIngreso: new Date('2018-05-21'),
    fechaEgreso: null,
    codigoMot: null,
    codigoCau: null,
    salarioBase: '9500.00',
    salarioViatico: '0.00',
    salarioGeneral: '9500.00',
    observacion: null,
    codigoPag: '01',
    noCuenta: null,
    codigoCc: null,
    codigoDep2: '001',
    departamento2: 'Managua',
    codigoMun2: '018',
    municipio2: 'Mateare',
    codigoVac: null,
    vacuna1: '*',
    fechav1: null,
    vacuna2: null,
    fechav2: null,
    vacuna3: null,
    fechav3: null,
    vacuna4: null,
    fechav4: null,
    nombreVacuna: null,
    huella: 0,
    celularEstado: null,
    busEstado: null
  },
  {
    codigoEmp: '051718',
    cedulaId: '29052007001',
    fEmision: null,
    fVencimie: null,
    nombre1: 'HYE-SHIN',
    nombre2: null,
    apellido1: 'HAN',
    apellido2: null,
    nombreCompleto: 'HYE-SHIN HAN',
    codigoSex: 'F',
    codigoEc: '01',
    telefono: null,
    movil: null,
    fechaNaci: new Date('1978-11-01'),
    inss: '37559920',
    codigoPai: '001',
    pais: 'Nicaragua',
    codigoDep: '008',
    departamento: 'Leon',
    codigoMun: '290',
    municipio: 'Telica',
    direccion: 'Km 13 Car. Masaya, Residencial Jacaranda C#12',
    mNombre1: 'YOUNG-JA',
    mNombre2: null,
    mApellido1: 'CHANG',
    mApellido2: null,
    mCedula: null,
    pNombre1: 'YOUNG',
    pNombre2: null,
    pApellido1: 'HAN',
    pApellido2: null,
    pCedula: null,
    cNombre1: null,
    cNombre2: null,
    cApellido1: null,
    cApellido2: null,
    cCedula: null,
    codigoEsmi: null,
    codigoMod: null,
    codigoAre: null,
    codigoEst: '01',
    codigoCar: '069',
    reingreso: '1',
    codigoAnterior: null,
    bajaContratacion: null,
    fechaIngreso: new Date('2019-03-04'),
    fechaEgreso: null,
    codigoMot: null,
    codigoCau: null,
    salarioBase: '10000.00',
    salarioViatico: '0.00',
    salarioGeneral: '10000.00',
    observacion: null,
    codigoPag: '01',
    noCuenta: null,
    codigoCc: null,
    codigoDep2: '001',
    departamento2: 'Managua',
    codigoMun2: '013',
    municipio2: 'Managua',
    codigoVac: '06',
    vacuna1: '*',
    fechav1: new Date('2021-07-09'),
    vacuna2: null,
    fechav2: null,
    vacuna3: null,
    fechav3: null,
    vacuna4: null,
    fechav4: null,
    nombreVacuna: 'J&J/Janssen',
    huella: 0,
    celularEstado: null,
    busEstado: null
  }
];

async function seedEmpleados() {
  console.log('Seeding tb_maestro_empleados...');

  const db = await createConnection();

  if (db) {
    await db.insert(tbMaestroEmpleados).values(empleados);
  }

  console.log('Empleados Seeding completed');
}

seedAreas().catch((err) => {
  console.error('Error seeding tb_areas:', err);
  process.exit(1);
});

seedEmpleados().catch((err) => {
  console.error('Error seeding tb_maestro_empleados', err);
  process.exit(1);
});

process.exit(0);
