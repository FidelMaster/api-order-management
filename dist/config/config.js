"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_NAME, DB_SERVER, DB_PORT, DB_DIALECT, DB_NAME_TEST, DB_NAME_PROD, } = process.env;
const config = {
    development: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: "programas.net-ni.com",
        port: parseInt(DB_PORT || '3306', 10),
        dialect: DB_DIALECT || 'mysql',
    },
    test: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME_TEST,
        host: "programas.net-ni.com",
        port: parseInt(DB_PORT || '3306', 10),
        dialect: DB_DIALECT || 'mysql',
    },
    production: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME_PROD,
        host: "programas.net-ni.com",
        port: parseInt(DB_PORT || '3306', 10),
        dialect: DB_DIALECT || 'mysql',
    },
};
exports.default = config;
