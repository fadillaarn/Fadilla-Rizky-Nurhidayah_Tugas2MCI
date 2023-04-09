const globals = require("./globals.js");

const {db_name} = globals;
const {db_user} = globals;
const {db_password} = globals;
const {db_port} = globals;
const {db_host} = globals;
const port = process.env.PORT || 3000;

module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "db_name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

