const { json } = require("express");
const express = require("express");
const userRoutes = require("./routes");
const app = express();
const port = 3000;

app.use(json());

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log("Server is started and listen on port no " + `${port}`);
});
