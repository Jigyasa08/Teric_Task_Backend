const Movie = require("../models/Movie");

const getMovieAll = (req, res) => {
  Movie.find()
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

const getMovie = (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => res.json(movie))
    .catch((err) => res.status(400).json("Error: " + err));
};

const postMovie = (req, res) => {
  const { name, year, genre, avatar } = req.body;
  // console.log(name);

  const newMovie = new Movie({
    name,
    year,
    genre,
    avatar,
  });
  console.log(newMovie);
  newMovie
    .save()
    .then(() => res.json("Movie Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const deleteMovie = (req, res) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => res.json("Movie Deleted Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const editMovie = (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      // movie.id = req.body.id;
      movie.name = req.body.name;
      movie.genre = req.body.genre;
      movie.avatar = req.body.avatar;
      movie.year = req.body.year;

      movie
        .save()
        .then(() => res.json("Movie updated Successfully"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = { getMovie, getMovieAll, deleteMovie, editMovie, postMovie };
