"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_json_1 = __importDefault(require("./config.json"));
// Obtener la configuración según el entorno (development, test, production)
const env = 'development';
const { database, username, password, host, dialect } = config_json_1.default[env];
const sequelize = new sequelize_typescript_1.Sequelize({
    database: database,
    dialect: dialect,
    username: username,
    password: password,
    host: "programas.net-ni.com",
    port: 3306,
    models: [__dirname + '/../models/*.model.*']
});
exports.default = sequelize;
