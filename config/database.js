const globals = require("./globals.js");

const {db_name} = globals;
const {db_user} = globals;
const {db_password} = globals;
const {db_port} = globals;
const {db_host} = globals;
const port = process.env.PORT || 3000;

module.exports = {
  "development": {
    "username": db_user,
    "password": db_password,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql",
    "port": db_port
  },
  "test": {
    "username": db_user,
    "password": db_password,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql",
    "port": db_port
  },
  "production": {
    "username": db_user,
    "password": db_password,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql",
    "port": db_port
  }
}
