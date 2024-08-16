import { DataSource } from 'typeorm';


export default new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: 'pass123',
  database: 'postgres',
  synchronize: false,
  logging: false,
  entities: [],
  migrations: ['./src/migration/*.ts'],
  subscribers: [],
});
