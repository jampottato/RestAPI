app.get("/status", (request, response) => {
  const status = {
    Status: "Running",
  };

  response.send(status);
});
