const mongoose = require("mongoose");
const movieData = require("./data/movieData");
const userData = require("./data/userData");

const Movie = require("./models/Movie");
const User = require("./models/User");

const connectDB = require("./config/db");
connectDB();

const importData = async () => {
  try {
    await Movie.deleteMany();
    await User.deleteMany();
    await Movie.insertMany(movieData);
    await User.insertMany(userData);
    console.log("Data imported");
    process.exit();
  } catch (err) {
    console.log(`Error ${err}`);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Movie.deleteMany();
    await User.deleteMany();
    console.log("Data destroyed");
    process.exit();
  } catch (err) {
    console.log(`Error ${err}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
