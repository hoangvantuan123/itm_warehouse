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
  logging: true,  
  cache: true,  
  extra: {
    trustServerCertificate: false,
    encrypt: false,  
    connectionTimeout: 1200000,  // Tăng thời gian chờ kết nối lên 20 phút
    requestTimeout: 1200000,  // Tăng thời gian chờ yêu cầu lên 20 phút
    max: 1000,  // Số kết nối tối đa
    min: 10,  // Số kết nối tối thiểu
    idleTimeoutMillis: 600000,  // Tăng thời gian chờ cho kết nối nhàn rỗi lên 10 phút
  },
  maxQueryExecutionTime: 1200000,  // Giới hạn thời gian thực thi query là 20 phút
};
