const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const router = require("./routes/users");

const connectDB = require("./config/db");
connectDB();

app.use("/api/", router);

app.listen(5000, () => {
  console.log("Server is up & running");
});
