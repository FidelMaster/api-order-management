import { Sequelize } from 'sequelize-typescript';
import config from './config.json';

// Obtener la configuración según el entorno (development, test, production)
const env = 'development';
const { database, username, password, host, dialect } = config[env];

const sequelize = new Sequelize({
    database: database, 
    dialect: dialect as 'mysql',
    username: username, 
    password: password, 
    host: "programas.net-ni.com",
    port: 3306,
    models: [__dirname + '/../models/*.model.*']
});

export default sequelize;
