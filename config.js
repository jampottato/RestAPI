const mysql = require("mysql");
const connection = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  port: "3306",
  password: "Kazuki022",
  database: "ExpressJS",
});

module.exports.connection = connection;
