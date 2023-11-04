const express = require("express");
const app = express();
const mysql = require("mysql");
const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "Kazuki022",
  database: "ExpressJS",
});

app.use(express.json());

app.get("/customer", (req, res) => {
  // res.status(302).json(customerList);
});

app.post("/customer", (req, res) => {
  // res.status(201).json(customerList);
});

app.put("/customer", (req, res) => {
  // res.status(200).json(customerList);
});

app.delete("/customer/:id", (req, res) => {
  // res.status(200).json(customerList);
});

//this method is use to run the code into the browser in localhost
//node filename.js

app.listen("3000", () => {
  console.log("Server Runnning on port 3000");
});
