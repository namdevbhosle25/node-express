const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/meanacademyform", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongoDB.");
  })
  .catch((err) => {
    console.log("Error connecting to mongoDB.", err);
  });

app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});
