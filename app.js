const express = require("express");
const app = express();
const { connection } = require("./config");
app.use(express.json());

app.get("/customer", (req, res) => {
  connection.query("SELECT * FROM customer;", (err, result) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(302).json(result);
    }
  });
});

app.post("/customer", (req, res) => {
  connection.query(
    "INSERT INTO customer (`customerId`, `customerName`, `customerAge`, `status`) VALUES ('3', 'clark', '22', '0');",
    (err, result) => {
      if (err) {
        res.status(201).json(err);
      } else {
        res.status(302).json(result);
      }
    }
  );
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
