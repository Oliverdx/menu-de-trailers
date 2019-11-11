const path = require('path')
const fs = require('fs');

function getMovieList() {

  const trailersPath = path.join(path.dirname(__dirname), './movies');
  return fs.readdirSync(trailersPath);

}

function getMovie(name) {

  const trailersPath = path.join(path.dirname(__dirname), './movies/', name);
  return fs.readFileSync(trailersPath, 'UTF-8');
}

module.exports = {
  getMovieList,
  getMovie
}