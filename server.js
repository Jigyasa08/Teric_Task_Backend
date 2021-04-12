const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const connectDB = require("./config/db");
connectDB();

const authRoutes = require("./routes/users");
const movieRoutes = require("./routes/movies");
app.use("/", movieRoutes);
app.use("/account/", authRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`The server is up and running.`);
});
