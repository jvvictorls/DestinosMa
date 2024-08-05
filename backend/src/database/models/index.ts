import config from "../config/database";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(config);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
}

testConnection();

export default sequelize;