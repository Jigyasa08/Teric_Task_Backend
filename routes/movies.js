const express = require("express");
const router = express.Router();
const {
  getMovie,
  getMovieAll,
  postMovie,
  deleteMovie,
  editMovie,
} = require("../controllers/movie-controller");

router.get("/movie", getMovieAll);
router.post("/movie", postMovie);
router.get("/movie/:id", getMovie);
router.delete("/movie/:id", deleteMovie);
router.put("/movie/:id", editMovie);

module.exports = router;
