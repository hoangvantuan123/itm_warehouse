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


export const sqlServerITMV: TypeOrmModuleOptions = {
  type: 'mssql',
  host: '192.168.35.150',
  port: 14233,
  username: 'genuine',
  password: 'Itmv209#',
  database: 'ITMV',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: false,  
  cache: true,  
  extra: {
    trustServerCertificate: true,
    encrypt: false,  
    connectionTimeout: 10000000,
    max: 10000000,  // Số kết nối tối đa
    min: 10,  // Số kết nối tối thiểu
    idleTimeoutMillis: 3000000,  // Thời gian chờ cho kết nối nhàn rỗi
  },
  maxQueryExecutionTime: 10000,  // Giới hạn thời gian thực thi query là 10 giây
};
