require ('dotenv').config();

const db_name = process.env.MYSQLDATABASE;
const db_user = process.env.MYSQLUSER;
const db_password = process.env.MYSQLPASSWORD;
const db_port = process.env.MYSQLPORT;
const db_host = process.env.MYSQLHOST;
const db_url = process.env.MYSQLURL;

module.exports = {
    db_name,
    db_user,
    db_password,
    db_port,
    db_host
};