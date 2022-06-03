import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: parseInt(process.env.PORT || 8080, 10),

  database: {
    name: process.env.PG_DB,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
  },
};

export default config;
