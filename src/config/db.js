const dotenv = require('dotenv');

dotenv.config();

const logger = require('../utils/logger').default;

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, DB_HOST } = process.env;

module.exports = {
  development: {
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    host: DB_HOST,
    dialect: 'postgres',
    logging: (msg) => logger.debug(msg),
  },
  test: {
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    host: DB_HOST,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
};
