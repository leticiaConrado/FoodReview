import Sequelize from 'Sequelize';
import dotenv from 'dotenv';

//load Config
dotenv.config({ path: './config/config.env' });

export const connection = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,

  {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST
  }
);
export default async function testConn(){
  try {
    await connection.authenticate();
    console.log("connection has been established successfully.");
  }catch(error) {
    console.error("Unable to connect to the database:", error);

  }
};