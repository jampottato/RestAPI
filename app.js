const express = require("express");
const app = express();
app.use(express.json());

let customerList = [
  {
    name: "Kazu",
    age: 22,
    status: "active",
  },
  {
    name: "Kumori",
    age: 22,
    status: "active",
  },
  {
    name: "Suguru",
    age: 22,
    status: "Inactive",
  },
  {
    name: "Satouru",
    age: 22,
    status: "Inactive",
  },
];

//this method get/request a data from the array of customerList

app.get("/customer", (req, res) => {
  res.json(customerList);
});

//grab the data sent by client
// add data to customerList
// to return new list

app.post("/customer", (req, res) => {
  const addCustomer = req.body;
  customerList.push(addCustomer);
  res.json(customerList);
});

//grab the new Customer name
//loop through list and update names
//resturn the new list

app.put("/customer", (req, res) => {
  const newName = req.body.newName;
  for (let i = 0; i < customerList.length; i++) {
    customerList[i].name = newName;
  }
  res.json(customerList);
});

//this method is use to run the code into the browser in localhost
//node filename.js

app.listen("3000", () => {
  console.log("Server Runnning on port 3000");
});
