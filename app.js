const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.envPORT || 3000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT: ", PORT);
});

app.get("/status", (request, response) => {
  const status = {
    Status: "Running",
  };

  response.send(status);
});
