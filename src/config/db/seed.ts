import { createConnection } from './connection';
import { tbArea } from './schema';

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

    console.log('Seeding completed!');
  }
}

seedAreas().catch((err) => {
  console.error('Error seeding tb_areas:', err);
});
