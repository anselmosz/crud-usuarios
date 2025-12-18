const dotenv = require("dotenv")
dotenv.config({path: "./.env"});

module.exports =  {
  client: process.env.DB_CLIENT,
  connection: {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};