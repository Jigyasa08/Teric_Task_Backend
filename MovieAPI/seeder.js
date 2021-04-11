const mongoose = require("mongoose");
const item = require("./data/data");
const Movie = require("./models/Movie");
const connectDB = require("./config/db");

connectDB();
const importData = async () => {
  try {
    await Movie.deleteMany();
    await Movie.insertMany(item);
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
