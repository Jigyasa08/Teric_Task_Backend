const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const connectDB = require("./config/db");
connectDB();

app.listen(5000, () => {
  console.log("Server is up & running");
});