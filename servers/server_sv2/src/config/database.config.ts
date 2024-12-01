import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as oracledb from 'oracledb';

export const databaseConfig1: TypeOrmModuleOptions = {
  type: 'oracle',
  username: 'mighty',
  password: 'mighty',
  serviceName: 'ITMVMES',
  extra: {
    connectString: '192.168.35.202:1521/ITMVMES',
    user: 'mighty',
    password: 'mighty',
    role: oracledb.SYSDBA,
    externalAuth: false,
    poolMax: 200,
    poolMin: 20,
    poolIncrement: 20,
    poolTimeout: 60,
  },
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
};


export const sqlServerITMV20240117: TypeOrmModuleOptions = {
  type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'tuanhoang',
      password: 'your_password',
      database: 'itmv20240117',
      synchronize: true,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      logging: ['query', 'error', 'schema'],

  
};
