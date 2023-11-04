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
  const { customerId, customerName, customerAge, status } = req.body;
  connection.query(
    "INSERT INTO customer (`customerId`, `customerName`, `customerAge`, `status`) VALUES (?,?,?,?);",
    [customerId, customerName, customerAge, status],
    (err, result) => {
      if (err) {
        res.status(201).json(err);
      } else {
        res.status(302).json(result);
      }
    }
  );
});

app.put("/customer", (req, res) => {
  const { customerId, customerName, customerAge, status } = req.body;
  connection.query(
    "UPDATE customer SET `customerName` = ?, `customerAge` = ?, `status` = ? WHERE `customerId` = ?",
    [customerName, customerAge, status, customerId],
    (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }
    }
  );
});

app.delete("/customer/:id", (req, res) => {
  const id = req.params.id;
  const foundId = false; // Initialize foundId as false

  connection.query(
    "DELETE FROM customer WHERE `customerId` = ?",
    [id],
    (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else if (result.affectedRows === 0) {
        res.status(404).json({ error: "Customer Id not found" });
      } else {
        res.status(200).json({ message: "Customer deleted successfully" });
      }
    }
  );
});

//this method is use to run the code into the browser in localhost
//node filename.js

app.listen("3000", () => {
  console.log("Server Runnning on port 3000");
});
