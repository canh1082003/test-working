import mysql from 'mysql2/promise';
import {  DataSource } from 'typeorm';
import { Student } from './postgresql/entities/Student';
import config from '../utils/config';


class MysqlDatabase {
  connection : DataSource;
  dataSource = new DataSource({
    ...config.mysqlConfig,
    entities:[Student],
  })
  async connect():Promise<DataSource>{
    try {
      this.connection = await this.dataSource.initialize();
      console.log('Connected to the database!');
      return this.connection;
    } catch (error) {
      console.error('Error connecting to the database:', error.message);
      throw error;
    }
  };
}
const mysqlDatabase = new MysqlDatabase();

export default mysqlDatabase;