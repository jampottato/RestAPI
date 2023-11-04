const express = require("express");
const app = express();
app.use(express.json());

let customerList = [
  {
    id: 1,
    name: "Kazu",
    age: 22,
    status: "active",
  },
  {
    id: 2,
    name: "Kumori",
    age: 22,
    status: "active",
  },
  {
    id: 3,
    name: "Suguru",
    age: 22,
    status: "Inactive",
  },
  {
    id: 4,
    name: "Satouru",
    age: 22,
    status: "Inactive",
  },
];

//this method get/request a data from the array of customerList

app.get("/customer", (req, res) => {
  res.status(302).json(customerList);
});

//grab the data sent by client
// add data to customerList
// to return new list

app.post("/customer", (req, res) => {
  const addCustomer = req.body;
  customerList.push(addCustomer);
  res.status(201).json(customerList);
});

//grab the new Customer name
//loop through list and update names
//resturn the new list

app.put("/customer", (req, res) => {
  const newName = req.body.newName;
  for (let i = 0; i < customerList.length; i++) {
    customerList[i].name = newName;
  }
  res.status(200).json(customerList);
});

app.delete("/customer/:id", (req, res) => {
  //Get the customerId
  //delete user with id
  // delete id

  const id = req.params.id;
  const foundId = false;
  for (let i = 0; i < customerList.length; i++) {
    if (customerList[i].id == id) {
      customerList.splice(i, 1);
    }
  }
  if (!foundId) {
    res.status(404).json({ error: "Customer Id not found" });
  }
  res.status(200).json(customerList);
});

//this method is use to run the code into the browser in localhost
//node filename.js

app.listen("3000", () => {
  console.log("Server Runnning on port 3000");
});
