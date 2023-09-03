require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || "dev",
    host: process.env.HOST || "127.9.63.7",
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || "root",
    dbPassword: process.env.DB_PASSWORD || "root",
    dbHost: process.env.DB_HOST || '127.9.63.7',
    dbName: process.env.DB_NAME || 'dbzoo',
    dbPort: process.env.DB_PORT || 27017
}

module.exports = { config }
